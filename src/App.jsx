import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import ItemInfo from './pages/ItemInfo';
import './App.css'

function App() {
  const [count, setCount] = useState([])
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/products/:id' element={<ItemInfo></ItemInfo>}></Route>
    </Routes>
  )
}

export default App
