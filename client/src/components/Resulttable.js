import React from 'react'

function Resulttable() {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn Points</td>
                    <td>Results</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>Albin Siby</td>
                    <td>03</td>
                    <td>30</td>
                    <td>Passed</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Resulttable