import React from "react";
import "./about.css";
import Logo from "../../img/logo.png";
import PageTransition from "../../components/PageTransition";

function About() {
  return (
    <PageTransition>
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <img
          src={Logo}
          alt="About"
          style={{
            width: "100%",
            borderRadius: "16px",
            marginBottom: "32px",
            maxHeight: "340px",
            objectFit: "cover",
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
          }}
        />
        <p
          className="about-content"
          style={{ fontSize: "1.18rem", fontWeight: 500 }}
        >
          Welcome to{" "}
          <span style={{ color: "#0078d4", fontWeight: 700 }}>R-Ecommerce</span>
          ! We are dedicated to providing the best online shopping experience.
          Our platform offers a wide range of products, competitive prices, and
          excellent customer service.
        </p>
        <div className="about-features">
          <div className="about-feature">
            <div className="about-feature-icon" role="img" aria-label="Quality">
              &#11088;
            </div>
            <div className="about-feature-title">Top Quality</div>
            <div className="about-feature-desc">
              We offer only the best products from trusted brands.
            </div>
          </div>
          <div className="about-feature">
            <div
              className="about-feature-icon"
              role="img"
              aria-label="Shipping"
            >
              &#128230;
            </div>
            <div className="about-feature-title">Fast Shipping</div>
            <div className="about-feature-desc">
              Get your orders delivered quickly and reliably.
            </div>
          </div>
          <div className="about-feature">
            <div className="about-feature-icon" role="img" aria-label="Support">
              &#128222;
            </div>
            <div className="about-feature-title">24/7 Support</div>
            <div className="about-feature-desc">
              Our team is always here to help you with any questions.
            </div>
          </div>
        </div>
        <h2 className="about-subtitle">Our Mission</h2>
        <p className="about-content">
          To make online shopping easy, enjoyable, and accessible for everyone.
        </p>
        <h2 className="about-subtitle">Contact Us</h2>
        <ul
          className="about-content"
          style={{ listStyle: "none", paddingLeft: 0 }}
        >
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@r-ecommerce.com"
              style={{ color: "#0078d4" }}
            >
              support@r-ecommerce.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+15551234567" style={{ color: "#0078d4" }}>
              +1 (555) 123-4567
            </a>
          </li>
          <li>
            <strong>Address:</strong> 123 Commerce St, React City, JS 12345
          </li>
        </ul>
      </div>
    </PageTransition>
  );
}
export default About;
