import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/page/LandingPage";
import { CreateProduct } from "./components/page/CreateProduct";
import DataProduct from './components/data/DataProduct';


function App() {
  useEffect(() => {
    alert('Welcome');
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/account/:id" element={<DataProduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

