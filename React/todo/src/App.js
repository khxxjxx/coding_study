import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import Weeks from './components/Weeks';
import moment from 'moment';
import { Route, Switch, useHistory } from 'react-router-dom';
import Month from './Month';
import './App.css';

function App() {
  const [now, setNow] = useState(moment());
  const history = useHistory();

  useEffect(() => {
    setNow(moment());
  }, []);

  return (
    <>
      <NavBar setNow={setNow} />
      <Switch>
        <Route path="/todo/month">
          <Month history={history} setNow={setNow} />
        </Route>
        <Route path="/:id">
          <Weeks now={now} setNow={setNow} />
          <Clock />
          <Input now={now.format('YYYY-MM-DD')} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
