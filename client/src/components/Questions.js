import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import { useDispatch, useSelector } from 'react-redux'

/* custom hook */
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateResult } from '../hooks/setResult'

function Questions( { onChecked }) {

    const [ checked, setChecked ] = useState(undefined)
    const { trace } = useSelector(state => state.questions)
    const result = useSelector(state => state.result.result)
    const [{ isLoading, apiData, serverError }] = useFetchQuestion()

    const questions = useSelector(state => state.questions.queue[state.questions.trace])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(updateResult({ trace, checked }))
    }, [checked])

    function onselect(i) {
        //console.log(i)
        onChecked(i)
        setChecked(i)
        dispatch(updateResult({trace, checked}))
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
                    <div className={`check ${result[trace] == index ? 'checked' : ''}`}></div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Questions