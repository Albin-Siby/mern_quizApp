import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import Data from '../database/Data'

function Questions() {

    const [ checked, setChecked ] = useState(undefined)
    const questions = Data[0]

    useEffect(() => {
        console.log(questions)
    })

    function onselect() {
        
        console.log("radio button changed")
    }

  return (
    <div className="questions">
        <div className='text-light'>{`${questions.id}.${questions.question}`}</div>
        <ul key={questions.id}>
            {questions.options.map((option, index) => (
                <li key={index}>
                    <input type="radio" id={`q${index}-option`} value={true} name="options" onChange={onselect()} />
                    <label className='text-primary' htmlFor={`q${index}-option`}>{option}</label>
                    <div className="check"></div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Questions