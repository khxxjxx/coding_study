import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import moment from 'moment';
import Img from '././img/1.jpg';
import './App.css';

function App() {
  const [week, SetWeek] = useState([
    {
      id: 0,
      day: 'Sun',
    },
    {
      id: 1,
      day: 'Mon',
    },
    {
      id: 2,
      day: 'Tue',
    },
    {
      id: 3,
      day: 'Wed',
    },
    {
      id: 4,
      day: 'Thu',
    },
    {
      id: 5,
      day: 'Fri',
    },
    {
      id: 6,
      day: 'Sat',
    },
  ]);

  const now = moment();
  const [date, setDate] = useState(moment().subtract(3, 'day'));
  const [dates, setDates] = useState([]);

  // const date = {
  //   year: today.getFullYear(),
  //   month: today.getMonth() + 1,
  //   date: today.getDate(),
  //   day: today.getDay(),
  // };

  const weekChangeHandlerRight = e => {
    e.preventDefault();
    const newWeek = [...week];
    newWeek.push(newWeek.shift());
    SetWeek(newWeek);
  };

  const weekChangeHandlerLeft = e => {
    e.preventDefault();
    const newWeek = [...week];
    newWeek.unshift(newWeek.pop());
    SetWeek(newWeek);
  };

  return (
    <div>
      <NavBar />
      <img src={Img} />
      <div className="week">
        <button onClick={weekChangeHandlerLeft}>←</button>
        {week.map(week => (
          <div key={week.id}>
            <div>{week.day}</div>
            <div>{now.day(week.id).format('DD', 'date')}</div>
          </div>
        ))}
        <button onClick={weekChangeHandlerRight}>→</button>
      </div>
      <Clock />
      <Input />
    </div>
  );
}

export default App;
