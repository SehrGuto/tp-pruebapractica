import React from 'react';
import './Languages.css';
import bannerLanguages from '../../assets/banner-languages.png';
import accents from '../../assets/us-accents.png';
import slangs from '../../assets/slangs.png';
import activity from '../../assets/activity.png';
import CultureBanner from '../Geography/CultureBanner';

const Languages = () => {
  // Esta función manejará el scroll hacia las secciones correspondientes
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <CultureBanner componentText={"In this category you will identify cultural information to meet the client's background."}/>
    <div className="languages-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <span className="breadcrumb-item">Home</span>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-item active">Language (12 points)</span>
      </div>
      
      <div className="content-wrapper">
        {/* Main Content */}
        <div className="main-content">
          {/* US Accents Section */}
          <section id="us-accents-section">
            <h1 className="section-title">US Accents</h1>
            
            <div className="banner-image">
              <img src={bannerLanguages}></img>
            </div>
            
            <p className="section-description">
              There are different accents all over the country, let's check some of them by clicking on the indicated places:
            </p>
            
            <div className="interactive-content">
              <div className="map-container">
                {/* Aquí irá el mapa interactivo de EEUU con marcadores */}
              </div>
              
              <div className="video-container">
                {/* Aquí irá el reproductor de video */}
              </div>
            </div>
          </section>
          
          {/* Foreign Accents Section */}
          <section id="foreign-accents-section">
            <h2 className="section-title">Foreign accents</h2>
            {/* Contenido de la sección Foreign accents */}
          </section>
          
          {/* Slangs Section */}
          <section id="slangs-section">
            <h2 className="section-title">Slangs</h2>
            {/* Contenido de la sección Slangs */}
          </section>
          
          {/* Military Alphabet Section */}
          <section id="military-alphabet-section">
            <h2 className="section-title">Military alphabet</h2>
            {/* Contenido de la sección Military alphabet */}
          </section>
          
          {/* Activity Section */}
          <section id="activity-section">
            <h2 className="section-title">Activity</h2>
            {/* Contenido de la sección Activity */}
          </section>
        </div>
        
        {/* Overview Sidebar */}
        <div className="overview-sidebar">
          <h2 className="overview-title">Overview</h2>
          
          <div className="sidebar-menu">
            <div className="menu-item active" onClick={() => scrollToSection('us-accents-section')}>
              <div className="menu-item-content">
                <div className="menu-item-image">
                  {/*miniatura de us accents*/}
                </div>
                <div className="menu-item-info">
                  <h3>US Accents</h3>
                  <p>2 points</p>
                </div>
              </div>
              <div className="menu-item-icon">
                <img src={accents}></img>
              </div>
            </div>
            
            <div className="menu-item" onClick={() => scrollToSection('foreign-accents-section')}>
              <div className="menu-item-content">
                <div className="menu-item-image">
                  {/* Aquí irá la imagen miniatura de Foreign accents */}
                </div>
                <div className="menu-item-info">
                  <h3>Foreign accents</h3>
                  <p>2 points</p>
                </div>
              </div>
              <div className="menu-item-icon">
                <img src={slangs}></img>
              </div>
            </div>
            
            <div className="menu-item" onClick={() => scrollToSection('slangs-section')}>
              <div className="menu-item-content">
                <div className="menu-item-image">
                  {/* Aquí irá la imagen miniatura de Slangs */}
                </div>
                <div className="menu-item-info">
                  <h3>Slangs</h3>
                  <p>2 points</p>
                </div>
              </div>
              <div className="menu-item-icon">
              <img src={slangs}></img>
              </div>
            </div>
            
            <div className="menu-item" onClick={() => scrollToSection('military-alphabet-section')}>
              <div className="menu-item-content">
                <div className="menu-item-image">
                  {/* Aquí irá la imagen miniatura de Military alphabet */}
                </div>
                <div className="menu-item-info">
                  <h3>Military alphabet</h3>
                  <p>2 points</p>
                </div>
              </div>
              <div className="menu-item-icon">
              <img src={slangs}></img>
              </div>
            </div>
            
            <div className="menu-item" onClick={() => scrollToSection('activity-section')}>
              <div className="menu-item-content">
                <div className="menu-item-image">
                  {/* Aquí irá la imagen miniatura de Activity */}
                </div>
                <div className="menu-item-info">
                  <h3>Activity</h3>
                  <p>4 points</p>
                </div>
              </div>
              <div className="menu-item-icon">
              <img src={activity}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Languages;