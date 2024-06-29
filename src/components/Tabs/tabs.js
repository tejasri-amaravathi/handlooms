import React, { useState } from 'react';
import Home from '../Home/home.js';
import Contact from '../Contact/contact.js';
import Gallery from '../Gallery/gallery.js';
import About from '../About/about.js';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderTab = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'contact':
        return <Contact />;
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('home')}>Home</button>
        <button onClick={() => setActiveTab('contact')}>Contact</button>
        <button onClick={() => setActiveTab('gallery')}>Gallery</button>
        <button onClick={() => setActiveTab('about')}>About</button>
      </div>
      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
};

export default Tabs;
