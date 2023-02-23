import React from 'react'
import '../styles/Quiz.css'

function Quiz() {

    function onPrevHandle() {
        console.log("Prev btn is clicked")
    }

    function onNextHandle() {
        console.log("Next btn is clicked")
    }

  return (
    <div className="container">
        <h1 className="title text-light"><span>Quiz Application</span></h1>

        <div className="grid">
            <button className='btn prev' onClick={onPrevHandle}>Prev</button>
            <button className='btn next' onClick={onNextHandle}>Next</button>
        </div>
    </div>
  )
}

export default Quiz