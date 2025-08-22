import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Brand from "./page/Brand";
import Distributor from "./page/Distributor";
import Retailer from "./page/Retailer";
import Header from './page/Header';
import Home from './page/Home';
import Footer from './page/Footer';


function App() {
  return (

    <><>
      <div class="row">

        <div class="row">
          <div class="toprow col-sm-12">
            <h1>Welcome, Pradeep</h1>
          </div>
        </div>

        <div class="row">
          <Header />

          <Router>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/brand" element={<Brand />} />
              <Route path="/distributor" element={<Distributor />} />
              <Route path="/retailer" element={<Retailer />} />
            </Routes>
          </Router>

          <Footer />
        </div>
      </div>
    </>
    </>


  );
}

export default App;