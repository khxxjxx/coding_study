/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['HTML', 'CSS', 'JavaScript']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  /*
  // 정렬 함수
  function 정렬() {
    let newArray = [...글제목];
    newArray.sort((a, b) => {
      return a > b ? -1 : 1;
    });
    글제목변경(newArray);
  }
  */

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map((글, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                누른제목변경(i);
              }}>
              {글}
              <span
                onClick={() => {
                  let new좋아요 = [...좋아요];
                  new좋아요[i] += 1;
                  좋아요변경(new좋아요);
                }}>
                &nbsp;❤️
              </span>
              {좋아요[i]}
            </h3>
            <p>5월 20일 발행</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={e => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let new글제목 = [...글제목];
            new글제목.push(입력값);
            글제목변경(new글제목);
          }}>
          저장
        </button>
      </div>

      <button
        onClick={() => {
          modal변경(modal === false ? true : false);
        }}>
        열고닫기
      </button>

      {modal === true ? <Modal _글제목={글제목} _누른제목={누른제목} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props._글제목[props._누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
