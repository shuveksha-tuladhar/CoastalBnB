import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./features/Home/Home";
import PropertyDetails from "./features/PropertyDetails/PropertyDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <NavBar />
        <div className="app-height">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/properties/:id" element={<PropertyDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
