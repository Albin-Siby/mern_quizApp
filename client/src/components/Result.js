import React, { useEffect } from 'react'
import '../styles/Results.css'
import { Link } from 'react-router-dom'
import Resulttable from './Resulttable'
import { useDispatch, useSelector } from 'react-redux'
import { attempts_Number, earnPoints_Number, flagResult } from '../helper/helper'

import { resetResultAction } from '../redux/result_reducer'
import { resetAllActions } from '../redux/question_reducer'

function Result() {

  const dispatch = useDispatch()

  const { questions: { queue, answers }, result: { result, userId }} = useSelector(state => state)

  useEffect(() => {
    console.log(result)
  })

  const totalPoints = queue.length * 10
  const attempts = attempts_Number(result)
  const earnPoints = earnPoints_Number(result, answers, 10)
  const flag = flagResult(totalPoints,earnPoints)

  function onRestart() {
    dispatch(resetAllActions())
    dispatch(resetResultAction())
  }

  return (
    <div className='container'>
      <h1 className="title"><span>Quiz Application</span></h1>

      <div className="result flex-center">
        <div className="flex">
          <span className='head'>Username</span>
          <div className="bold">
            <span>{userId}</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Total Quiz Points:</span>
          <div className="bold">
            <span>{totalPoints || 0}</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Total Questions:</span>
          <div className="bold">
            <span>{queue.length || 0}</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Total Attempts:</span>
          <div className="bold">
            <span>{attempts || 0}</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Total Earn Points:</span>
          <div className="bold">
            <span>{earnPoints || 0}</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Quiz Results</span>
          <div className="bold">
            <span style={{color : `${flag ? "#2aff95" : "red"}`}}>{ flag ? "Passed" : "Failed"}</span>
          </div>
        </div>
      </div>

      <div className="start">
        <Link className='btn' to={'/'} onClick={onRestart} >Restart</Link>
      </div>

      <div className="container">
        <Resulttable />
      </div>
    </div>
  )
}

export default Result