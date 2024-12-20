export const Classification = [
  { value: '기업 분류', name: '기업 분류' },
  { value: '서비스업', name: '서비스업' },
  { value: '금융/은행업', name: '금융/은행업' },
  { value: 'IT/정보통신업', name: 'IT/정보통신업' },
  { value: '판매/유통업', name: '판매/유통업' },
  { value: '제조/생산/화학업', name: '제조/생산/화학업' },
  { value: '교육업', name: '교육업' },
  { value: '건설업', name: '건설업' },
  { value: '의료/제약업', name: '의료/제약업' },
  { value: '미디어/광고업', name: '미디어/광고업' },
  { value: '문화/예술/디자인업', name: '문화/예술/디자인업' },
  { value: '기관/협회', name: '기관/협회' },
];
export const Task = [
  { value: '직무', name: '직무' },
  { value: '소프트웨어 엔지니어', name: '소프트웨어 엔지니어' },
  { value: '데이터 분석가', name: '데이터 분석가' },
  { value: '기계 엔지니어', name: '기계 엔지니어' },
  { value: '전기 엔지니어', name: '전기 엔지니어' },
  { value: '비디오 콘텐츠 마케터', name: '비디오 콘텐츠 마케터' },
  { value: '배달원', name: '배달원' },
  { value: '농장 근로자', name: '농장 근로자' },
  { value: '조선소 작업자', name: '조선소 작업자' },
  { value: '주방 보조', name: '주방 보조' },
  { value: '택배 분류원', name: '택배 분류원' },
  { value: '음식점 서비스 직원', name: '음식점 서비스 직원' },
];

export const CityOptions = [
  { value: '지역', label: '지역' },
  { value: '서울특별시', label: '서울특별시' },
  { value: '부산광역시', label: '부산광역시' },
  { value: '대구광역시', label: '대구광역시' },
  { value: '인천광역시', label: '인천광역시' },
  { value: '광주광역시', label: '광주광역시' },
  { value: '대전광역시', label: '대전광역시' },
  { value: '울산광역시', label: '울산광역시' },
  { value: '경기도', label: '경기도' },
  { value: '강원도', label: '강원도' },
  { value: '충청북도', label: '충청북도' },
  { value: '충청남도', label: '충청남도' },
  { value: '전라북도', label: '전라북도' },
  { value: '전라남도', label: '전라남도' },
  { value: '경상북도', label: '경상북도' },
  { value: '경상남도', label: '경상남도' },
  { value: '제주도', label: '제주도' },
];

export const CountyOptions = {
  지역: ['지역'],
  서울특별시: [
    '지역 (시/군)',
    '강남구',
    '강동구',
    '강북구',
    '강서구',
    '관악구',
    '광진구',
    '구로구',
    '금천구',
    '노원구',
    '도봉구',
    '동대문구',
    '동작구',
    '마포구',
    '서대문구',
    '서초구',
    '성동구',
    '성북구',
    '송파구',
    '양천구',
    '영등포구',
    '용산구',
    '은평구',
    '종로구',
    '중구',
    '중랑구',
  ],
  부산광역시: [
    '지역 (시/군)',
    '강서구',
    '금정구',
    '남구',
    '동구',
    '동래구',
    '부산진구',
    '북구',
    '사상구',
    '사하구',
    '서구',
    '수영구',
    '연제구',
    '영도구',
    '중구',
    '해운대구',
    '기장군',
  ],
  대구광역시: [
    '지역 (시/군)',
    '남구',
    '달서구',
    '동구',
    '북구',
    '서구',
    '수성구',
    '중구',
    '달성군',
  ],
  인천광역시: [
    '지역 (시/군)',
    '계양구',
    '남구',
    '남동구',
    '동구',
    '부평구',
    '서구',
    '연수구',
    '중구',
    '강화군',
    '옹진군',
  ],
  광주광역시: ['지역 (시/군)', '광산구', '남구', '동구', '북구', '서구'],
  대전광역시: ['지역 (시/군)', '대덕구', '동구', '서구', '유성구', '중구'],
  울산광역시: ['지역 (시/군)', '남구', '동구', '북구', '중구', '울주군'],
  경기도: [
    '지역 (시/군)',
    '고양시',
    '과천시',
    '광명시',
    '구리시',
    '군포시',
    '남양주시',
    '동두천시',
    '부천시',
    '성남시',
    '수원시',
    '시흥시',
    '안산시',
    '안양시',
    '오산시',
    '의왕시',
    '의정부시',
    '평택시',
    '하남시',
    '가평군',
    '광주시',
    '김포시',
    '안성시',
    '양주군',
    '양평군',
    '여주군',
    '연천군',
    '용인시',
    '이천군',
    '파주시',
    '포천시',
    '화성시',
  ],
  강원도: [
    '지역 (시/군)',
    '강릉시',
    '동해시',
    '삼척시',
    '속초시',
    '원주시',
    '춘천시',
    '태백시',
    '고성군',
    '양구군',
    '양양군',
    '영월군',
    '인제군',
    '정선군',
    '철원군',
    '평창군',
    '홍천군',
    '화천군',
    '황성군',
  ],
  충청북도: [
    '지역 (시/군)',
    '제천시',
    '청주시',
    '충주시',
    '괴산군',
    '단양군',
    '보은군',
    '영동군',
    '옥천군',
    '음성군',
    '진천군',
    '청원군',
  ],
  충청남도: [
    '지역 (시/군)',
    '공주시',
    '보령시',
    '서산시',
    '아산시',
    '천안시',
    '금산군',
    '논산군',
    '당진군',
    '부여군',
    '서천군',
    '연기군',
    '예산군',
    '청양군',
    '태안군',
    '홍성군',
  ],
  전라북도: [
    '지역 (시/군)',
    '군산시',
    '김제시',
    '남원시',
    '익산시',
    '전주시',
    '정읍시',
    '고창군',
    '무주군',
    '부안군',
    '순창군',
    '완주군',
    '임실군',
    '장수군',
    '진안군',
  ],
  전라남도: [
    '지역 (시/군)',
    '광양시',
    '나주시',
    '목포시',
    '순천시',
    '여수시',
    '여천시',
    '강진군',
    '고흥군',
    '곡성군',
    '구례군',
    '담양군',
    '무안군',
    '보성군',
    '신안군',
    '여천군',
    '영광군',
    '영암군',
    '완도군',
    '장성군',
    '장흥군',
    '진도군',
    '함평군',
    '해남군',
    '화순군',
  ],
  경상북도: [
    '지역 (시/군)',
    '경산시',
    '경주시',
    '구미시',
    '김천시',
    '문경시',
    '상주시',
    '안동시',
    '영주시',
    '영천시',
    '포항시',
    '고령군',
    '군위군',
    '봉화군',
    '성주군',
    '영덕군',
    '영양군',
    '예천군',
    '울릉군',
    '울진군',
    '의성군',
    '청도군',
    '청송군',
    '칠곡군',
  ],
  경상남도: [
    '지역 (시/군)',
    '거제시',
    '김해시',
    '마산시',
    '밀양시',
    '사천시',
    '울산시',
    '진주시',
    '진해시',
    '창원시',
    '통영시',
    '거창군',
    '고성군',
    '남해군',
    '산청군',
    '양산시',
    '의령군',
    '창녕군',
    '하동군',
    '함안군',
    '함양군',
    '합천군',
  ],
  제주도: ['지역 (시/군)', '서귀포시', '제주시', '남제주군', '북제주군'],
};
