import React, { createContext, useEffect, useState } from 'react'
export const TodoContext = createContext(null)

const Context = (props) => {

  const [todo, settodo] = useState("")
  const [skill, setskill] = useState("")
  const [rollno, setrollno] = useState("")
  const [attendance, setattendance] = useState("")

  const [todos, settodos] = useState([{ todo: "Saurabh Meena", skill: "Science", rollno: "1", attendance: "69%" }])

  const [active, setactive] = useState(null)

  const { children } = props;

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('ReactTodo'))

    if (savedData) {
      settodos(savedData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('ReactTodo', JSON.stringify(todos))

    return () => {
    }
  }, [todos])

  // ---------------------------------------RETURN PART-----------------------------------------------------
  return (
    <TodoContext.Provider value={{
      todo,
      settodo,
      skill,
      setskill,
      rollno,
      setrollno,
      attendance,
      setattendance,
      todos,
      settodos,
      active,
      setactive,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export default Context