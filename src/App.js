import React from 'react'
import classes from './App.module.css'
import {connect} from 'react-redux'
import Form from './components/form/Form'
import Trackers from './components/trackers/Trackers'
import {addNewTracker, removeTracker} from './store/action-creators/actions'

function App({trackers, add, remove}) {
  return (
    <div className={classes.App}>
      <h1>tracker</h1>
      <Form add={add} />
      <Trackers list={trackers} remove={remove} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    trackers: state.trackers.list,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add: (name, time, id) => dispatch(addNewTracker(name, time, id)),
    remove: id => dispatch(removeTracker(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
