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
    <Routes>
      <Route exact path='/' index element={<Main />} />
      <Route path='/costcompass' element={<CostCompass />} />
      <Route path='/neighbournet' element={<NeighbourNet />} />
      <Route path='/internx' element={<InternX />} />
      <Route path='/stemfellowship' element={<StemFellowship />} />


    </Routes>
  )
}

export default App;

