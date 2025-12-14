import React from "react";

function AboutUs() {
  const sectionStyle = {
    backgroundColor: "#f9f9f9",
    padding: "60px 20px",
    textAlign: "center",
    borderRadius: "10px",
    maxWidth: "900px",
    margin: "40px auto",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
  };

  const headingStyle = {
    fontSize: "32px",
    fontWeight: "600",
    color: "#0a4c8b",
    marginBottom: "20px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    lineHeight: "1.7",
    color: "#333",
    maxWidth: "700px",
    margin: "0 auto",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>About BestFit Health</h2>
      <p style={paragraphStyle}>
        BestFit Health is committed to providing world-class healthcare services with
        compassionate care. Our team of expert doctors and specialists ensures you receive
        the best treatment tailored to your needs. We focus on quality, trust, and
        patient satisfaction.
      </p>
    </section>
  );
}

export default AboutUs;
