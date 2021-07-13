import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import Weeks from './components/Weeks';
import Img from '././img/1.jpg';
import './App.css';

function App() {
  // const [date, setDate] = useState(moment().subtract(3, 'day'));
  // const [dates, setDates] = useState([]);

  // const date = {
  //   year: today.getFullYear(),
  //   month: today.getMonth() + 1,
  //   date: today.getDate(),
  //   day: today.getDay(),
  // };

  return (
    <div>
      <NavBar />
      <img src={Img} />
      <Weeks />
      <Clock />
      <Input />
    </div>
  );
}

export default App;
