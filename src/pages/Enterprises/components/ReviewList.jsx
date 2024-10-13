import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewContext } from '../../../App';

import styled from 'styled-components';
import ReviewItem from './ReviewItem';

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
          <ReviewItem key={review.review_id} review={review} />
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
  width: 1400px;
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
