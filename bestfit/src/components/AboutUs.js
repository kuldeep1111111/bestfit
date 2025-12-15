import React from "react";

const About = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f9f9f9",
      color: "#333",
      lineHeight: 1.7,
      minHeight: "100vh",
    },
    banner: {
      width: "100%",
      height: "300px",
      backgroundImage: "url('https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1350&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 1,
    },
    bannerText: {
      position: "relative",
      zIndex: 2,
      fontSize: "3rem",
      fontWeight: "bold",
      padding: "0 1rem",
    },
    content: {
      maxWidth: "1100px",
      margin: "3rem auto",
      padding: "2rem",
      backgroundColor: "#fff",
      borderRadius: "12px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    },
    flexContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem",
      alignItems: "flex-start",
    },
    imageContainer: {
      flex: "1",
      minWidth: "300px",
      textAlign: "center",
    },
    profileImage: {
      width: "100%",
      maxWidth: "350px",
      borderRadius: "12px",
      boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
      transition: "transform 0.3s",
    },
    profileImageHover: {
      transform: "scale(1.05)",
    },
    textContainer: {
      flex: "2",
      minWidth: "300px",
    },
    sectionTitle: {
      fontSize: "2rem",
      color: "#4CAF50",
      marginBottom: "1rem",
      fontWeight: "700",
    },
    paragraph: {
      fontSize: "1.1rem",
      marginBottom: "1rem",
      color: "#555",
    },
    whatsappButton: {
      display: "inline-block",
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      backgroundColor: "#25D366",
      color: "#fff",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      textDecoration: "none",
      fontWeight: "bold",
      position: "relative",
      overflow: "hidden",
      transition: "all 0.3s ease",
    },
    whatsappPulse: {
      content: '""',
      position: "absolute",
      top: "-25%",
      left: "-25%",
      width: "150%",
      height: "150%",
      backgroundColor: "rgba(37, 211, 102, 0.3)",
      borderRadius: "50%",
      animation: "pulse 1.5s infinite",
      zIndex: 0,
    },
    buttonText: {
      position: "relative",
      zIndex: 1,
    },
    "@keyframes pulse": {
      "0%": { transform: "scale(0.8)", opacity: 0.7 },
      "50%": { transform: "scale(1.1)", opacity: 0.4 },
      "100%": { transform: "scale(0.8)", opacity: 0.7 },
    },
  };

  return (
    <div style={styles.container}>
      {/* Banner */}
      <div style={styles.banner}>
        <div style={styles.overlay}></div>
        <div style={styles.bannerText}>About Dt. Rajshree Kaprwan</div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <div style={styles.flexContainer}>
          {/* Profile Image */}
          <div style={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80"
              alt="Dt. Rajshree Kaprwan"
              style={styles.profileImage}
            />
          </div>

          {/* Text Content */}
          <div style={styles.textContainer}>
            <p style={styles.paragraph}>
              Dt. Rajshree Kaprwan is one of the fastest-growing dietitians in the Gurgaon–NCR region, known for her dedication and result-driven approach to health and nutrition. Over the past three years, she has worked tirelessly to help 1000+ clients overcome health challenges and adopt balanced, sustainable lifestyles.
            </p>

            <p style={styles.paragraph}>
              A certified expert in Holistic Science in Health, Nutrition, and Dietetics from VLCC, Dt. Rajshree brings a unique blend of modern nutrition science and traditional wellness knowledge. Her expertise spans body science, food science, anatomy, physiology, therapeutic diets, and specialized nutrition. She also integrates alternate healing practices such as Ayurveda, Acupressure, and Yoga into her approach—ensuring well-rounded guidance that nurtures both body and mind.
            </p>

            <h2 style={styles.sectionTitle}>Giving back to society</h2>
            <p style={styles.paragraph}>
              Beyond her clinical practice, Dt. Rajshree is deeply committed to social welfare. She has actively worked with Anganwadi centers, slums, and small schools, conducting free health check-ups and nutrition consultations for underprivileged communities. Her efforts have helped spread awareness about healthy eating habits and preventive care.
            </p>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918368105506"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.whatsappButton}
            >
              <span style={styles.buttonText}>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Add Keyframes for Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(0.8); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 0.4; }
            100% { transform: scale(0.8); opacity: 0.7; }
          }

          a:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(37, 211, 102, 0.6);
          }
        `}
      </style>
    </div>
  );
};

export default About;
