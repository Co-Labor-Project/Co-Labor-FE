import React, { useEffect } from 'react';
import './css/GoogleTranslate.css';
const GoogleTranslate = () => {
  useEffect(() => {
    // Google Translate script 추가
    const addGoogleTranslateScript = document.createElement('script');
    addGoogleTranslateScript.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(addGoogleTranslateScript);

    // Google Translate 초기화 함수 정의
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'ko', autoDisplay: true },
        'google_translate_element'
      );
    };

    return () => {
      // 스크립트 정리
      document.body.removeChild(addGoogleTranslateScript);
    };
  }, []);

  // 언어 전환을 위한 클릭 이벤트 핸들러
  const handleLanguageChange = (lang) => {
    const gtCombo = document.querySelector('.goog-te-combo');
    if (gtCombo) {
      gtCombo.value = lang;
      gtCombo.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div>
      {/* Google Translate Element (보이지 않음) */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      {/* 언어 선택 버튼 */}
      <ul className="translation-links">
        <li>
          <button onClick={() => handleLanguageChange('ko')}>
            <span className="flag ko"></span>한국어
          </button>
        </li>
        <li>
          <button onClick={() => handleLanguageChange('en')}>
            <span className="flag en"></span>English
          </button>
        </li>
        <li>
          <button onClick={() => handleLanguageChange('ja')}>
            <span className="flag ja"></span>日本語
          </button>
        </li>
        <li>
          <button onClick={() => handleLanguageChange('zh-CN')}>
            <span className="flag zh-CN"></span>中文(简体)
          </button>
        </li>
      </ul>
    </div>
  );
};

export default GoogleTranslate;
