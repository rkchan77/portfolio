import "@fontsource/league-spartan";
import "@fontsource/poppins";
import Main from "./Main";
import CostCompass from "./components/CostCompass";
import NeighbourNet from "./components/Neighbournet";
import InternX from "./components/InternX";
import StemFellowship from "./components/StemFellowship";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/costcompass" element={<CostCompass />} />
        <Route path="/neighbournet" element={<NeighbourNet />} />
        <Route path="/internx" element={<InternX />} />
        <Route path="/stemfellowship" element={<StemFellowship />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App;

