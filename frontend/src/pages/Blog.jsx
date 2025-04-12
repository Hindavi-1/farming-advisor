import React, { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaSearch,
  FaLeaf,
  FaTint,
  FaSeedling,
  FaSun,
  FaCloudRain,
  FaChevronRight,
} from "react-icons/fa";
import "../components/Blogs/blog.css";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [isVisible, setIsVisible] = useState({});

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Ways AI is Revolutionizing Modern Farming Practices",
      excerpt:
        "Explore how artificial intelligence is transforming agriculture with smarter resource management, crop monitoring, and yield optimization.",
      image: "blog1.jpg",
      date: "April 5, 2025",
      author: "Dr. Sarah Johnson",
      category: "AI Technology",
      readTime: "8 min read",
      featured: true,
    },
    {
      id: 2,
      title:
        "Sustainable Farming: Balancing Productivity and Environmental Impact",
      excerpt:
        "Learn how data-driven approaches are helping farmers increase yields while reducing their environmental footprint.",
      image: "blog2.jpg",
      date: "March 28, 2025",
      author: "Michael Chen",
      category: "Sustainability",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 3,
      title: "Understanding Soil Health: The Foundation of Successful Farming",
      excerpt:
        "Deep dive into what makes healthy soil and how modern technology can help you monitor and improve your soil quality.",
      image: "blog3.jpg",
      date: "March 15, 2025",
      author: "Elena Rodriguez",
      category: "Soil Management",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 4,
      title:
        "Precision Irrigation: Optimizing Water Usage in Drought Conditions",
      excerpt:
        "Discover how smart irrigation systems can help conserve water while maintaining optimal crop growth during dry seasons.",
      image: "blog4.jpg",
      date: "March 8, 2025",
      author: "James Wilson",
      category: "Water Management",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Seasonal Crop Planning: Maximizing Year-Round Farm Productivity",
      excerpt:
        "Strategic approaches to planning your crop rotation for maximum yield and soil health throughout the seasons.",
      image: "blog5.jpg",
      date: "February 27, 2025",
      author: "Dr. Sarah Johnson",
      category: "Crop Management",
      readTime: "9 min read",
      featured: true,
    },
    {
      id: 6,
      title: "The Future of Farming: Emerging Technologies to Watch",
      excerpt:
        "From drone monitoring to robotic harvesting, these are the innovations shaping the next decade of agriculture.",
      image: "blog6.jpg",
      date: "February 12, 2025",
      author: "Michael Chen",
      category: "AI Technology",
      readTime: "12 min read",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "AI Technology",
    "Sustainability",
    "Soil Management",
    "Water Management",
    "Crop Management",
  ];

  // Filter posts based on active category and search term
  useEffect(() => {
    let filtered = blogPosts;

    if (activeCategory !== "All") {
      filtered = filtered.filter((post) => post.category === activeCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [activeCategory, searchTerm]);

  // Initialize with all posts
  useEffect(() => {
    setFilteredPosts(blogPosts);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".blog-section, .featured-posts, .blog-grid")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => observer.disconnect();
  }, []);

  const renderCategoryIcon = (category) => {
    switch (category) {
      case "AI Technology":
        return <FaSeedling />;
      case "Sustainability":
        return <FaLeaf />;
      case "Soil Management":
        return <FaSun />;
      case "Water Management":
        return <FaTint />;
      case "Crop Management":
        return <FaCloudRain />;
      default:
        return <FaTag />;
    }
  };

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>
          Farm <span className="highlight-text">Insights</span>
        </h1>
        <p className="blog-subtitle">
          Expert knowledge and practical tips for modern farming
        </p>
      </div>

      <div
        id="featured-posts"
        className={`featured-posts ${
          isVisible["featured-posts"] ? "visible" : ""
        }`}
      >
        <h2>Featured Articles</h2>
        <div className="featured-grid">
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <div key={post.id} className="featured-card">
                <div className="featured-image">
                  <div className="featured-badge">Featured</div>
                </div>
                <div className="featured-content">
                  <div className="post-meta">
                    <span className="post-category">
                      {renderCategoryIcon(post.category)}
                      {post.category}
                    </span>
                    <span className="post-date">
                      <FaCalendarAlt />
                      {post.date}
                    </span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-footer">
                    <span className="post-author">
                      <FaUser />
                      {post.author}
                    </span>
                    <a href={`/blog/${post.id}`} className="read-more">
                      Read More <FaChevronRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="blog-filters">
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="search-filter">
          <div className="search-input">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div
        id="blog-grid"
        className={`blog-grid ${isVisible["blog-grid"] ? "visible" : ""}`}
      >
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-image"></div>
              <div className="blog-content">
                <div className="post-meta">
                  <span className="post-category">
                    {renderCategoryIcon(post.category)}
                    {post.category}
                  </span>
                  <span className="post-date">
                    <FaCalendarAlt />
                    {post.date}
                  </span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-footer">
                  <span className="post-author">
                    <FaUser />
                    {post.author}
                  </span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <a href={`/blog/${post.id}`} className="read-more-btn">
                  Read Full Article
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <div className="blog-newsletter">
        <h2>Stay Updated</h2>
        <p>
          Subscribe to our newsletter for the latest farming insights and AI
          advancements
        </p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
