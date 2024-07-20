// import React, { useRef, useState, useEffect } from 'react';
// import './css/JobNoticeApplyCenter.css';

// const JobNoticeApplyCenter = () => {
//   const containerRef = useRef(null);

//   const [input, setInput] = useState({
//     enterpriseId: '',
//     name: '',
//     address1: '',
//     address2: '',
//     address3: '',
//     type: '',
//     phoneNumber: '',
//     description: '',
//   });

//   const onChangeInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     setInput({
//       ...input,
//       [name]: value,
//     });
//   };

//   const onSubmit = () => {
//     // Handle form submission logic here
//     console.log(input);
//   };

//   return (
//     <div className="JobNoticeApplyCenter">
//       <section className="section1">
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <input
//             type="text"
//             name="name"
//             placeholder="조건"
//             value={input.name}
//             onChange={onChangeInput}
//             className="sectionInput"
//           />
//         </div>
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <input
//             className="sectionInput"
//             type="text"
//             name="type"
//             placeholder="직무"
//             value={input.type}
//             onChange={onChangeInput}
//           />
//         </div>
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="경력"
//             value={input.phoneNumber}
//             onChange={onChangeInput}
//             className="sectionInput"
//           />
//         </div>
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="고용형태"
//             value={input.phoneNumber}
//             onChange={onChangeInput}
//             className="sectionInput"
//           />
//         </div>
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="마감 기한"
//             value={input.phoneNumber}
//             onChange={onChangeInput}
//             className="sectionInput"
//           />
//         </div>
//       </section>
//       <section className="section2">
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <input
//             type="text"
//             name="name"
//             placeholder="근무 지역"
//             value={input.name}
//             onChange={onChangeInput}
//             className="sectionInput"
//           />
//         </div>
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <input
//             type="text"
//             name="type"
//             placeholder="스킬"
//             value={input.type}
//             onChange={onChangeInput}
//             className="sectionInput"
//           />
//         </div>
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="제목"
//             value={input.phoneNumber}
//             onChange={onChangeInput}
//             className="sectionInput"
//           />
//         </div>
//         <div className="input-group">
//           <i className="bx bxs-lock-alt"></i>
//           <textarea
//             name="description"
//             placeholder="설명"
//             value={input.description}
//             onChange={onChangeInput}
//             className="sectionInput"
//           />
//         </div>
//       </section>
//       <section className="section3">
//         <button onClick={onSubmit}>등록하기</button>
//       </section>
//     </div>
//   );
// };

// export default JobNoticeApplyCenter;
import React, { useState } from 'react';
import './css/JobNoticeApplyCenter.css';

const JobNoticeApplyCenter = () => {
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

  const [showSection2, setShowSection2] = useState(false);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSubmit = () => {
    // Handle form submission logic here
    console.log(input);
  };

  const handleProceed = () => {
    setShowSection2(true);
  };

  return (
    <div className="JobNoticeApplyCenter">
      <div className="sections-wrapper">
        <section className={`section1 ${showSection2 ? 'hidden' : ''}`}>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <input
              type="text"
              name="name"
              placeholder="조건"
              value={input.name}
              onChange={onChangeInput}
              className="sectionInput"
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <input
              className="sectionInput"
              type="text"
              name="type"
              placeholder="직무"
              value={input.type}
              onChange={onChangeInput}
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <input
              type="text"
              name="phoneNumber"
              placeholder="경력"
              value={input.phoneNumber}
              onChange={onChangeInput}
              className="sectionInput"
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <input
              type="text"
              name="phoneNumber"
              placeholder="고용형태"
              value={input.phoneNumber}
              onChange={onChangeInput}
              className="sectionInput"
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <input
              type="text"
              name="phoneNumber"
              placeholder="마감 기한"
              value={input.phoneNumber}
              onChange={onChangeInput}
              className="sectionInput"
            />
          </div>
          <button onClick={handleProceed}>이어서 진행</button>
        </section>
        <section className={`section2 ${showSection2 ? '' : 'hidden'}`}>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <input
              type="text"
              name="name"
              placeholder="근무 지역"
              value={input.name}
              onChange={onChangeInput}
              className="sectionInput"
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <input
              type="text"
              name="type"
              placeholder="스킬"
              value={input.type}
              onChange={onChangeInput}
              className="sectionInput"
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <input
              type="text"
              name="phoneNumber"
              placeholder="제목"
              value={input.phoneNumber}
              onChange={onChangeInput}
              className="sectionInput"
            />
          </div>
          <div className="input-group">
            <i className="bx bxs-lock-alt"></i>
            <textarea
              name="description"
              placeholder="설명"
              value={input.description}
              onChange={onChangeInput}
              className="sectionInput"
            />
          </div>
          <button onClick={onSubmit}>등록하기</button>
        </section>
      </div>
    </div>
  );
};

export default JobNoticeApplyCenter;
