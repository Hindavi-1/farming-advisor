import React, { useState, useRef, useEffect } from 'react';
import './styles/SmartPlantScanner.css';
import { FaCamera, FaLeaf, FaPrescriptionBottleAlt, FaExclamationTriangle, FaUpload, FaImage } from 'react-icons/fa';

const SmartPlantScanner = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [detectedDisease, setDetectedDisease] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // Start camera when component mounts
  useEffect(() => {
    return () => {
      // Clean up camera when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };
      
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraActive(true);
        setUploadedImage(null); // Clear any uploaded image when camera is activated
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Unable to access camera. Please ensure you have granted camera permissions.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setCameraActive(false);
      setIsScanning(false);
    }
  };

  const toggleScanning = () => {
    if (!cameraActive && !uploadedImage) {
      startCamera();
      setIsScanning(true);
    } else {
      setIsScanning(!isScanning);
    }
  };

  const captureFrame = () => {
    if (!videoRef.current || !canvasRef.current || !isScanning) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame to the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to blob
    canvas.toBlob(blob => {
      sendFrameToAPI(blob);
    }, 'image/jpeg');
  };

  // Capture frames at regular intervals when scanning is active
  useEffect(() => {
    let intervalId;
    
    if (isScanning && cameraActive) {
      intervalId = setInterval(captureFrame, 3000); // Capture every 3 seconds
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isScanning, cameraActive]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }
    
    // Clear any previous results
    setDetectedDisease(null);
    setShowDetails(false);
    
    // Stop camera if it's active
    if (cameraActive) {
      stopCamera();
    }
    
    // Create a URL for the uploaded image
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
  };

  const analyzeUploadedImage = () => {
    if (!uploadedImage) return;
    
    setIsAnalyzing(true);
    
    // Convert uploaded image to blob for API
    const img = new Image();
    img.onload = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      // Set canvas dimensions to match image
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the image to the canvas
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      // Convert canvas to blob
      canvas.toBlob(blob => {
        sendFrameToAPI(blob);
      }, 'image/jpeg');
    };
    img.src = uploadedImage;
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // const sendFrameToAPI = async (blob) => {
  //   // This is a placeholder for the actual API call
  //   // In a real implementation, you would send the blob to your Flask backend
    
  //   // For demo purposes, we'll simulate a response after a delay
  //   setTimeout(() => {
  //     // Simulate a disease detection response
  //     const mockResponse = {
  //       disease_name: 'Tomato Late Blight',
  //       suggestion: 'Apply copper-based fungicide and ensure proper spacing between plants',
  //       severity: 'medium', // low, medium, high
  //       details: {
  //         description: 'Late blight is a destructive disease affecting tomatoes and potatoes, caused by the fungus Phytophthora infestans.',
  //         cause: 'The disease is favored by cool, wet conditions and can spread rapidly through a garden or field.',
  //         symptoms: 'Symptoms include dark, water-soaked spots on leaves that quickly enlarge to form purple-brown, oily-looking blotches.',
  //         treatment: 'Remove and destroy infected plants, apply copper-based fungicides as a preventative measure, ensure good air circulation, and avoid overhead watering.'
  //       }
  //     };
      
  //     setDetectedDisease(mockResponse);
  //     setIsAnalyzing(false);
  //   }, 1500);
  // };

  const sendFrameToAPI = async (blob) => {
  setIsAnalyzing(true);

  try {
    const formData = new FormData();
    formData.append('file', blob);

    const response = await fetch('http://localhost:5000/predict', {
          // const response = await fetch('http://plantdiseaseprediction-production.up.railway.app/predict', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      const mappedResponse = {
        disease_name: result.label,
        suggestion: result.suggestion,
        severity: result.severity,
        details: {
          description: `Detected disease: ${result.label}. Confidence: ${(result.confidence * 100).toFixed(2)}%.`, // You can extend this with more info
          cause: 'Not available (can be added in backend)',
          symptoms: 'Not available (can be added in backend)',
          treatment: result.suggestion,
        }
      };

      setDetectedDisease(mappedResponse);
    } else {
      alert(`Prediction error: ${result.error}`);
    }
  } catch (error) {
    console.error('API call failed:', error);
    alert('Failed to connect to backend. Make sure Flask is running.');
  } finally {
    setIsAnalyzing(false);
  }
};


  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'low': return '#4caf50'; // Green
      case 'medium': return '#ff9800'; // Orange
      case 'high': return '#f44336'; // Red
      default: return '#ff9800';
    }
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const clearUploadedImage = () => {
    setUploadedImage(null);
    setDetectedDisease(null);
    setIsAnalyzing(false);
  };

  return (
    <section className="smart-plant-scanner">
      <div className="scanner-container">
        <h1 className="scanner-title">Smart Plant <span className="gradient-text">Scanner</span></h1>
        <p className="scanner-description">
          Point your camera at a plant or upload an image to detect diseases and get treatment recommendations.
        </p>
        
        <div className="camera-container">
          {uploadedImage ? (
            <img 
              src={uploadedImage} 
              alt="Uploaded plant" 
              className="uploaded-image" 
            />
          ) : (
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className={`camera-preview ${cameraActive ? 'active' : ''}`}
              onCanPlay={() => videoRef.current.play()}
            />
          )}
          
          {!cameraActive && !uploadedImage && (
            <div className="camera-placeholder">
              <FaCamera className="camera-icon" />
              <p>Tap the button below to activate camera or upload an image</p>
            </div>
          )}
          
          {isScanning && cameraActive && (
            <div className="scanning-indicator">
              <div className="scanning-animation"></div>
              <p>Scanning plant...</p>
            </div>
          )}

          {isAnalyzing && (
            <div className="scanning-indicator">
              <div className="scanning-animation"></div>
              <p>Analyzing image...</p>
            </div>
          )}
          
          {detectedDisease && (
            <div 
              className={`disease-overlay ${showDetails ? 'expanded' : ''}`}
              onClick={toggleDetails}
              style={{'--severity-color': getSeverityColor(detectedDisease.severity)}}
            >
              <div className="disease-header">
                <div className="disease-icon"><FaLeaf /></div>
                <div className="disease-info">
                  <h3 className="disease-name">{detectedDisease.disease_name}</h3>
                  <div className="severity-indicator">
                    <span className="severity-dot"></span>
                    <span className="severity-label">{detectedDisease.severity.charAt(0).toUpperCase() + detectedDisease.severity.slice(1)} Severity</span>
                  </div>
                </div>
              </div>
              
              <p className="suggestion-summary">
                <FaPrescriptionBottleAlt className="suggestion-icon" />
                {detectedDisease.suggestion}
              </p>
              
              {showDetails && (
                <div className="disease-details">
                  <div className="detail-section">
                    <h4>Description</h4>
                    <p>{detectedDisease.details.description}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Cause</h4>
                    <p>{detectedDisease.details.cause}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Symptoms</h4>
                    <p>{detectedDisease.details.symptoms}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Treatment</h4>
                    <p>{detectedDisease.details.treatment}</p>
                  </div>
                </div>
              )}
              
              <div className="tap-for-details">
                {showDetails ? 'Tap to collapse' : 'Tap for more details'}
              </div>
            </div>
          )}
        </div>
        
        <canvas ref={canvasRef} style={{ display: 'none' }} />
        <input 
          type="file" 
          ref={fileInputRef} 
          style={{ display: 'none' }} 
          accept="image/*" 
          onChange={handleImageUpload} 
        />
        
       <div className="scanner-controls">
  {!uploadedImage ? (
    <>
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
        <button className={`scan-button ${isScanning ? 'scanning' : ''}`} onClick={toggleScanning}>
          {isScanning ? 'Stop Scanning' : 'Start Scanning'}
        </button>

        <button className="upload-button" onClick={triggerFileInput}>
          <FaUpload /> Upload Plant Image
        </button>
      </div>

      {cameraActive && !isScanning && (
        <button className="camera-control-button" onClick={stopCamera} style={{ marginTop: '10px', width: '100%' }}>
          Turn Off Camera
        </button>
      )}
    </>
  ) : (
    <>
      <button className={`scan-button ${isAnalyzing ? 'scanning' : ''}`} onClick={analyzeUploadedImage} disabled={isAnalyzing}>
        {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
      </button>

      <button className="camera-control-button" onClick={clearUploadedImage}>
        Clear Image
      </button>

      <button className="upload-button" onClick={triggerFileInput}>
        <FaUpload /> Upload Different Image
      </button>
    </>
  )}
</div>

      </div>
    </section>
  );
};

export default SmartPlantScanner;