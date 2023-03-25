import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Slider from './component/slider/Slider';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import About from './component/about/About';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
