/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

const 제목 = styled.div`
  font-size: 25px;
`;

function Detail(props) {
  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머);
    };
    // setTimeout을 사용하면 꼭 제거도 같이해줘야 버그가 덜생긴다
  }, []);

  let [alert, alert변경] = useState(true);
  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find(x => x.id == id);

  return (
    <div className="container">
      <제목>Detail</제목>
      {alert === true &&
      props.재고[찾은상품.id] < 3 &&
      props.재고[찾은상품.id] > 0 ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              찾은상품.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <Info 재고={props.재고} 찾은상품={찾은상품} />
          {props.재고[찾은상품.id] > 0 ? (
            <button
              className="btn btn-danger"
              onClick={() => {
                let new재고 = [...props.재고];
                props.재고변경(new재고.map((x, i) => (i == id ? x - 1 : x)));
              }}>
              주문하기
            </button>
          ) : null}

          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}>
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Info(props) {
  return <p>재고 : {props.재고[props.찾은상품.id]}</p>;
}
export default Detail;
