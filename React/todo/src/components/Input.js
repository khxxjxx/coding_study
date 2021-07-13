import React, { useState, useEffect } from 'react';
import List from './List';

const Input = props => {
  let lists = localStorage.getItem('lists');
  lists === null ? (lists = []) : (lists = JSON.parse(lists));

  const [input, setInput] = useState('');
  const [list, setList] = useState([...lists]);

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(list));
  }, [list]);

  const inputValue = e => {
    setInput(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    input !== '' &&
      setList(prevList => {
        return [...prevList, { id: list.length, value: input, clicked: false }];
      });
    setInput('');
  };

  const onDeleteHandler = id => {
    if (window.confirm('리스트에서 완전히 삭제하시겠습니까?')) {
      const newList = list.filter(list => list.id !== id);
      setList(newList);
    } else {
      let newList = [...list];
      newList[newList.findIndex(list => list.id === id)].clicked =
        !newList[newList.findIndex(list => list.id === id)].clicked;
      setList(newList);
    }
  };

  return (
    <>
      <form className="input" onSubmit={submit}>
        <input
          type="text"
          value={input}
          placeholder="오늘의 할일"
          onChange={inputValue}
        />
      </form>
      <List
        list={list}
        id={list.id}
        clicked={list.clicked}
        onDelete={onDeleteHandler}
        setList={setList}
      />
    </>
  );
};

export default Input;
