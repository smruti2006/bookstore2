import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {CreateBook,DeleteBook,EditBook,Home,ShowBook} from './Pages'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/book/create' element={<CreateBook/>}/>
      <Route path='/book/delete/:id' element={<DeleteBook/>}/>
      <Route path='/book/edit/:id' element={<EditBook/>}/>
      <Route path='/book/details/:id' element={<ShowBook/>}/>
    </Routes>
    </>
  )
}

export default App
