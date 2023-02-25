import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import { useSelector } from 'react-redux'

/* custom hook */
import { useFetchQuestion } from '../hooks/FetchQuestion'

function Questions( { onChecked }) {

    const [ checked, setChecked ] = useState(undefined)
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])

    useEffect(() => {
        //console.log(questions)
    })

    function onselect(i) {
        //console.log(i)
        onChecked(i)
    }

    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "Unknown Error"}</h3>

  return (
    <div className="questions">
        <div className='text-light'>{`${questions?.id}). ${questions?.question}`}</div>
        <ul key={questions?.id}>
            {questions?.options.map((option, index) => (
                <li key={index}>
                    <input type="radio" id={`q${index}-option`} value={true} name="options" onChange={ () => {
                        onselect(index)
                    }} />
                    <label className='text-primary' htmlFor={`q${index}-option`}>{option}</label>
                    <div className="check"></div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Questions