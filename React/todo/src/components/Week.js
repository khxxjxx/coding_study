const Week = props => {
  const { day, idx, now, today, onDaysChange } = props;

  const dayChangeHandler = e => {
    e.preventDefault();
    onDaysChange(idx);
  };

  return (
    <div className={idx === 3 ? '' : 'choice'}>
      <div>{day.day}</div>
      <div
        onClick={dayChangeHandler}
        className={`day ${
          now.clone().subtract(3, 'day').add(idx, 'day').format('YYYY-M-D') ===
          `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
            ? 'today'
            : ''
        }`}>
        {now.clone().subtract(3, 'day').add(idx, 'day').format('DD', 'date')}
      </div>
    </div>
  );
};

export default Week;
