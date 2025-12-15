import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS details
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_PUBLIC_KEY"; // EmailJS public key

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        (response) => {
          alert("Message sent successfully to verma.k86657@gmail.com!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayName = days[today.getDay()];
  const workingHours = "09:00 am – 05:00 pm";

  const styles = {
    container: { fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9f9f9", minHeight: "100vh" },
    banner: {
      width: "100%",
      height: "200px",
      backgroundImage: "url('https://images.unsplash.com/photo-1605902711622-cfb43c443f98?auto=format&fit=crop&w=1350&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      position: "relative",
    },
    overlay: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 },
    bannerText: { position: "relative", zIndex: 2, fontSize: "2rem", fontWeight: "bold" },
    heading: { textAlign: "center", margin: "2rem 0 1rem", color: "#333" },
    flexContainer: { display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", padding: "0 2rem 2rem" },
    card: { flex: "1", minWidth: "320px", backgroundColor: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" },
    infoHeading: { marginBottom: "0.5rem", color: "#4CAF50" },
    paragraph: { margin: "0.3rem 0", color: "#555", lineHeight: "1.5" },
    iframe: { width: "100%", height: "250px", border: "0", borderRadius: "8px", marginTop: "1rem" },
    form: { display: "flex", flexDirection: "column", gap: "1rem" },
    input: { padding: "0.75rem", fontSize: "1rem", borderRadius: "8px", border: "1px solid #ccc", outline: "none" },
    button: { padding: "0.75rem", fontSize: "1rem", borderRadius: "8px", border: "none", backgroundColor: "#4CAF50", color: "#fff", cursor: "pointer" },
  };

  return (
    <div style={styles.container}>
      {/* Banner */}
      <div style={styles.banner}>
        <div style={styles.overlay}></div>
        <div style={styles.bannerText}>Contact Us</div>
      </div>

      <h1 style={styles.heading}>Get in Touch with DietShree</h1>

      <div style={styles.flexContainer}>
        {/* Contact Info */}
        <div style={styles.card}>
          <h2 style={styles.infoHeading}>WhatsApp</h2>
          <p style={styles.paragraph}>Ramaprashtha Atrium, Sector 37D, Gurugram, Haryana, India, 122001</p>
          <p style={styles.paragraph}>📞 +91-8368105506</p>
          <p style={styles.paragraph}>📧 dietshreeofficial@gmail.com</p>

          <h3 style={styles.infoHeading}>We are open</h3>
          <p style={styles.paragraph}>Today ({dayName}): {workingHours}</p>

          <iframe
            title="DietShree Location"
            style={styles.iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.503017034433!2d77.0847249150064!3d28.474697982447116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e85f67f843%3A0xa0b3c04a8a056ad4!2sRamaprashtha%20Atrium%2C%20Sector%2037D%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div style={styles.card}>
          <h2 style={styles.infoHeading}>Send us a message</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={styles.input}/>
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={styles.input}/>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="5" style={styles.input}></textarea>
            <button type="submit" style={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
