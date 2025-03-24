import React from 'react';
import './Home.css';
import logo from '../../assets/masimo-logo.png'; // Asegúrate de tener este logo
import tpLogo from '../../assets/tp-logo.png'; // Logo de TP
import personImage from '../../assets/person-usa.png'; // Imagen de la persona con bandera USA

const Welcome = () => {
  return (
    <div className="welcome-page">
      <div className="header">
        <h1>Cultural Immersion Program Integration</h1>
        <div className="logos">
          <img src={logo} alt="Masimo Logo" className="masimo-logo" />
          <div className="divider"></div>
          <img src={tpLogo} alt="TP Logo" className="tp-logo" />
        </div>
      </div>

      <div className="welcome-banner">
        <h2>Welcome</h2>
      </div>

      <div className="content-box">
        <div className="welcome-content">
          <div className="text-content">
            <h3>Welcome to Masimo Stork's cultural immersion platform!</h3>
            
            <p>
              During your journey on this platform you will be able to acquire cultural knowledge of the regions of the USA, 
              which will help you to have better interactions with customers. You will also learn about Optimum and basic 
              concepts of its products, processes and customers.
            </p>
            
            <p>
              The platform has <strong>3 main categories</strong>, culture immersion, customer specifications, industry specifications, 
              which you will find in the side menu of all screens.
            </p>
            
            <p>
              Each one of <strong>these categories has a score</strong>, you must reach the final score <strong>of 100</strong>, when you finish visiting all 
              the categories in the menu. Additionally, if you manage to complete certain challenges, you can <strong>earn 
              performance medals</strong>.
            </p>
            
            <p><strong>Good luck! you can hit next to start</strong></p>
            
            <button className="start-button">Hola</button>
          </div>
          
          <div className="image-container">
            <img src={personImage} alt="Person with USA flag" className="person-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;