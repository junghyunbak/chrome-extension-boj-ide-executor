import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';

const Popup = () => {
  const [curUrl, setCurUrl] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const [tab] = tabs;

      if (!tab || !tab.url) {
        return;
      }

      setCurUrl(tab.url);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{curUrl}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
