import Header from "./components/header/Header";
import Form from "./components/form/Form";
import ButtonForm from "./components/button/ButtonForm";
import Table from "./components/table/Table";
import ButtonTable from "./components/button/ButtonTable";
import './App.css';
import React, { useState } from 'react'
import ButtonRandom from "./components/button/ButtonRandom";
import ButtonChange from "./components/button/ButtonChange";



function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.todo.value;
    setTodos([...todos, newTodo]);
    event.target.reset();
  };

  return (
    <>
      <Header />
      <Form />
      <ButtonForm />
      <ButtonRandom />
      <Table />
      <ButtonTable />
    </>
  );
}

export default TodoList;

