import React, { useState } from 'react';
import Home from '../Home/home.js';
import Services from '../Services/services.js';
import Contact from '../Contact/contact.js';
import Gallery from '../Gallery/gallery.js';
import FAQ from '../FAQ/faq.js';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'services':
        return <Services />;
      case 'faq':
        return <FAQ />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('services')}>Services</button>
        <button onClick={() => setActiveTab('contact')}>Contact</button>
        <button onClick={() => setActiveTab('gallery')}>Gallery</button>
        <button onClick={() => setActiveTab('faq')}>FAQ's</button>
      </div>
      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default Tabs;
