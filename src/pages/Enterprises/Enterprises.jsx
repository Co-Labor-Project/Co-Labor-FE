import { useState, useContext, useEffect } from 'react';
import EnterprisesList from './components/EnterprisesList';
import { BackGroundField } from '../../component/CommonStyled';
import MainTitleFilter from '../../component/MainTitleFilter';
import { CountyOptions } from '../../component/FilterOption';
import { CompanyContext } from '../../App';

function Company() {
  const EnterprisesData = useContext(CompanyContext);
  console.log(EnterprisesData);
  const [filteredData, setFilteredData] = useState(EnterprisesData);
  const [selected, setSelected] = useState({
    city: '지역',
    county: '지역 (시/군)', // county 필드를 추가
    counties: CountyOptions['지역'],
    type: '기업 분류',
    task: '',
  });

  useEffect(() => {
    filterData(selected);
  }, [selected]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSelected((prevState) => {
      let newSelected = {
        ...prevState,
        [name]: value,
      };

      // city가 변경되면 해당 city에 맞는 counties 업데이트
      if (name === 'city') {
        newSelected = {
          ...newSelected,
          counties: CountyOptions[value] || ['지역 (시/군)'], // 해당 city에 맞는 counties 불러오기
          county: '지역 (시/군)', // 새로운 city 선택 시 county 초기화
        };
      }

      return newSelected;
    });
  };

  const filterData = (newSelected) => {
    const { city, county, type, task } = newSelected;

    const filtered = EnterprisesData.filter((item) => {
      return (
        (city === '지역' || item.address1 === city) &&
        (county === '지역 (시/군)' || item.address2 === county) && // county 필터 조건 추가
        (type === '기업 분류' || item.type === type) &&
        (task === '' || item.task === task)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <BackGroundField>
      <MainTitleFilter
        text="🏢 기업 정보"
        selected={selected}
        setSelected={setSelected}
        handleChange={handleChange}
        ifJob={false}
      />
      <EnterprisesList EnterpriseData={filteredData} />
    </BackGroundField>
  );
}

export default Company;
