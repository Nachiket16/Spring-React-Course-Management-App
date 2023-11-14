import React from 'react';
import "./Contatct.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <div className="contact-details">
        <p>
          <strong>Phone:</strong> +91 9158786236
        </p>
        <p>
          <strong>Email:</strong> nachiketkhule.nk@gmail.com
        </p>
        <p>
          <strong>Location:</strong> Pune
        </p>
        <p>
          <strong>Designation:</strong> Software Developer
        </p>
        <div className="social-links">
          <a href="https://github.com/Nachiket16" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nachiket-khule-545959141/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
