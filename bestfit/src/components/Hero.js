import "../App.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Book your Diet Expert</h1>
      <p>Connect with Certified Nutritionists for Personalized Meal Plans</p>

      <div className="search-box">
        <input type="text" placeholder="Search doctor or speciality" />
        <button>Search</button>
      </div>
    </section>
  );
}

export default Hero;
