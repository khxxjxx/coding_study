import { useEffect, useState } from 'react';

const Clock = props => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearTimeout();
    };
  }, [date]);

  return (
    <div>
      <div className="date">
        {date.getMonth() + 1}월 {date.getDate()}일
      </div>
      <div className="clock">
        {date.getHours()}:
        {`${
          date.getMinutes() < 10
            ? `0${date.getMinutes()}`
            : `${date.getMinutes()}`
        }`}
        :
        {`${
          date.getSeconds() < 10
            ? `0${date.getSeconds()}`
            : `${date.getSeconds()}`
        }`}
      </div>
    </div>
  );
};

export default Clock;
