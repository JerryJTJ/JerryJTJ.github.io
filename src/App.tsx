import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import TitleBar from './components/TitleBar';
import Experience from './pages/Experience';
import './App.sass';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars, ScrollbarsAutoHideBehavior } from 'overlayscrollbars';

function App() {
  const options = {
    scrollbars: {
      autoHide: 'm' as ScrollbarsAutoHideBehavior,
      autoHideDelay: 500,
    },
    paddingAbsolute: true,
  };

  OverlayScrollbars(document.body, options);

  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <TitleBar activeTab={activeTab} onTabClick={handleTabClick} />
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
