import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import MyToDo from './Components/MyToDo';
import Create from './Components/Create';
import Update from './Components/Update';
import Info from './Components/Info';


const App = () => {

  // ---------------------------------------RETURN PART-----------------------------------------------------
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mytodo' element={<MyToDo />} >
        <Route path='/mytodo/:id' element={<Info />} />
      </Route>
      <Route path='/create' element={<Create />} />
      <Route path='/update' element={<Update />} />
    </Routes>
  )
}

export default App
