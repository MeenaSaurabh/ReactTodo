import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {


  // ---------------------------------------RETURN PART-----------------------------------------------------
  return (
    <>
      <div id='home' className='d-flex'>
        <div className='w-50'>
          <img className='homeimg' src="https://img.freepik.com/free-vector/back-school-background-with-chalkboard_23-2147856273.jpg?w=740&t=st=1695727554~exp=1695728154~hmac=6974435d1ae056410be0be1e212a0403abaee71185be40f2fa000ddd78836132" alt="" />
        </div>


        <div className='w-50' style={{ backgroundColor: "black" }}>
          <img className=' mt-3' style={{ width: "60%", height: "20%", paddingLeft: "2vmax" }} src="https://www.chalkbox.in/images/logo.png" alt="" />
          <h1 className='home-text' style={{ fontFamily: "cursive" }}>Manage Your Class <br />
            <span className='home-text-span1' style={{ fontFamily: "cursive" }}>Like Never Before</span> <br /> <br />
            <span className='home-text-span2' style={{ fontFamily: "cursive", color: "red" }}>Student Management</span> <br />System!
          </h1>
          <Link to="/mytodo"><button className='homebtn btn' style={{ fontFamily: "cursive", backgroundColor: "white" }}>Explore</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home