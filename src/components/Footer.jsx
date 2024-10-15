import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <BaseContainer>
      <p>
        <br />
        <span>개인정보 처리방침 | 이용약관 </span>
        <br />
        <span>©2024.Pelican.All rights reserved</span>
      </p>
      <nav>
        <span>Reference: </span>
        <a href="https://github.com/Co-Labor-Project" target="_blank">
          Github
        </a>
        <br />
        <br />
      </nav>
    </BaseContainer>
  );
};

export default Footer;
const BaseContainer = styled.div`
  border-top: 0.8px solid rgb(236, 236, 236);
  margin-top: 30px;
  margin: 0 auto;
  text-align: center;
`;
