import React from "react";
import { useHistory } from "react-router-dom";
import './Welcome.css'; // Import CSS file for styling

const Welcome = () => {
  const history = useHistory();

  const handleGetStarted = () => {
    history.push("/register"); // Navigate to the Register component
  };

  return (
    <div className="welcome-container">
      <header className="welcome-header">
  <h1>Welcome to <span style={{ color: '#00d4ff' }}>CryptoApp</span></h1>
  <p>Your all-in-one platform for crypto enthusiasts.</p>
</header>

      <section className="features-section">
        <h2>Explore Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📈 Watchlist</h3>
            <p>Track your favorite cryptocurrencies in real time.</p>
          </div>
          <div className="feature-card">
            <h3>🔔 Subscription</h3>
            <p>Get personalized alerts and updates for market trends.</p>
          </div>
          <div className="feature-card">
            <h3>💰 Wallet</h3>
            <p>Manage your funds securely and conveniently.</p>
          </div>
          <div className="feature-card">
            <h3>📰 News</h3>
            <p>Stay updated with the latest crypto news and analysis.</p>
          </div>
          <div className="feature-card">
            <h3>📝 Posts</h3>
            <p>Share insights and engage with other crypto enthusiasts.</p>
          </div>
          <div className="feature-card">
            <h3>💬 Forum</h3>
            <p>Join discussions and connect with the crypto community.</p>
          </div>
        </div>
      </section>

      <footer className="welcome-footer">
        <p>Ready to dive in? Sign up today and explore the future of crypto!</p>
        <button className="get-started-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </footer>
    </div>
  );
};

export default Welcome;
