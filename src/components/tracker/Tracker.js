import React from 'react'
import classes from './Tracker.module.css'

const Tracker = props => {
  return (
    <div className={classes.Tracker}>
      <div className={classes.name}>no name tracker</div>
      <div className={classes.timerBlock}>
        <span className={classes.timer}>
          {`${props.h} : ${props.m} : ${props.s}`}
        </span>
        <button className={classes.play}>
          <span className="material-icons">play_circle_outline</span>
        </button>
        <button className={classes.remove}>
          <span className="material-icons">remove_circle_outline</span>
        </button>
      </div>
    </div>
  )
}

export default Tracker
