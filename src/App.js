import React, {useEffect} from 'react';
import classes from './App.module.css';
import {connect} from 'react-redux';
import Form from './components/form/Form';
import Trackers from './components/trackers/Trackers';
import {addNewTracker, removeTracker} from './store/action-creators/actions';

function App({add, remove, trackers}) {
  const newTrackers = trackers;

  const updateTime = time => {
    [...trackers].forEach(item => {
      if (item.id === time.id) {
        item.time = time.time;
      }
    });
  };
  const save = () => {
    localStorage.setItem('trackers', JSON.stringify(newTrackers));
  };

  useEffect(() => {
    return () => {
      save();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trackers]);

  return (
    <div className={classes.App}>
      <h1>tracker</h1>
      <Form add={add} />
      <Trackers list={trackers} remove={remove} updateTime={updateTime} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    trackers: state.trackers.list,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    add: (name, time, id, trackers) =>
      dispatch(addNewTracker(name, time, id, trackers)),
    remove: id => dispatch(removeTracker(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
