import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TodoContext } from '../utils/Context'

const Create = () => {

    const navigate = useNavigate()

    const {
        todos,
        settodos,
        todo,
        settodo,
        skill,
        setskill,
        rollno,
        setrollno,
        attendance,
        setattendance,
        active,
        setactive,
    } = useContext(TodoContext)

    const SubmitHandler = (event) => {
        event.preventDefault();
        const task = { todo, skill, rollno, attendance };


        settodos([...todos, task]);
        settodo("")
        setskill("")
        setrollno("")
        setattendance("")
        navigate("/mytodo")
    };

    // ---------------------------------------RETURN PART-----------------------------------------------------

    return (
        <div className='createtodo'>
            <h1 className='text-center border-lg-dark shadow-lg pt-3 pb-3' style={{ backgroundColor: "transparent", color: "white" }}>ADD Student <Link to="/"> <span style={{ color: "black", position: "absolute", right: "2%", top: ".1%" }}><img src="https://img.icons8.com/?size=80&id=109681&format=png" alt="" /></span></Link></h1>
            <form className='container w-50  form-control border-3 border-lg-dark shadow-5 alert alert-dark' style={{ marginTop: '4vmax', }}>
                <h1 className='text-center mt-2' style={{ fontFamily: "cursive" }}>Fill the Required Details....</h1>
                <input
                    className="form-control mt-4 border-5 bprder-md-dark shadow-sm"
                    onChange={(e) => settodo(e.target.value)}
                    value={todo}
                    type="text"
                    placeholder='Name'
                />
                <input className="form-control  mt-3 border-5 bprder-md-dark shadow-sm"
                    onChange={(e) => setskill(e.target.value)}
                    value={skill}
                    type="text" placeholder='Stream'
                />
                <input className="form-control  mt-3 border-5 bprder-md-dark shadow-sm"
                    onChange={(e) => setrollno(e.target.value)}
                    value={rollno}
                    type="number" placeholder='Roll no.'
                />
                <input className="form-control mb-3 mt-3 border-5 bprder-md-dark shadow-sm"
                    onChange={(e) => setattendance(e.target.value)}
                    value={attendance}
                    type="string" placeholder='Attendance'
                />
                <Link to="/mytodo" style={{
                    width: '6vmax',
                    height: '4vmax',
                    padding: ".5vmax",
                    backgroundColor: "grey",
                    color: "white",
                    listStyleType: "none",
                    fontSize: "1.3vmax"
                }}>Go Back</Link>


                <button
                    onClick={SubmitHandler}
                    className="create-todo-btn btn "
                    style={{ backgroundColor: "tomato", color: "white", fontFamily: "cursive" }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Create