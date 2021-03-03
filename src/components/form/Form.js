import React from 'react'
import classes from './Form.module.css'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = props => {
  const [inputValue, setInputValue] = useState('')

  const inputHandler = e => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  const clearInput = () => {
    setInputValue('')
  }

  return (
    <>
      <form className={classes.Form} onSubmit={e => e.preventDefault()}>
        <input
          value={inputValue}
          placeholder="Enter tracker name"
          onChange={inputHandler}
        />
        <button
          onClick={() => {
            props.add(
              inputValue ? inputValue : new Date().toLocaleString(),
              '00:00:00',
              uuidv4()
            )
            clearInput()
          }}
        >
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
