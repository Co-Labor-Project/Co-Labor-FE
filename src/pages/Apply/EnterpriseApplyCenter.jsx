import './SingInCenter.css';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../App';
import axios from 'axios';

const EnterpriseApplyCenter = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const loginContext = useContext(LoginContext);

  // 현재 로그인된 사용자 가져오기
  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      nav('/SingIn');
      alert('이 기능을 사용하려면 로그인이 필요합니다.');
    }
  }, [nav]);

  const containerRef = useRef(null);
  const [regiNum, setRegiNum] = useState('');

  const onChange = (e) => {
    setRegiNum(e.target.value);
    setInput((prevInput) => ({
      ...prevInput,
      enterpriseId: e.target.value,
    }));
  };

  const [input, setInput] = useState({
    enterpriseId: '',
    name: '',
    address1: '',
    address2: '',
    address3: '',
    type: '',
    phoneNumber: '',
    description: '',
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = (json) => {
    console.log('현재 입력창 상태', input);
    fetch(`/api/enterprises/queue`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('기업등록결과: ', result);
        if (!alert('기업등록 성공!')) nav('/');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('회원가입 실패!');
      });
  };

  const onCheckRegiNum = (regiNum) => {
    axios
      .get(`/api/enterprises/status?enterpriseId=${regiNum}`, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        toggle();
      })
      .catch((err) => {
        console.log(err);
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
              <div id="signup-form" className="form sign-up">
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
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="text"
                    name="type"
                    placeholder="type"
                    value={input.type}
                    onChange={onChangeInput}
                  />
                </div>

                <div
                  className="input-group"
                  style={{ display: 'flex', gap: '10px' }}
                >
                  <i
                    className="bx bxs-lock-alt"
                    style={{ display: 'flex' }}
                  ></i>
                  <input
                    style={{ flex: 1 }}
                    type="text"
                    name="address1"
                    placeholder="address1"
                    value={input.address1}
                    onChange={onChangeInput}
                  />
                  <input
                    style={{ flex: 1 }}
                    type="text"
                    name="address2"
                    placeholder="address2"
                    value={input.address2}
                    onChange={onChangeInput}
                  />
                  <input
                    style={{ flex: 1 }}
                    type="text"
                    name="address3"
                    placeholder="address3"
                    value={input.address3}
                    onChange={onChangeInput}
                  />
                </div>

                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    value={input.phoneNumber}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="text"
                    name="description"
                    placeholder="description"
                    value={input.description}
                    onChange={onChangeInput}
                  />
                </div>
                <button onClick={onSubmit}>기업 등록하기</button>
                {/* <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p> */}
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
                    placeholder="사업자 번호를 입력해주세요!"
                    onChange={onChange}
                  />
                </div>
                <button type="submit" onClick={() => onCheckRegiNum(regiNum)}>
                  사업자 번호 인증받기
                </button>
                {/* <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don&apos;t have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p> */}
              </div>
            </div>
          </div>
          {/* END SIGN IN */}
        </div>
        {/* END FORM SECTION */}
        {/* CONTENT SECTION */}
        <div className="row content-row">
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>기업 등록하기</h2>
              <p>기업 인증</p>
            </div>
            <div className="img sign-in"></div>
          </div>
          {/* END SIGN IN CONTENT */}
          {/* SIGN UP CONTENT */}
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up">
              <h2>기업 등록하기</h2>
              <p>정보 입력</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseApplyCenter;
