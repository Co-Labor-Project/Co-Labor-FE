import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewContext } from '../../../App';
import StarRate from '../../../components/StarRate';
import BarGraph from '../../../components/BarGraph';
import styled from 'styled-components';

const ReviewList = () => {
  const params = useParams();

  const reviewContext = useContext(ReviewContext);
  const reviewData = reviewContext.filter(
    (review) =>
      String(review.enterprise.enterprise_id) === String(params.enterprise_id)
  );

  return (
    <BaseContiner>
      {reviewData.length > 0 ? (
        reviewData.map((review) => (
          <div key={review.review_id}>
            <ReviewContainer>
              <Title>{review.title}</Title>
              <Info>
                <div>
                  {review.created_at} 작성자 : {review.laborUser.name}
                </div>
                <StarRate rating={review.rating} />
                <div>승진 기회 및 개인 성장 가능성</div>
                <BarGraph rating={review.promotion_rating} />
                <div>복지 및 급여</div>
                <BarGraph rating={review.salary_rating} />
                <div>업무와 삶의 균형</div>
                <BarGraph rating={review.balance_rating} />
                <div>사내 문화 평가 점수</div>
                <BarGraph rating={review.culture_rating} />
                <div>경영진 관련 평가 점수</div>
                <BarGraph rating={review.management_rating} />
                <div>장점</div>
                <div>{review.pros}</div>
                <div>단점</div>
                <div>{review.cons}</div>
              </Info>
            </ReviewContainer>
          </div>
        ))
      ) : (
        <Title>등록된 리뷰가 없습니다.</Title>
      )}
    </BaseContiner>
  );
};

export default ReviewList;

const BaseContiner = styled.div`
  padding: 20px 0px;
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;
const ReviewContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  margin-left: 60px;

  width: 500px;
  transition: all 0.3s smooth;
  border: 0px solid #58c179;
  &:hover {
    border: 3px solid #58c179;
  }
`;

const Info = styled.div`
  margin-top: 10px;
  font-size: 1em;
  color: #333;
  line-height: 35px;
`;
