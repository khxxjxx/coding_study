import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert초기값 = true;

// 이런 간단한 정보는 redux를 이용할게 아니라 useState를 이용하는게 좋다
function reducer2(state = alert초기값, 액션) {
  if (액션.type === '닫기') {
    return false;
  } else {
    return state;
  }
}

let quan초기값 = 1;
let quan변경값 = 1;

function reducer3(state = quan초기값, 액션) {
  if (액션.type === '변경') {
    quan변경값 = +액션.payload;
    return quan변경값;
  } else if (액션.type === '항목추가') {
    quan변경값 = 1;
    return quan초기값;
  } else {
    return state;
  }
}

let 초기값 = [];

function reducer(state = 초기값, 액션) {
  if (액션.type === '항목추가') {
    let found = state.findIndex(x => x.name === 액션.payload.name);
    if (found >= 0) {
      let copy = [...state];
      copy[found].quan += quan변경값;
      return copy;
    } else {
      let copy = [...state];
      copy.push(액션.payload);
      return copy;
    }
  } else if (액션.type === '수량증가') {
    let copy = [...state];
    copy[액션.i].quan < state[액션.i].재고 && copy[액션.i].quan++;
    return copy;
  } else if (액션.type === '수량감소') {
    let copy = [...state];
    copy[액션.i].quan > 0 && copy[액션.i].quan--;
    return copy;
  } else {
    return state;
  }
}

let store = createStore(combineReducers({ reducer, reducer2, reducer3 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
