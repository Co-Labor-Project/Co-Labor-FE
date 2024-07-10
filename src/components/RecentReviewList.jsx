import React from 'react';
import RecentReviewItem from './RecentReviewItem';
import './css/RecentReviewList.css';

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
  {
    id: 4,
    company: '기업이름4',
    comment: '얼씨구 절씨구',
    info: ' 2024 -123-435',
    rating: 3,
    link: ' 라우팅 정보',
  },
  {
    id: 5,
    company: '기업이름5',
    comment: '웅앵웅 잉옹웅',
    info: ' 2024 -123-435',
    rating: 3,
    link: ' 라우팅 정보',
  },
];

const RecentReview = () => {
  return (
    <div className="recentReview">
      <div className="title">📝 최근 리뷰</div>
      <div className="gap"></div>

      <div className="recentReviewList">
        {mockData.map((item) => (
          <RecentReviewItem key={item.id} {...item} />
        ))}
      </div>
      <div className="gap"></div>
    </div>
  );
};

export default RecentReview;
