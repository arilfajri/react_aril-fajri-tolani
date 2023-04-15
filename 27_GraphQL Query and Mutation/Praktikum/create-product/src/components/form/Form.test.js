import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import Form from './Form';
import { Provider } from 'react-redux';
import store from '../../config/redux/Store';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Form", () => {
  it("should render product name input and display entered text", () => {
    render(
      <Router>
        <Provider store={store}>
          <Form />
        </Provider>
      </Router>
    );
    const productNameInput = screen.getByTestId("productName-testing");
    const productName = "Product Name";
    fireEvent.change(productNameInput, { target: { value: productName } });
    expect(screen.getByTestId("productName-testing").value).toBe(productName);
    const productNameDisplay = screen.getByTestId("productName-testing");
    expect(productNameDisplay).toBeInTheDocument();
  })

  it("should render form and display selected option", () => {
    render(
      <Router>
        <Provider store={store}>
          <Form />
        </Provider>
      </Router>
    );
    const categorySelect = screen.getByTestId("productCategory-testing");
    const categoryOption = "One";
    fireEvent.change(categorySelect, { target: { value: categoryOption } });
    expect(categorySelect.value).toBe(categoryOption);
    const categoryDisplay = screen.getByText(categoryOption);
    expect(categoryDisplay).toBeInTheDocument();
  });


});

it("should show error message when Product Name is empty", async () => {
  render(
    <Router>
      <Provider store={store}>
        <Form />
      </Provider>
    </Router>
  );
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(screen.getByText("Product Name is a required field")).toBeInTheDocument();
  });
});

it("should show error message when Product Name contains invalid characters", async () => {
  render(
    <Router>
      <Provider store={store}>
        <Form />
      </Provider>
    </Router>
  );
  const productNameInput = screen.getByTestId("productName-testing");
  fireEvent.change(productNameInput, { target: { value: `~!@#$%^&*` } });
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(
      screen.getByText("Name must not contain symbols")
    ).toBeInTheDocument();
  });
});

it("should show error message when Product Name exceeds 25 characters", async () => {
  render(
    <Router>
      <Provider store={store}>
        <Form />
      </Provider>
    </Router>
  );
  const productNameInput = screen.getByTestId("productName-testing");
  fireEvent.change(productNameInput, { target: { value: "A".repeat(26) } });
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(
      screen.getByText("Product Name must not exceed 25 characters")
    ).toBeInTheDocument();
  });
});

it("should show error messages when all form fields are empty", async () => {
  render(
    <Router>
      <Provider store={store}>
        <Form />
      </Provider>
    </Router>
  );
  const submitButton = screen.getByText("Submit");
  fireEvent.click(submitButton);
  await waitFor(() => {
    expect(screen.getByText("Product Name is a required field")).toBeInTheDocument();
    expect(
      screen.getByText("Product Category is a required field")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Product Image is a required field")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Product Freshness is a required field")
    ).toBeInTheDocument();
    expect(screen.getByText("Product Price is a required field")).toBeInTheDocument();
  });
});
