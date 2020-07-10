import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
  const screen = render(<CheckoutForm />)

  expect(await screen.findByText(/Checkout Form/i)).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {

});
