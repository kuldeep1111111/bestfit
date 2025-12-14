import React, { useEffect, useRef } from "react";
import "../App.css";

const reviews = [
  { name: "Anita Sharma", feedback: "BestFit Health made it so easy to find the right doctor. Highly recommended!" },
  { name: "Raj Patel", feedback: "Amazing care and prompt appointments. The team is very professional." },
  { name: "Sneha Joshi", feedback: "I got a second opinion that really helped me make an informed decision." },
  { name: "Vikram Singh", feedback: "Friendly staff and excellent service. My family loves BestFit Health!" },
  { name: "Priya Mehra", feedback: "Appointments are so easy to book, and the doctors are very caring." },
  { name: "Amit Kumar", feedback: "The follow-up support is top-notch. Highly recommended clinic." },
  { name: "Neha Reddy", feedback: "They really listened to my concerns and provided great guidance." },
  { name: "Rohit Verma", feedback: "Professional, caring, and efficient. Best health service ever!" },
  { name: "Sunita Das", feedback: "Loved the consultation experience. Very convenient and friendly." },
  { name: "Karan Gupta", feedback: "I trust BestFit Health for all my healthcare needs. Excellent team." },
];

function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const step = 1; // pixels per frame
    const speed = 20; // ms per frame

    const continuousScroll = () => {
      scrollAmount += step;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0; // reset to start seamlessly
      }
      container.scrollLeft = scrollAmount;
    };

    const interval = setInterval(continuousScroll, speed);

    return () => clearInterval(interval);
  }, []);

  // Duplicate the cards for seamless scroll
  const allReviews = [...reviews, ...reviews];

  return (
    <section className="testimonials">
      <h2>What Our Patients Say</h2>
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "20px",
          overflow: "hidden", // hides scrollbar
          paddingBottom: "10px",
        }}
      >
        {allReviews.map((rev, i) => (
          <div
            key={i}
            style={{
              flex: "0 0 250px",
              background: "#ffffff",
              padding: "20px",
              borderRadius: "15px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <p>"{rev.feedback}"</p>
            <h4>- {rev.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;