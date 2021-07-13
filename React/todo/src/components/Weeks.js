import React, { useState } from 'react';
import moment from 'moment';

const Weeks = props => {
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
  );
};

export default Weeks;
