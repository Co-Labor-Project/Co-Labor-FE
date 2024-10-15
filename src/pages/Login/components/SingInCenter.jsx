import React, { useState, useEffect, useRef, useContext } from 'react';
import './SingInCenter.css';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../../App';
import axios from 'axios';
import { onLogin, signUp } from '../../../apis/login';

const SingInCenter = () => {
  const { loginState, setLoginState } = useContext(LoginContext);
  const nav = useNavigate();
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

  useEffect(() => {
    if (loginState.userLogin || loginState.userEnterprise) {
      nav('/');
    }
  }, [loginState, nav]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: name === 'isEnterprise' ? e.target.checked : value,
    }));
  };

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onsubmit = () => {
    if (input.password !== input.passwordConfirm) {
      alert('패스워드가 일치하지 않습니다.');
      return;
    }
    const url = input.isEnterprise
      ? '/api/auth/signup-enterprise'
      : '/api/auth/signup-labor';
    const json = JSON.stringify(input);
    signUp(json, url, nav);
  };

  const toggle = () => {
    if (containerRef.current) {
      containerRef.current.classList.toggle('sign-in');
      containerRef.current.classList.toggle('sign-up');
    }
  };
  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      onLogin(Loginusername, Loginpassword, setLoginState);
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
        <div className="row">
          <div className="col align-items-center flex-col sign-up">
            <div className="form-wrapper align-items-center">
              <div id="signup-form" className="form sign-up">
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
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <div id="signin-form" className="form sign-in">
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
                    onKeyDown={keyHandler}
                  />
                </div>
                <button
                  type="submit"
                  onClick={() =>
                    onLogin(Loginusername, Loginpassword, setLoginState)
                  }
                >
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
        </div>
        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Co Labor</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>Join with us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingInCenter;
