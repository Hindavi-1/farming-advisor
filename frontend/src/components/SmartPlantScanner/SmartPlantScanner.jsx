import React, { useState, useRef, useEffect } from 'react';
import './styles/SmartPlantScanner.css';
import { FaCamera, FaLeaf, FaPrescriptionBottleAlt, FaExclamationTriangle, FaUpload, FaTimes, FaRedo } from 'react-icons/fa';

const SmartPlantScanner = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [detectedDisease, setDetectedDisease] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  
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

  // Set up drag and drop event listeners
  useEffect(() => {
    const dropZone = dropZoneRef.current;
    if (!dropZone) return;

    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(true);
    };

    const handleDragEnter = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFiles(e.dataTransfer.files[0]);
      }
    };

    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('dragenter', handleDragEnter);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('drop', handleDrop);

    return () => {
      dropZone.removeEventListener('dragover', handleDragOver);
      dropZone.removeEventListener('dragenter', handleDragEnter);
      dropZone.removeEventListener('dragleave', handleDragLeave);
      dropZone.removeEventListener('drop', handleDrop);
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
        setUploadError(null);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setUploadError('Unable to access camera. Please ensure you have granted camera permissions.');
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
      if (!isScanning && uploadedImage) {
        analyzeUploadedImage();
      }
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

  const handleFiles = (file) => {
    setUploadError(null);
    
    // Check if file is an image
    if (!file.type.match('image.*')) {
      setUploadError('Please select an image file');
      return;
    }
    
    // Check file size (limit to 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('Image size exceeds 10MB limit');
      return;
    }
    
    // Create a URL for the uploaded image
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage({
      url: imageUrl,
      file: file,
      name: file.name
    });
    
    // Stop camera if it's active
    if (cameraActive) {
      stopCamera();
    }
    
    // Reset scanning state
    setIsScanning(false);
    setDetectedDisease(null);
  };
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    handleFiles(file);
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  const analyzeUploadedImage = () => {
    if (!uploadedImage) return;
    
    setIsScanning(true);
    
    // Convert the uploaded image to a blob for API sending
    fetch(uploadedImage.url)
      .then(res => res.blob())
      .then(blob => {
        sendFrameToAPI(blob);
      })
      .catch(err => {
        console.error('Error processing uploaded image:', err);
        setIsScanning(false);
        setUploadError('Error processing image. Please try again.');
      });
  };

  const sendFrameToAPI = async (blob) => {
    // This is a placeholder for the actual API call
    // In a real implementation, you would send the blob to your Flask backend
    
    // For demo purposes, we'll simulate a response after a delay
    setTimeout(() => {
      // Simulate a disease detection response
      const mockResponse = {
        disease_name: 'Tomato Late Blight',
        suggestion: 'Apply copper-based fungicide and ensure proper spacing between plants',
        severity: 'medium', // low, medium, high
        details: {
          description: 'Late blight is a destructive disease affecting tomatoes and potatoes, caused by the fungus Phytophthora infestans.',
          cause: 'The disease is favored by cool, wet conditions and can spread rapidly through a garden or field.',
          symptoms: 'Symptoms include dark, water-soaked spots on leaves that quickly enlarge to form purple-brown, oily-looking blotches.',
          treatment: 'Remove and destroy infected plants, apply copper-based fungicides as a preventative measure, ensure good air circulation, and avoid overhead watering.'
        }
      };
      
      setDetectedDisease(mockResponse);
      setIsScanning(false);
    }, 1500);
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

  const resetScanner = () => {
    setDetectedDisease(null);
    setUploadedImage(null);
    setIsScanning(false);
    setCameraActive(false);
    setUploadError(null);
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const removeUploadedImage = () => {
    if (uploadedImage && uploadedImage.url) {
      URL.revokeObjectURL(uploadedImage.url);
    }
    setUploadedImage(null);
    setDetectedDisease(null);
  };

  return (
    <section className="smart-plant-scanner">
      <div className="scanner-container">
        <h1 className="scanner-title">Smart Plant <span className="gradient-text">Scanner</span></h1>
        <p className="scanner-description">
          Point your camera at a plant or upload an image to detect diseases and get treatment recommendations.
        </p>
        
        <div 
          className={`camera-container ${dragActive ? 'drag-active' : ''}`}
          ref={dropZoneRef}
        >
          {uploadedImage ? (
            <div className="image-preview-container">
              <img 
                src={uploadedImage.url} 
                alt="Uploaded plant" 
                className="uploaded-image" 
              />
              <div className="image-info">
                <span className="image-name">{uploadedImage.name}</span>
                <button className="image-remove-btn" onClick={removeUploadedImage}>
                  <FaTimes />
                </button>
              </div>
            </div>
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
              <p>Use camera or drop an image here</p>
              <div className="drop-instructions">
                <FaUpload className="upload-icon" />
                <span>Drag & drop an image or click to browse</span>
              </div>
            </div>
          )}
          
          {isScanning && (
            <div className="scanning-indicator">
              <div className="scanning-animation"></div>
              <p>Analyzing plant...</p>
            </div>
          )}
          
          {uploadError && (
            <div className="error-message">
              <FaExclamationTriangle />
              <p>{uploadError}</p>
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
        
        {/* Hidden file input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept="image/*" 
          style={{ display: 'none' }} 
        />
        
        <div className="scanner-controls">
          <div className="scanner-buttons">
            {!uploadedImage ? (
              <button 
                className={`scan-button ${isScanning ? 'scanning' : ''}`} 
                onClick={toggleScanning}
                disabled={isScanning}
              >
                {isScanning ? 'Analyzing...' : 'Start Camera Scanning'}
              </button>
            ) : (
              <button 
                className={`scan-button ${isScanning ? 'scanning' : ''}`} 
                onClick={analyzeUploadedImage}
                disabled={isScanning}
              >
                {isScanning ? 'Analyzing...' : 'Analyze Image'}
              </button>
            )}
            
            <button className="upload-button" onClick={triggerFileInput} disabled={isScanning}>
              <FaUpload /> Upload Image
            </button>
          </div>
          
          {(cameraActive || uploadedImage) && !isScanning && (
            <button className="camera-control-button" onClick={resetScanner}>
              <FaRedo /> Reset Scanner
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartPlantScanner;