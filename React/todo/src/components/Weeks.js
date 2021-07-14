import React, { useState } from 'react';

const Weeks = props => {
  const today = new Date();
  const { now, setNow } = props;

  const [days, SetDays] = useState([
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

  const daysChangeHandlerRight = e => {
    e.preventDefault();
    const newDays = [...days];
    newDays.push(newDays.shift());
    SetDays(newDays);
    const newNow = now.clone().add(1, 'day');
    setNow(newNow);
  };

  const daysChangeHandlerLeft = e => {
    e.preventDefault();
    const newDays = [...days];
    newDays.unshift(newDays.pop());
    SetDays(newDays);
    const newNow = now.clone().subtract(1, 'day');
    setNow(newNow);
  };

  return (
    <div className="week">
      <button onClick={daysChangeHandlerLeft}>←</button>
      {days.map((day, idx) => (
        <div className={idx === 3 ? '' : 'choice'} key={day.id}>
          <div>{day.day}</div>
          <div
            className={
              now
                .clone()
                .subtract(3, 'day')
                .add(idx, 'day')
                .format('YYYY-M-D') ===
              `${today.getFullYear()}-${
                today.getMonth() + 1
              }-${today.getDate()}`
                ? 'today'
                : ''
            }>
            {now
              .clone()
              .subtract(3, 'day')
              .add(idx, 'day')
              .format('DD', 'date')}
          </div>
        </div>
      ))}
      <button onClick={daysChangeHandlerRight}>→</button>
    </div>
  );
};

export default Weeks;
