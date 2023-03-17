import Header from "./components/header/Header";
import Form from "./components/form/Form";
import ButtonTable from "./components/button/ButtonTable";
import './App.css';
import ButtonRandom from "./components/button/ButtonRandom";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    alert('Welcome');
  }, []);
  return (
    <>
      <Header />
      <Form />
      <ButtonRandom />
      <ButtonTable />
    </>
  );
}

export default App;

