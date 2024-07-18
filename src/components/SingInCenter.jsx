import React, { useState, useEffect, useRef, useContext } from 'react';
import './css/SingInCenter.css';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../App';
const SingInCenter = () => {
  const { loginState, setLoginState } = useContext(LoginContext);
  const nav = useNavigate();
  let url = '';
  const containerRef = useRef(null);
  const [input, setInput] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    name: '',
    isEnterprise: false,
  });
  const [Loginusername, setUsername] = useState('');
  const [Loginpassword, setPassword] = useState('');
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'isEnterprise') {
      value = e.target.checked;
    }
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = () => {
    console.log(Loginusername, Loginpassword);
    fetch(
      `http://localhost:8080/auth/login?username=${Loginusername}&password=${Loginpassword}`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log('로그인결과: ', result);
        console.log('result.message:', result.message);
        if (result.message === 'Login successful') {
          setLoginState((prevState) => ({
            ...prevState,
            userLogin: true,
          }));
          alert('로그인 성공!');
          nav('/');
        } else {
          throw new Error('로그인 실패');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('로그인 실패!');
      });
  };

  const onsubmit = () => {
    if (input.password !== input.passwordConfirm) {
      alert('패스워드가 일치하지 않습니다.');
      return;
    }
    url = input.isEnterprise
      ? 'http://localhost:8080/auth/signup-enterprise'
      : 'http://localhost:8080/auth/signup-labor';
    console.log('패스워드 일치 후 요청 보내기');
    const json = JSON.stringify(input);
    signUp(json);
  };

  const signUp = (json) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('회원가입결과: ', result);
        if (!alert('회원가입 성공!')) nav('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('회원가입 실패!');
      });
  };

  const toggle = () => {
    if (containerRef.current) {
      containerRef.current.classList.toggle('sign-in');
      containerRef.current.classList.toggle('sign-up');
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      setTimeout(() => {
        containerRef.current.classList.add('sign-in');
      }, 200);
    }
  }, []);

  return (
    <div className="SingInCenter">
      <div id="container" className="container" ref={containerRef}>
        {/* FORM SECTION */}
        <div className="row">
          {/* SIGN UP */}
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div
                id="signup-form"
                className="form sign-up"
                // method="post"
                // action="/signup"
              >
                {/* form 내부의 input 요소들 유지 */}
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={input.username}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={input.email}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={input.password}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="Confirm password"
                    value={input.passwordConfirm}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={input.name}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="input-group">
                  <div className="enterpriseMem">
                    <span>기업회원이신가요?</span>
                    <input
                      type="checkbox"
                      name="isEnterprise"
                      checked={input.isEnterprise}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    console.log(input);
                    onsubmit();
                  }}
                >
                  Sign up
                </button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN UP */}
          {/* SIGN IN */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div
                id="signin-form"
                className="form sign-in"
                // method="post"
                // action="/auth/login"
              >
                {/* form 내부의 input 요소들 유지 */}
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={onChangeUsername}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={onChangePassword}
                  />
                </div>
                <button type="submit" onClick={onLogin}>
                  Sign in
                </button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don&apos;t have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </div>
            </div>
          </div>
          {/* END SIGN IN */}
        </div>
        {/* END FORM SECTION */}
        {/* CONTENT SECTION */}
        <div className="row content-row">
          {/* SIGN IN CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Co Labor</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          {/* END SIGN IN CONTENT */}
          {/* SIGN UP CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
          {/* END SIGN UP CONTENT */}
        </div>
        {/* END CONTENT SECTION */}
      </div>
    </div>
  );
};

export default SingInCenter;
