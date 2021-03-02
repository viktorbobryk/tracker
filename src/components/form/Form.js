import React from 'react'
import classes from './Form.module.css'

const Form = () => {
  return (
    <>
      <form className={classes.Form}>
        <input placeholder="Enter tracker name" />
        <button>
          <span className="material-icons">play_circle_filled</span>
        </button>
        {/*  <span className="material-icons">*/}
        {/*    play_circle_filled*/}
        {/*  </span>*/}
        {/*  <span className="material-icons">*/}
        {/*    pause_circle*/}
        {/*  </span>*/}
        {/*<span className="material-icons">*/}
        {/*    play_circle_outline*/}
        {/*</span>*/}
        {/*  <span className="material-icons">*/}
        {/*    pause_circle_outline*/}
        {/*  </span>*/}
        {/*<span className="material-icons">*/}
        {/*  remove_circle_outline*/}
        {/*</span>*/}
      </form>
    </>
  )
}

export default Form
