import React, { useEffect, useState } from "react";
import "../styles/Contact.css";

const ContactPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div id="contact" className={`contact-page ${visible ? "fade-in" : ""}`}>
      <div className="glass-card">
        <h1 className="contact-title">Get in Touch</h1>
        <div className="contact-info">
          <p>
            <i className="fas fa-user"></i>
            <strong> UserName:</strong> ZAKARIYO
          </p>
          <p>
            <i className="fas fa-user"></i>
            <strong> SurName:</strong> XIKMATULLAYEV{" "}
          </p>
          <p>
            <i className="fas fa-phone"></i>
            <strong> Phone:</strong>{" "}
            <a href="tel:+998 99 157 84 84">+998 99 157 84 84</a>
          </p>
          <p>
            <i className="fas fa-phone"></i>
            <strong> Phone:</strong>{" "}
            <a href="tel:+998 99 980 70 10">+998 99 980 70 10</a>
          </p>
          <p>
            <i className="fab fa-instagram"></i>
            <strong> Instagram:</strong>{" "}
            <a href="https://instagram.com/zakariyo_xk" target="_blank">
              @zakariyo_xk
            </a>
          </p>
          <p>
            <i className="fab fa-telegram"></i>
            <strong> Telegram:</strong>{" "}
            <a href="https://t.me/zakariyo_xk" target="_blank">
              @zakariyo_xk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
