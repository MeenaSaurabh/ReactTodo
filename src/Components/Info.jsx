import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { TodoContext } from '../utils/Context'
import "../global.css"

const Info = () => {
  const { id } = useParams()
  const { todos } = useContext(TodoContext)
  const user = todos[id]


  // ---------------------------------------RETURN PART-----------------------------------------------------
  return (
    <div className='container w-50 h-25 alert alert-dark mt-3  d-flex flex-column justify-content-evenly'>
      <h2><span style={{ color: "red", padding: "1vmax" }}>Name:</span>{user.todo}</h2>
      <h4><span style={{ color: "red", padding: "1vmax" }}>Stream:</span>{user.skill}</h4>
      <h4><span style={{ color: "red", padding: "1vmax" }}>Roll No:</span>{user.rollno}</h4>
      <h4><span style={{ color: "red", padding: "1vmax" }}>Attendance:</span>{user.attendance}</h4>

      <Link to="/mytodo" style={{
        width: '5vmax',
        height: '2.8vmax',
        padding: ".6vmax",
        backgroundColor: "grey",
        color: "white",
        listStyleType: "none",
        fontSize: "1.3vmax"
      }}>Close</Link>
    </div>
  )
}

export default Info