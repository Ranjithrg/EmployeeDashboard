import React, { useState } from 'react';
import './App.css';
import Crud from './crud';
import HomeImage from './What-are-MNCs.png';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="app-container">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActivePage('home')}>Home</li>
          <li onClick={() => setActivePage('users')}>Users</li>
          <li onClick={() => setActivePage('about')}>About</li>
          <li onClick={() => setActivePage('contact')}>Contact</li>
          <li onClick={() => setActivePage('login')}>Login</li>
          <li onClick={() => setActivePage('feedback')}>Feedback</li>
        </ul>
      </nav>

      <div className="content">
        {activePage === 'home' && (
          <div className="home-page">
            <img src={HomeImage} alt="RG-Soft Solutions" className="home-img" />
            <h1>Welcome to RG-Soft Solutions</h1>
            <p>RG-Soft Solutions is a startup MNC focused on delivering quality software solutions to businesses worldwide.</p>
            <p>We specialize in front-end and back-end development, offering services tailored to client needs.</p>
            <p>Our goal is to innovate and bring digital transformation to various industries.</p>
            <p>We aim to build a strong tech community by fostering learning and collaboration.</p>
            <p>Join us on our journey to create impactful software solutions.</p>
            <div className="quotes">
              <blockquote>"Your most unhappy customers are your greatest source of learning." - Bill Gates</blockquote>
              <blockquote>"Wear your failure as a badge of honor." - Sundar Pichai</blockquote>
              <blockquote>"When something is important enough, you do it even if the odds are not in your favor." - Elon Musk</blockquote>
              <blockquote>"Without passion, you don’t have energy. Without energy, you have nothing." - Donald Trump</blockquote>
            </div>
          </div>
        )}
        {activePage === 'users' && <Crud />}
        {activePage === 'about' && (
  <div className="about-us">
    <h2>About RG-Soft Solutions</h2>
    <p>
      RG-Soft Solutions is a dynamic startup MNC specializing in providing high-quality software development
      services for businesses across the globe. Our team is passionate about driving digital transformation
      through innovative solutions, ranging from front-end to back-end technologies.
    </p>
    <p>
      We are dedicated to excellence and continuously strive to create impactful software that enhances
      businesses' operational efficiency. Join us as we embark on a journey of growth, learning, and innovation
      in the tech world.
    </p>
  </div>
)}

        {/* {activePage === 'about' && <div><h2>About Us</h2><p>Details about RG-Soft Solutions...</p></div>} */}
        {activePage === 'contact' && <div><h2>Contact</h2><p>Email: ranjithrg440@gmail.com</p><p>Phone: 7200110678</p></div>}
        {activePage === 'login' && <div><h2>Login</h2><input type="text" placeholder="Username" /><input type="password" placeholder="Password" /><button>Login</button></div>}
        {activePage === 'feedback' && <div><h2>Feedback</h2><textarea placeholder="Enter your feedback..."></textarea><button>Submit</button></div>}
      </div>
    </div>
  );
};

export default App;
