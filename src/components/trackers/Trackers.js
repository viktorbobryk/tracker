import React from 'react'
import classes from './Trackers.module.css'
import Tracker from '../tracker/Tracker'

const Trackers = props => {
  return (
    <div className={classes.Trackers}>
      <Tracker h={props.h} m={props.m} s={props.s} />
      <Tracker h={props.h} m={props.m} s={props.s} />
      <Tracker h={props.h} m={props.m} s={props.s} />
      <Tracker h={props.h} m={props.m} s={props.s} />
      <Tracker h={props.h} m={props.m} s={props.s} />
    </div>
  )
}

export default Trackers
