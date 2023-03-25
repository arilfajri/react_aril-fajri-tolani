import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/page/LandingPage";
import { CreateProduct } from "./components/page/CreateProduct";
import DataProduct from './components/data/DataProduct';
import RegisterForm from './components/form/RegisterForm';
import LoginForm from './components/form/LoginForm';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoginForm />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/account/:id" element={<DataProduct />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

