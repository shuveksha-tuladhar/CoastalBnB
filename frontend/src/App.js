import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './features/Home/Home';
import PropertyDetails from './features/PropertyDetails/PropertyDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/properties/:id" element={<PropertyDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
