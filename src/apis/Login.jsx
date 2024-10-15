import axios from 'axios';

export const onLogin = (Loginusername, Loginpassword, setLoginState) => {
  axios
    .post(
      '/api/auth/login',
      {
        username: Loginusername,
        password: Loginpassword,
      },
      { withCredentials: true }
    )
    .then((response) => {
      const result = response.data;
      console.log('로그인 결과: ', result);

      if (result.message === 'Login successful') {
        sessionStorage.setItem('username', Loginusername);
        sessionStorage.setItem('userType', result.userType);
        alert('로그인 성공!');

        if (result.userType === 'enterprise') {
          setLoginState({ userEnterprise: true, userLogin: false });
        } else {
          setLoginState({ userLogin: true, userEnterprise: false });
        }
      } else {
        throw new Error('로그인 실패');
      }
    })
    .catch((error) => {
      console.error(
        '로그인 오류:',
        error.response ? error.response.data : error.message
      );
      alert('로그인 실패!');
    });
};

export const signUp = (json, url, nav) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: json,
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((result) => {
      // console.log("회원가입결과: ", result);
      if (!alert('회원가입 성공!')) nav('/');
    })
    .catch((error) => {
      // console.error("Error:", error);
      alert('회원가입 실패!');
    });
  return;
};
