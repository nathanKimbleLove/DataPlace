import './App.css'
import { Routes, Route } from "react-router-dom";
import PageWrapper from './components/nav/PageWrapper';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import NewChart from './components/pages/Chart/New/NewChart';
import NotFound from './components/pages/NotFound/NotFound';
import ExistingChart from './components/pages/Chart/Existing/ExistingChart';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<PageWrapper />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="chart" >
            <Route index element={<NewChart />} />
            <Route path=":chartId" element={<ExistingChart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
