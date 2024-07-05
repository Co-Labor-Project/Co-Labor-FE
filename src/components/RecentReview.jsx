import React from 'react';
import RecentReviewItem from './RecentReviewItem';

const mockData = [
  {
    id: 1,
    company: '기업이름',
    comment: '어쩌구 저쩌구 여기 개구짐',
    info: ' 2024 -123-435',
    rating: 3,
    link: ' 라우팅 정보',
  },
  {
    id: 2,
    company: '기업이름2',
    comment: '어쩌구 저쩌구 여기 좋을지도',
    info: ' 2024 -123-435',
    rating: 3,
    link: ' 라우팅 정보',
  },
  {
    id: 3,
    company: '기업이름3',
    comment: '우짤래니 저짤래니',
    info: ' 2024 -123-435',
    rating: 3,
    link: ' 라우팅 정보',
  },
];
const RecentReview = () => {
  return (
    <div>
      {mockData.map((item) => (
        <RecentReviewItem key={item.id} {...item} />
      ))}
      <RecentReviewItem />
    </div>
  );
};

export default RecentReview;
