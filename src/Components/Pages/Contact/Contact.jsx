import { useState, useEffect } from "react";
import "./Contact.css";
import Footer from "../Footer/footer";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      formData.name.length > 2 &&
      formData.email.includes("@") &&
      formData.phone_no.length === 10 &&
      formData.message.length > 5
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted ✅");
    console.log(formData);
  };

  return (
    <div className="app-layout">
      <div className="page-content">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            Have a question or want to work together? Fill out the form below 👇
          </p>

          <div className="contact-wrapper">
            <section className="contact-page">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                onChange={handleChange}
                value={formData.name}
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                onChange={handleChange}
                value={formData.email}
              />

              <input
                type="tel"
                name="phone_no"
                placeholder="Phone number"
                onChange={handleChange}
                value={formData.phone_no}
                maxLength="10"
              />

              <textarea
                name="message"
                placeholder="Your message..."
                rows="4"
                onChange={handleChange}
                value={formData.message}
              />

              <button onClick={handleSubmit} disabled={!isValid}>
                Send Message
              </button>

              <div className="contact-socials">
                <a
                  href="https://github.com/CodeWithPurnendra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <AiOutlineGithub />
                </a>

                <a
                  href="https://instagram.com/purnendranishad18"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <AiOutlineInstagram />
                </a>
              </div>
            </section>

            <aside className="contact-info">
              <div className="info-card">
                <AiOutlineMail />
                <p>purnendranishad5@gmail.com</p>
              </div>

              <div className="info-card">
                <AiOutlinePhone />
                <p>+91 93014 11033</p>
              </div>

              <div className="info-card">
                <AiOutlineEnvironment />
                <p>India</p>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
