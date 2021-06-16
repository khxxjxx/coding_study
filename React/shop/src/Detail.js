/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

const 제목 = styled.div`
  font-size: 25px;
`;

function Detail(props) {
  let [alert, alert변경] = useState(true);
  let { id } = useParams();
  let history = useHistory();
  let 찾은상품 = props.shoes.find(x => x.id == id);
  let [누른탭, 누른탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);
  let [cart, cart변경] = useState([]);

  useEffect(() => {
    let 타이머 = setTimeout(() => {
      alert변경(false);
    }, 2000);
    return () => {
      clearTimeout(타이머);
    };
    // setTimeout을 사용하면 꼭 제거도 같이해줘야 버그가 덜생긴다
  }, []);

  useEffect(() => {
    let cart = localStorage.getItem('최근본상품');
    cart == null ? (cart = []) : (cart = JSON.parse(cart));
    cart.push(id);
    cart = [...new Set(cart)];
    localStorage.setItem('최근본상품', JSON.stringify(cart));
    cart변경(cart);
  }, []);

  return (
    <div className="container">
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
            <Info
              재고={props.재고}
              찾은상품={찾은상품}
              dispatch={props.dispatch}
              quan={props.quan}
            />
            {props.재고[찾은상품.id] > 0 ? (
              <button
                className="btn btn-danger"
                onClick={() => {
                  let new재고 = [...props.재고];
                  props.재고변경(
                    new재고.map((x, i) => (i == id ? x - props.quan : x))
                  );
                  props.dispatch({
                    type: '항목추가',
                    payload: {
                      id: props.state.length,
                      name: 찾은상품.title,
                      quan: props.quan,
                      재고: props.재고[찾은상품.id],
                    },
                  });
                  history.push('/cart');
                }}>
                주문하기
              </button>
            ) : null}

            <button className="btn btn-danger" onClick={() => history.goBack()}>
              뒤로가기
            </button>
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              eventKey="link-0"
              onClick={() => {
                스위치변경(false);
                누른탭변경(0);
              }}>
              Active
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="link-1"
              onClick={() => {
                스위치변경(false);
                누른탭변경(1);
              }}>
              Option 2
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <CSSTransition in={스위치} classNames="wow" timeout={500}>
          <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
        </CSSTransition>
      </div>
      <div className="container">
        <div className="최근본상품 mt-4">
          <h5>최근본상품</h5>
          <div className="row">
            {cart.map(id => {
              return <최근본page id={id} shoes={props.shoes} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
function 최근본page(props) {
  return (
    <div className="col">
      <img
        src={`https://codingapple1.github.io/shop/shoes${+props.id + 1}.jpg`}
        width="50%"
      />
      <p>{props.shoes[props.id].title}</p>
    </div>
  );
}
function TabContent(props) {
  useEffect(() => {
    props.스위치변경(true);
  });
  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다</div>;
  }
}

function Info(props) {
  return (
    <p>
      재고 :
      <input
        value={props.quan}
        onChange={e => {
          if (e.target.value <= props.재고[props.찾은상품.id]) {
            props.dispatch({ type: '변경', payload: e.target.value });
          } else {
            alert(`${props.재고[props.찾은상품.id]} 이하로만 입력가능합니다`);
          }
        }}
      />
      / {props.재고[props.찾은상품.id]}
    </p>
  );
}

function 함수명(state) {
  return {
    state: state.reducer,
    quan: state.reducer3,
  };
}

export default connect(함수명)(Detail);
// export default Detail;
