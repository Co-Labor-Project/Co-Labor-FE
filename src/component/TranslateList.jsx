import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { languages } from './TranslateCountry';

const GoogleTranslate = () => {
  const [chooseCountry, setChooseCountry] = useState({
    code: 'ko',
    name: '한국어',
    flag: 'kr',
  });
  const [isHovered, setIsHovered] = useState(false); // hover 상태 관리

  useEffect(() => {
    const addGoogleTranslateScript = document.createElement('script');
    addGoogleTranslateScript.src =
      'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(addGoogleTranslateScript);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'ko', autoDisplay: true },
        'google_translate_element'
      );
    };

    return () => {
      document.body.removeChild(addGoogleTranslateScript);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    const value = lang.code;
    const gtCombo = document.querySelector('.goog-te-combo');
    if (gtCombo) {
      gtCombo.value = value;
      gtCombo.dispatchEvent(new Event('change'));
    }
    setChooseCountry(lang);
  };
  return (
    <>
      <div id="google_translate_element" style={{ display: 'none' }}></div>

      <ButtonCotainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Flag code={chooseCountry.flag} />
        {chooseCountry.name}

        {/* 번역버튼 hover 시 리스트 표시 */}
        {isHovered && (
          <LanguageList
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {languages.map((lang) => (
              <LanguageItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang)}
              >
                <Flag code={lang.flag} />
                {lang.name}
              </LanguageItem>
            ))}
          </LanguageList>
        )}
      </ButtonCotainer>
    </>
  );
};

export default GoogleTranslate;

const ButtonCotainer = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 5px;
  width: 95px;
  height: 45px;
  cursor: pointer;
  background-color: #ffffff;
  outline: none;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  font-size: 14px;
  position: relative;
`;

const LanguageList = styled.ul`
  position: absolute;
  top: -80vh;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 10px;
  margin: 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100px;
  z-index: 10;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 8px;
`;

const LanguageItem = styled.li`
  cursor: pointer;
  padding: 10px 0px;
  &:hover {
    background-color: #f0f0f0;
  }
  font-size: 14px;
  border-bottom: 1px solid #b7b7b7;
`;

const Flag = styled.div`
  width: 30px;
  height: 25px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) =>
    `https://cdn.weglot.com/flags/square/${props.code}.svg`});
`;
