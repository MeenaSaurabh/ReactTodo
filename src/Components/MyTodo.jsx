import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { TodoContext } from '../utils/Context'


const MyToDo = () => {

  const navigate = useNavigate()

  const { todos, settodos, todo, settodo, skill, setskill, rollno, setrollno, attendance, setattendance, active, setactive } = useContext(TodoContext)


  const infoHandler = (i) => {
    navigate("/mytodo/" + i)
  }
  const ActiveHandler = (i) => {
    setactive(i);
    settodo(todos[i].todo);
    setskill(todos[i].skill)
    setrollno(todos[i].rollno)
    setattendance(todos[i].attendance)
    navigate("/update")
  };

  const DeleteHandler = (i) => {
    const copytodos = [...todos];
    copytodos.splice(i, 1);
    settodos(copytodos);
  };

  // ---------------------------------------RETURN PART-----------------------------------------------------
  return (
    <>
      <div className='mytodo'>
        <div>
          <h1 className='text-center pb-3 pt-3 border-lg-dark shadow-lg text-bold' style={{ backgroundColor: "#00000090", fontFamily: "cursive" }}><img className='pb-2 pt-2' style={{ width: "15%", height: "15%", }} src="https://www.chalkbox.in/images/logo.png" alt="" /> <Link to="/"> <span style={{ color: "black", position: "absolute", right: "2%", top: "-0.5%" }}><img src="https://img.icons8.com/?size=80&id=109681&format=png" alt="" /></span></Link></h1>
        </div>

        <div className='mytodo-btw-box'>
          <h1 style={{ fontFamily: "cursive", color: "wheat" }}>List of All Students</h1>
          <Link to="/create"><button className='createbtn'> <span style={{ color: "black" }}>➕</span></button></Link>
        </div>
        <Outlet />

        <div className='container mt-4  gap-3'>
          {todos.map((e, i) => {
            return (
              <div className="container w-50 h-25 alert alert-light mt-3  d-flex justify-content-between" style={{ backgroundColor: "black", color: "white", border: "3px dashed wheat", borderRadius: "2px", fontWeight: "bolder", fontSize: "2vmax" }}
                key={i}>
                Roll no.{e.rollno}--{e.todo}
                {active === null && (
                  <span style={{ cursor: "pointer" }}>
                    <span onClick={() => infoHandler(i)}>ℹ</span>
                    <span onClick={() => ActiveHandler(i)}>✏️</span>
                    <span onClick={() => DeleteHandler(i)}>❌</span>
                  </span>
                )}
              </div>
            )
          })}
        </div>

      </div>

    </>
  )
}

export default MyToDo