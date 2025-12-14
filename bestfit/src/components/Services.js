import React from "react";

function Services() {
  const services = [
    {
      title: "Find a Doctor",
      description: "Connect with certified doctors and diet experts tailored to your health needs.",
      icon: "👨‍⚕️",
    },
    {
      title: "Second Opinion",
      description: "Get expert advice and a second opinion from top healthcare specialists.",
      icon: "🔍",
    },
    {
      title: "Health Checkups",
      description: "Regular health checkups and dietary assessments for a balanced life.",
      icon: "🩺",
    },
    {
      title: "Nutrition Plans",
      description: "Personalized diet plans from certified nutritionists to meet your fitness goals.",
      icon: "🥗",
    },
    {
      title: "Wellness Programs",
      description: "Holistic wellness programs combining exercise, nutrition, and mental health.",
      icon: "💪",
    },
  ];

  const sectionStyle = {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "36px",
    color: "#0a4c8b",
    marginBottom: "40px",
  };

  const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
  };

  const cardStyle = {
    flex: "0 0 250px",
    background: "#ffffff",
    borderRadius: "15px",
    padding: "25px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  };

  const iconStyle = {
    fontSize: "40px",
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
      <h2 style={headingStyle}>Our Services</h2>
      <div style={cardsContainer}>
        {services.map((service, i) => (
          <div
            key={i}
            style={cardStyle}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <div style={iconStyle}>{service.icon}</div>
            <h3 style={titleStyle}>{service.title}</h3>
            <p style={descStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
