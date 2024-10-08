import styled from 'styled-components';
const Notfound = () => {
  return (
    <BackGround>
      <h1>잘못된 페이지 접근 입니다.</h1>
    </BackGround>
  );
};
export default Notfound;

const BackGround = styled.div`
  display: flex;
  height: 95vh;
  align-items: center;
  justify-content: center;
`;
