import React, { useEffect, useState } from 'react'
import { getServerData } from '../helper/helper'

function Resulttable() {

    const [ data, setData ] = useState([])

    useEffect(() => {
        getServerData("http://localhost:5000/api/results", (res) => {
            setData(res)
        })
    })

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

                { !data ?? <div>No Data Found</div>}

                {
                    data.map((value,index) => (
                        <tr className='table-body' key={index}>
                            <td>{value?.username || ""}</td>
                            <td>{value?.attempts || 0}</td>
                            <td>{value?.points || 0}</td>
                            <td>{value?.flag || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default Resulttable