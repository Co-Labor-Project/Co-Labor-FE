import React, { useEffect, useRef } from 'react';
import './css/SingInCenter.css';

const SingInCenter = () => {
  const containerRef = useRef(null);

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
              <form
                id="signup-form"
                className="form sign-up"
                method="post"
                action="/auth/signup"
              >
                {/* form 내부의 input 요소들 유지 */}
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bx-mail-send"></i>
                  <input type="email" name="email" placeholder="Email" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                  />
                </div>
                <div className="input-group">
                  <div className="enterpriseMem">
                    <span>기업회원이신가요?</span>
                    <input type="checkbox" />
                  </div>
                </div>
                <button type="submit">Sign up</button>
                <p>
                  <span>Already have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign in here
                  </b>
                </p>
              </form>
            </div>
          </div>
          {/* END SIGN UP */}
          {/* SIGN IN */}
          <div className="col align-items-center flex-col sign-in">
            <div className="form-wrapper align-items-center">
              <form
                id="signin-form"
                className="form sign-in"
                method="post"
                action="/auth/login"
              >
                {/* form 내부의 input 요소들 유지 */}
                <div className="input-group">
                  <i className="bx bxs-user"></i>
                  <input type="text" name="username" placeholder="Username" />
                </div>
                <div className="input-group">
                  <i className="bx bxs-lock-alt"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit">Sign in</button>
                <p>
                  <b>Forgot password?</b>
                </p>
                <p>
                  <span>Don&apos;t have an account?</span>
                  <b onClick={toggle} className="pointer">
                    Sign up here
                  </b>
                </p>
              </form>
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
