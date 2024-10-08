import React from 'react';
import styled from 'styled-components';

const MainTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

export default MainTitle;

const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  width: 1100px;
  border-bottom: 3px solid #58c179;
  padding-bottom: 15px;
  padding-left: 20px;
`;
