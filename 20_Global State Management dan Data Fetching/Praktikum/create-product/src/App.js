import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/page/LandingPage";
import { CreateProduct } from "./components/page/CreateProduct";
import DataProduct from './components/data/DataProduct';
import RegisterForm from './components/form/RegisterForm';
import LoginForm from './components/form/LoginForm';
import { useState } from 'react';
import ProtectedRoute from './components/private/ProtectedRoute';


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/createproduct" element={
            <ProtectedRoute isSignedIn={isSignedIn}>
              <CreateProduct setSignedIn={setIsSignedIn} />
            </ProtectedRoute>
          } />
          <Route path="/acoount/:id" element={
            <ProtectedRoute isSignedIn={isSignedIn}>
              <DataProduct setSignedIn={setIsSignedIn} />
            </ProtectedRoute>
          } />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm setSignedIn={setIsSignedIn} isSignedIn={isSignedIn} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

