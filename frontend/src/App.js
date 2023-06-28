import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './features/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
