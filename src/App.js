import "@fontsource/league-spartan";
import "@fontsource/poppins";
import Main from "./Main";
import CostCompass from "./components/CostCompass";
import NeighbourNet from "./components/Neighbournet";
import InternX from "./components/InternX";
import StemFellowship from "./components/StemFellowship";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' index element={<Main />} />
        <Route exact path='/costcompass' element={<CostCompass />} />
        <Route exact path='/neighbournet' element={<NeighbourNet />} />
        <Route exact path='/internx' element={<InternX />} />
        <Route exact path='/stemfellowship' element={<StemFellowship />} />


      </Routes>
    </Router>
  )
}

export default App;

