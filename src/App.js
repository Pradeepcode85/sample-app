import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Brand from "./page/Brand";
import Distributor from "./page/Distributor";
import Retailer from "./page/Retailer";
 
import Confirmation from './page/Confirmation';
import FormComponent from './page/FormComponent';


function App() {
  return (

     <Router>
      <Routes>
        <Route path="/form" element={<FormComponent />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
