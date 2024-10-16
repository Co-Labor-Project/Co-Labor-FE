import axios from 'axios';
export const onCheckRegiNum = (regiNum, setPage) => {
  console.log(regiNum, setPage);
  axios
    .get(`/api/enterprises/status?enterpriseId=${regiNum}`, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        setPage(2); // 사업자 번호 체크 후 2번째 페이지로 이동
      } else {
        alert('사업자 번호가 확인되지 않았습니다.');
      }
    })
    .catch((err) => {
      console.log(err);
      alert('사업자 번호 확인에 실패했습니다.');
    });
};
export const submitEnterprise = async (input, logoFile, nav) => {
  const formData = new FormData();

  // enterpriseQueue 정보 추가
  formData.append('enterpriseQueue', JSON.stringify(input));

  // 이미지 파일 추가
  formData.append('logo', logoFile);

  try {
    const response = await axios.post('/api/enterprises/queue', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    console.log('기업등록결과: ', response.data);
    if (response.status === 200) {
      alert('기업등록 성공!');
      nav('/');
    }
  } catch (error) {
    console.error('Error:', error.response);
    alert('기업등록 실패!');
  }
};
