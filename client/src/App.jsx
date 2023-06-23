import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import PageWrapper from './components/nav/PageWrapper';
import Home from './components/pages/Home/Home';
import DataEntry from './components/pages/DataEntry/DataEntry';
import Charts from './components/pages/Charts/Charts';
import NotFound from './components/pages/NotFound/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="data" element={<DataEntry />} />
          <Route path="charts" element={<Charts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
