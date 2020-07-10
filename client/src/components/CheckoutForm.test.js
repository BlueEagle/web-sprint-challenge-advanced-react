import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
  render(<CheckoutForm />)

  expect(await screen.findByText(/Checkout Form/i)).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />)

  userEvent.type(screen.getByLabelText(/First Name:/i), 'John') // first name
  userEvent.type(screen.getByLabelText(/Last Name:/i), 'Doe') // first name
  userEvent.type(screen.getByLabelText(/Address:/i), '252 John Deer Blv.') // first name
  userEvent.type(screen.getByLabelText(/City:/i), 'Doeville') // first name
  userEvent.type(screen.getByLabelText(/State:/i), 'The state of affairs') // first name
  userEvent.type(screen.getByLabelText(/Zip:/i), '73526') // first name
});
