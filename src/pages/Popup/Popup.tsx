import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './Popup.css';
import { getBaekjoonProblemNumber } from '../../utils';

const Popup = () => {
  const [curUrl, setCurUrl] = useState('');

  const [title, setTitle] = useState('');

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const [tab] = tabs;

      if (!tab || !tab.url) {
        return;
      }

      setCurUrl(tab.url);
      setTitle(tab.title || '');
    });
  }, []);

  const problemNumber = getBaekjoonProblemNumber(curUrl);

  const handleBojIdeOpenButtonClick = async () => {
    const bojIdeAppDeepLink = `boj-ide://${problemNumber}`;

    window.open(bojIdeAppDeepLink);
  };

  return (
    <div className="App">
      <a href="https://boj-ide.gitbook.io/boj-ide-docs" target="_blank">
        <img src={logo} className="App-logo" alt="logo" />
      </a>

      <div className="App-content">
        {typeof problemNumber === 'number' && (
          <p className="App-content-description">
            아래 버튼을 눌러 BOJ IDE 에서
            <br />
            <span>{`${title}`}</span> 문제 열기
          </p>
        )}

        <button
          type="button"
          className="deep-link-button"
          onClick={handleBojIdeOpenButtonClick}
          disabled={typeof problemNumber !== 'number'}
        >
          {typeof problemNumber === 'number'
            ? `${problemNumber}번`
            : '백준 문제 페이지로 이동하세요.'}
        </button>
      </div>

      <div className="caution-text">
        <p>
          <a
            href="https://github.com/junghyunbak/boj-ide/releases"
            target="_blank"
          >
            BOJ IDE
          </a>{' '}
          가 설치되어 있지 않으면 아무런 동작도 발생하지 않습니다.
        </p>
        <p>BOJ IDE v1.5.8 이상에서만 사용 가능합니다.</p>
      </div>
    </div>
  );
};

export default Popup;
