import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import Weeks from './components/Weeks';
import moment from 'moment';
import Img from '././img/1.jpg';
import './App.css';

function App() {
  const [now, setNow] = useState(moment());

  useEffect(() => {
    setNow(moment());
  }, []);

  return (
    <div>
      <NavBar />
      <img src={Img} alt="배경화면" />
      <Weeks now={now} setNow={setNow} />
      <Clock />
      <Input now={now.format('YYYY-MM-DD')} />
    </div>
  );
}

export default App;
