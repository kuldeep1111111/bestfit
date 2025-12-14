import React from "react";

function Blog() {
  const cards = [
    {
      image: "https://via.placeholder.com/150",
      title: "Diet Expert",
      content: "Get personalized meal plans from certified dieticians to meet your health goals.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Fitness Guidance",
      content: "Our experts help you create an effective workout plan tailored to your lifestyle.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Nutrition Advice",
      content: "Learn about balanced nutrition and foods that boost energy and immunity.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Healthy Recipes",
      content: "Explore easy and tasty recipes designed to keep you fit and energized.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Healthy Recipes",
      content: "Explore easy and tasty recipes designed to keep you fit and energized.",
    },
  ];

  const sectionStyle = {
    padding: "60px 20px",
    textAlign: "center",
    background: "#f8f9fa",
  };

  const headingStyle = {
    fontSize: "36px",
    color: "#0a4c8b",
    marginBottom: "40px",
  };

  const cardsContainer = {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    scrollBehavior: "smooth",
    paddingBottom: "10px",
    WebkitOverflowScrolling: "touch",
  };

  const cardStyle = {
    flex: "0 0 250px",
    background: "#ffffff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    borderRadius: "10px",
    objectFit: "cover",
    marginBottom: "15px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#0a4c8b",
    marginBottom: "10px",
  };

  const contentStyle = {
    fontSize: "14px",
    color: "#555",
    marginBottom: "15px",
    lineHeight: "1.5",
  };

  const buttonStyle = {
    padding: "10px 20px",
    borderRadius: "25px",
    border: "none",
    background: "#e74c3c", // red button
    color: "white",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>About BestFit Health</h2>
      <div style={cardsContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
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
            <img src={card.image} alt={card.title} style={imageStyle} />
            <h3 style={titleStyle}>{card.title}</h3>
            <p style={contentStyle}>{card.content}</p>
            <button style={buttonStyle}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
