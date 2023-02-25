import React, { useEffect } from 'react'
import '../styles/App.css'
import Questions from './Questions'
import { moveNextQuestion } from '../hooks/FetchQuestion'

import { useSelector, useDispatch } from 'react-redux'

function Quiz() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        //console.log(state)
    })

    function onPrevHandle() {
        console.log("Prev btn is clicked")
    }

    function onNextHandle() {
        //console.log("Next btn is clicked")
        dispatch(moveNextQuestion())
    }

  return (
    <div className="container">
        <h1 className="title"><span>Quiz Application</span></h1>

        <Questions />

        <div className="grid">
            <button className='btn prev' onClick={onPrevHandle}>Prev</button>
            <button className='btn next' onClick={onNextHandle}>Next</button>
        </div>
    </div>
  )
}

export default Quiz