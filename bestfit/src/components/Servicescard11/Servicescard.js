import React from "react";

const Services = () => {
  const cards = [
    {
      title: "Women’s Hormonal Health",
      focus: "PCOS, PCOD, Endometriosis, Perimenopause / Menopause, Menopause",
      description:
        "Hormonal health impacts every stage of life. Our expert plans help manage PCOS, Endometriosis, and Menopause symptoms, restoring balance, boosting energy, and supporting long-term wellness through tailored nutrition strategies.",
      image: "https://via.placeholder.com/280x150?text=Hormonal+Health"
    },
    {
      title: "Mother & Pregnancy Care",
      focus: "Mother Care, Pregnancy, Pregnancy Diet, Fertility",
      description:
        "Nourishing motherhood starts with the right nutrition. We provide comprehensive care for fertility, pregnancy, and postnatal recovery with personalized diet plans. Our approach ensures both mother and baby thrive.",
      image: "https://via.placeholder.com/280x150?text=Pregnancy+Care"
    },
    {
      title: "Weight Management",
      focus: "Weight Loss, Weight Gain, Health & Weight Management",
      description:
        "Achieve your ideal weight with sustainable solutions. Programs focus on nutrition and lifestyle changes for lasting results—without fad diets or extreme restrictions.",
      image: "https://via.placeholder.com/280x150?text=Weight+Management"
    },
    {
      title: "Metabolic & Chronic Conditions",
      focus: "Diabetes, Thyroid, Fatty Liver, Kidney Care",
      description:
        "Managing chronic conditions requires precision and care. We offer therapeutic diets for Diabetes, Thyroid disorders, Fatty Liver, and Kidney health for better metabolic function and overall well-being.",
      image: "https://via.placeholder.com/280x150?text=Chronic+Conditions"
    }
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "center",
    overflowX: "hidden" // horizontal scroll remove
  };

  const cardStyle = {
    flex: "1 1 100%", // mobile: full width
    maxWidth: "280px", // desktop: max 280px
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.5",
    backgroundColor: "#fff",
    boxSizing: "border-box",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    marginBottom: "20px"
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  };

  const headingStyle = {
    marginTop: 0,
    marginBottom: "8px",
    fontSize: "16px",
    color: "#333"
  };

  const sectionHeadingStyle = {
    textAlign: "center",
    fontSize: "24px",
    fontWeight: "600",
    margin: "20px 0",
    color: "#222"
  };

  const paragraphStyle = {
    margin: "0 0 12px 0"
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center", // Center the button
    marginTop: "30px"
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "#e74c3c", // red color
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s ease, transform 0.2s ease"
  };

  const handleButtonHover = e => {
    e.currentTarget.style.backgroundColor = "#c0392b"; // darker red on hover
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleButtonLeave = e => {
    e.currentTarget.style.backgroundColor = "#e74c3c";
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div>
      <h2 style={sectionHeadingStyle}>Our Services</h2>
      <div style={containerStyle}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={e => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <img
              src={card.image}
              alt={card.title}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
            />
            <h4 style={headingStyle}>{card.title}</h4>
            <p style={paragraphStyle}>
              <strong>Focus on:</strong> {card.focus}
            </p>
            <p style={{ margin: 0 }}>{card.description}</p>
          </div>
        ))}
      </div>

      {/* Centering the button */}
      <div style={buttonContainerStyle}>
        <a
          href="https://ominous-goggles-5gvr4vq5wq7gfvgp-3000.app.github.dev/#/services"
          style={buttonStyle}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          Click Here to Know More
        </a>
      </div>
    </div>
  );
};

export default Services;