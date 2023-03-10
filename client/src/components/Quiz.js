import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import Questions from './Questions'
import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestion'
import { pushAnswer } from '../hooks/setResult'

import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

function Quiz() {

    const [ check , setCheck ] = useState(undefined)
    const result = useSelector(state => state.result.result)
    const state = useSelector(state => state)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    function onPrevHandle() {
        //console.log("Prev btn is clicked")
        if(trace > 0) {
            dispatch(movePrevQuestion())
        }
    
    }

    function onNextHandle() {
        //console.log("Next btn is clicked")
        if(trace < queue.length) {

            dispatch(moveNextQuestion())

            if(result.length <= trace) {
                dispatch(pushAnswer(check))
            }

        }

        setCheck(undefined)
       
    }

    function onChecked(check) {
        //console.log(check)
        setCheck(check)
    }

    if(result.length && result.length >= queue.length) {
        return <Navigate to={'/results'} replace="true" ></Navigate>
    }

  return (
    <div className="container">
        <h1 className="title"><span>Quiz Application</span></h1>

        <Questions onChecked = {onChecked} />

        <div className="grid">
            {trace > 0 ? <button className='btn prev' onClick={onPrevHandle}>Prev</button> : <></>}
            <button className='btn next' onClick={onNextHandle}>Next</button>
        </div>
    </div>
  )
}

export default Quiz