import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CompanyContext } from '../App';
import './css/CompanyDetailsCenter.css';
const CompanyDetailsCenter = () => {
  const parms = useParams();
  const contextData = useContext(CompanyContext);

  const id = parms.enterprise_id;
  const { address, condition, name, photo, role, title } = contextData.find(
    (item) => String(item.enterprise_id) === String(id)
  );
  return (
    <div>
      <h1>기업 상세 정보 페이지</h1>
      <h1>enterprise_id : {parms.enterprise_id}</h1>
      <div>{address}</div>
      <div>{condition}</div>
      <div>{name}</div>
      <div>
        <img src={photo} width="100px" />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default CompanyDetailsCenter;
