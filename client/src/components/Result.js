import React from 'react'
import '../styles/Results.css'
import { Link } from 'react-router-dom'
import Resulttable from './Resulttable'

function Result() {
  return (
    <div className='container'>
      <h1 className="title"><span>Quiz Application</span></h1>

      <div className="result flex-center">
        <div className="flex">
          <span className='head'>Username</span>
          <div className="bold">
            <span>Albin Siby</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Total Quiz Points:</span>
          <div className="bold">
            <span>50</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Total Questions:</span>
          <div className="bold">
            <span>05</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Total Attempts:</span>
          <div className="bold">
            <span>03</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Total Earn Points:</span>
          <div className="bold">
            <span>30</span>
          </div>
        </div>
        <div className="flex">
          <span className='head'>Quiz Results</span>
          <div className="bold">
            <span>Passed</span>
          </div>
        </div>
      </div>

      <div className="start">
        <Link className='btn' to={'/'}>Restart</Link>
      </div>

      <div className="container">
        <Resulttable />
      </div>
    </div>
  )
}

export default Result