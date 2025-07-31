import React from 'react';
import './HomePage.css';
import img1 from '../../assets/DemonSlayer.webp';
import img2 from '../../assets/Tanjiro.jpg';

function HomePage() {
  return (
    <div className="homepage">
      <div className="card-container">
        <img className="bg-image" src={img1} alt="Background" />

        <div className="card-content">
          <div className="image-section">
            <img src={img2} alt="Tanjiro" />
          </div>

          <div className="text-section">
            <h1>Demon Slayer</h1>
            <p>
              Demon Slayer: Kimetsu no Yaiba is a Japanese anime that follows Tanjiro Kamado, a kind-hearted boy who becomes a demon slayer after his family is slaughtered by demons and his sister Nezuko is turned into one. Determined to avenge his family and find a cure for Nezuko, Tanjiro joins the Demon Slayer Corps and faces powerful demons in a beautifully animated, action-packed journey of courage, loyalty, and hope.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

