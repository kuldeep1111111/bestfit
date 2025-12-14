import "../App.css";

const reviews = [
  {
    name: "Anita Sharma",
    feedback: "BestFit Health made it so easy to find the right doctor. Highly recommended!",
  },
  {
    name: "Raj Patel",
    feedback: "Amazing care and prompt appointments. The team is very professional.",
  },
  {
    name: "Sneha Joshi",
    feedback: "I got a second opinion that really helped me make an informed decision.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="reviews">
        {reviews.map((rev, i) => (
          <div className="review-card" key={i}>
            <p>"{rev.feedback}"</p>
            <h4>- {rev.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
