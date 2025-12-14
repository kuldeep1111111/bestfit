import React from "react";

function Specialities() {
  const specialities = [
    {
      title: "Weight Management",
      description: "Personalized diet plans and expert guidance to achieve healthy weight.",
      icon: "🥗",
    },
    {
      title: "Diabetes Nutrition",
      description: "Specialized meal plans to manage blood sugar and promote overall wellness.",
      icon: "🍎",
    },
     {
      title: "Sports Nutrition",
      description: "Tailored meal plans to support athletic performance and recovery.",
      icon: "🏋️‍♂️",
    },
    {
      title: "Digestive Health",
      description: "Dietary guidance for optimal gut health and better digestion.",
      icon: "🥬",
    },
  ];

  const sectionStyle = {
    padding: "80px 20px",
    margin: "0 auto",
    textAlign: "center",
    background: "#f5f9fc",
    borderRadius: "15px",
  };

  const headingStyle = {
    fontSize: "36px",
    color: "#0a4c8b",
    marginBottom: "50px",
  };

  const listStyle = {
    display: "flex",
    flexWrap: "wrap", 
    justifyContent: "center",
    gap: "25px",
  };

  const cardStyle = {
    flex: "1 1 220px", 
    maxWidth: "250px",
    background: "#ffffff",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "45px",
    marginBottom: "15px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#0a4c8b",
    marginBottom: "10px",
  };

  const descStyle = {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.6",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Our Specialities</h2>
      <div style={listStyle}>
        {specialities.map((spec, i) => (
          <div
            key={i}
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <div style={iconStyle}>{spec.icon}</div>
            <h3 style={titleStyle}>{spec.title}</h3>
            <p style={descStyle}>{spec.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specialities;
