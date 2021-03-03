import React from 'react';
import classes from './Trackers.module.css';
import Tracker from '../tracker/Tracker';

const Trackers = props => {
  let output;
  if (props.list.length === 0) {
    output = <h2>Start adding trackers!</h2>;
  } else {
    output = props.list
      .slice(0)
      .reverse()
      .map(item => {
        return (
          <Tracker
            key={item.id}
            id={item.id}
            name={item.name}
            time={item.time}
            remove={props.remove}
            updateTime={props.updateTime}
          />
        );
      });
  }
  return <div className={classes.Trackers}>{output}</div>;
};

export default Trackers;
