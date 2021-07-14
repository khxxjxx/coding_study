import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Weeks = props => {
  const today = new Date();
  const [now, setNow] = useState(moment());

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

  useEffect(() => {
    setNow(moment());
    console.log(
      now.format('YYYY-M-D') ===
        `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    );
  }, []);

  const daysChangeHandlerRight = e => {
    e.preventDefault();
    const newDays = [...days];
    newDays.push(newDays.shift());
    SetDays(newDays);
    setNow(now.add(1, 'day'));
  };

  const daysChangeHandlerLeft = e => {
    e.preventDefault();
    const newDays = [...days];
    newDays.unshift(newDays.pop());
    SetDays(newDays);
    setNow(now.subtract(1, 'day'));
  };

  return (
    <div className="week">
      <button onClick={daysChangeHandlerLeft}>←</button>
      {days.map((day, idx) => (
        <div key={day.id}>
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
                }-${today.getDate()}` && 'today'
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
