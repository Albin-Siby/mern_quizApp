import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import Questions from './Questions'
import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestion'
import { pushAnswer } from '../hooks/setResult'

import { useSelector, useDispatch } from 'react-redux'

function Quiz() {

    const [ check , setCheck ] = useState(undefined)
    const state = useSelector(state => state)
    const { queue, trace } = useSelector(state => state.questions)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(state)
    })

    function onPrevHandle() {
        //console.log("Prev btn is clicked")
        if(trace > 0) {
            dispatch(movePrevQuestion())
        }
    
    }

    function onNextHandle() {
        //console.log("Next btn is clicked")
        if(trace < queue.length - 1) {

            dispatch(moveNextQuestion())

            dispatch(pushAnswer(check))

        }
       
    }

    function onChecked(check) {
        //console.log(check)
        setCheck(check)
    }

  return (
    <div className="container">
        <h1 className="title"><span>Quiz Application</span></h1>

        <Questions onChecked = {onChecked} />

        <div className="grid">
            <button className='btn prev' onClick={onPrevHandle}>Prev</button>
            <button className='btn next' onClick={onNextHandle}>Next</button>
        </div>
    </div>
  )
}

export default Quiz