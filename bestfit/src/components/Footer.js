import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>BestFit Health</h4>
        <p>Lorem Ipsum is simply dummy text. </p>
        <p>1Lorem Ipsum has been the industry.</p>
        <p>Email: support@bestfit.com</p>
        <p>Phone: +91 14785223692</p>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <p><a href="#">Home</a></p>
        <p><a href="#">Doctors</a></p>
        <p><a href="#">Services</a></p>
        <p><a href="#">Specialities</a></p>
        <p><a href="#">Contact</a></p>
        <p><a href="#">Blog</a></p>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#" className="social">Facebook</a>
          <a href="#" className="social">Instagram</a>
          <a href="#" className="social">Twitter</a>
          <a href="#" className="social">LinkedIn</a>
        </div>
      </div>

      <div className="footer-section">
        <h4>Subscribe</h4>
        <p>Get updates and health tips</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 BestFit Health. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
