import React from 'react';
import useScrollFadeIn from '../hooks/fade_in';
import './css/CompanyItem.css';
const CompanyItem = ({ id, photo, name, address }) => {
  const fadeInProps = useScrollFadeIn('up', 1);
  if (!photo) {
    photo = 'https://cdn-icons-png.flaticon.com/512/4091/4091968.png';
  }
  return (
    <div className="companyItem">
      <div {...fadeInProps}>
        <div className="companyImg">
          <img src={photo} width="100px" height="55px" />
        </div>
        <div className="companyInfo">
          <div className="company_infoName">{name}</div>
          <div className="company_info">기업 분류 | {address}</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
