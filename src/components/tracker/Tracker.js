import React, {useEffect, useState} from 'react';
import classes from './Tracker.module.css';

const Tracker = props => {
  const initialTime = props.time ? props.time : {s: 0, m: 0, h: 0};

  const [time, setTime] = useState(initialTime);
  const [timerInterval, setTimerInterval] = useState(null);
  const [ticking, setTicking] = useState(false);

  useEffect(() => {
    props.updateTime({id: props.id, time: time});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  useEffect(() => {
    startTimer();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTimer = () => {
    run();
    setTimerInterval(setInterval(run, 1000));
    setTicking(true);
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    setTicking(false);
  };

  let newS = time.s;
  let newM = time.m;
  let newH = time.h;

  const run = () => {
    if (newM === 60) {
      newH++;
      newM = 0;
    } else if (newS === 60) {
      newM++;
      newS = 0;
    }
    newS++;
    return setTime({s: newS, m: newM, h: newH});
  };

  let driveTimer;

  if (ticking) {
    driveTimer = (
      <button className={classes.play} onClick={stopTimer}>
        <span className="material-icons">pause_circle_outline</span>
      </button>
    );
  } else {
    driveTimer = (
      <button className={classes.play} onClick={startTimer}>
        <span className="material-icons">play_circle_outline</span>
      </button>
    );
  }

  return (
    <div className={classes.Tracker}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.timerBlock}>
        <span className={classes.timer}>
          {time.h >= 10 ? time.h : '0' + time.h} :{' '}
          {time.m >= 10 ? time.m : '0' + time.m} :{' '}
          {time.s >= 10 ? time.s : '0' + time.s}
        </span>
        {driveTimer}
        <button
          className={classes.remove}
          onClick={() => {
            props.remove(props.id);
            stopTimer();
          }}
        >
          <span className="material-icons">remove_circle_outline</span>
        </button>
      </div>
    </div>
  );
};

export default Tracker;
