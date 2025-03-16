const footer = `
<!-- Footer Section -->
<footer class="footer">
  <div class="footer-container">
    <!-- Quick Links Section -->
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="product.html">Products</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>

    <!-- Contact Section -->
    <div class="footer-section">
      <h3>Contact Us</h3>
      <ul>
        <li><i class="fas fa-map-marker-alt"></i> 123 Main Street, City, Country</li>
        <li><i class="fas fa-phone"></i> +123 456 7890</li>
        <li><i class="fas fa-envelope"></i> info@example.com</li>
      </ul>
    </div>

    <!-- Payment Methods Section -->
    <div class="footer-section">
      <h3>We Accept</h3>
      <div class="payment-methods">
        <img src="/cards.jpeg" alt="Mastercard">
      </div>
    </div>

    <!-- Social Media Section -->
    <div class="footer-section">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  <!-- Copyright Section -->
  <div class="footer-bottom">
    <p>&copy; 2025 eCommerce. All rights reserved.</p>
  </div>
</footer>
` 

const footerElem= document.querySelector("#footer")

footerElem.insertAdjacentHTML("afterbegin",footer)