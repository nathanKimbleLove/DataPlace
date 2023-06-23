import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import PageWrapper from './components/nav/PageWrapper';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Charts from './components/pages/Charts/Charts';
import NotFound from './components/pages/NotFound/NotFound';
import ExistingChart from './components/pages/Charts/ExistingChart';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="chart" >
            <Route index element={<Charts />} />
            <Route path=":chartId" element={<ExistingChart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
