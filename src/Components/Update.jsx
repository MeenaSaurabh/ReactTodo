import React, { useContext } from 'react'
import { TodoContext } from '../utils/Context';
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {

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

    const UpdateHandler = (e) => {
        e.preventDefault();
        const copytodos = [...todos];
        copytodos[active] = { ...copytodos[active], todo, skill, rollno, attendance };
        settodos(copytodos);

        settodo("");
        setskill("")
        setrollno("")
        setattendance("")
        setactive(null);
        navigate("/mytodo")
    };

    // ---------------------------------------RETURN PART-----------------------------------------------------
    return (
        <div className='updatetodo'>
            <h1 className='text-center border-lg-dark shadow-lg  pt-3 pb-3' style={{ backgroundColor: "transparent", color: "white", fontFamily: "cursive" }}>Update Page<Link to="/"> <span style={{ color: "black", position: "absolute", right: "2%", top: ".1%" }}>
                <img src="https://img.icons8.com/?size=80&id=109681&format=png" alt="" />
            </span></Link> </h1>
            <form className='container w-50  form-control border-5 border-lg-dark shadow-sm alert alert-dark' style={{ marginTop: "4vmax", }}>
                <h1 className='text-center mt-2' style={{ fontFamily: "cursive" }}>Edit Your Details</h1>
                <input
                    className="form-control mt-4 border-5 bprder-md-dark shadow-sm"
                    onChange={(e) => settodo(e.target.value)}
                    value={todo}
                    type="text"
                    placeholder='Name'
                />
                <input
                    className="form-control  mt-3 border-5 bprder-md-dark shadow-sm"
                    onChange={(e) => setskill(e.target.value)}
                    value={skill}
                    type="text"
                    placeholder='Stream'
                />
                <input
                    className="form-control  mt-3 border-5 bprder-md-dark shadow-sm"
                    onChange={(e) => setrollno(e.target.value)}
                    value={rollno}
                    type="number"
                    placeholder='Roll No.'
                />
                <input
                    className="form-control mb-3 mt-3 border-5 bprder-md-dark shadow-sm"
                    onChange={(e) => setattendance(e.target.value)}
                    value={attendance}
                    type="string"
                    placeholder='Attendance'
                />
                <button
                    onClick={UpdateHandler}
                    className="update-btn create-todo-btn"
                    style={{ backgroundColor: "tomato", color: "white", fontFamily: "cursive" }}
                >
                    Update
                </button>

            </form>
        </div>
    )
}

export default Update