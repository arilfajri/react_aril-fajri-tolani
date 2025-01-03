import React from 'react'
import Header from '../header/Header'
import Form from '../form/Form'
import ButtonRandom from '../button/ButtonRandom'
import ButtonTable from '../button/ButtonTable'
import './Product.css'
import ButtonBack from '../button/ButtonBack'

export const CreateProduct = () => {
  return (
    <div>
      <Header />
      <Form />
      <ButtonBack />
      <ButtonRandom />
      <ButtonTable />
    </div>
  )
}
