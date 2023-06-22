import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './components/nav/Nav';
import Home from './components/pages/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          {/* <Route element={<DataEntry />} />
          <Route element={<Charts />} />
          <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
