import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from './views/hello';
import Color from './views/color';
import Numero from './views/numero';
import Welcome from './views/welcome';



function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}></Route>
          <Route path="/:numero" element={<Numero></Numero>}></Route>
          <Route parth="/:palabra" element={<Hello></Hello>}></Route>
          <Route path="/:palabra/:color" element={<Color></Color>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
