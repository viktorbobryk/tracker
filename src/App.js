import React from 'react'
import classes from './App.module.css'
import {connect} from 'react-redux'
import Form from './components/form/Form'
import Trackers from './components/trackers/Trackers'

function App({hours, minutes, seconds}) {
  console.log(hours, minutes, seconds)
  return (
    <div className={classes.App}>
      <h1>tracker</h1>
      <Form />
      <Trackers h={hours} m={minutes} s={seconds} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    hours: state.time.h,
    minutes: state.time.m,
    seconds: state.time.s,
  }
}

export default connect(mapStateToProps)(App)
