import React from "react";
import { render, fireEvent, waitFor, queryByText } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

test('submits correct values', async () => {
  const { container } = render(<ContactForm />)
  const firstName = container.querySelector('input[name="firstName"]');
  const lastName = container.querySelector('input[name="lastName"]');
  const email = container.querySelector('input[name="email"]');
  const submit = container.querySelector('input[type="submit"]');

  await waitFor(() => {
    fireEvent.change(firstName, {
      target: {
        value: "mockname"
      }
    })
  })

  await waitFor(() => {
    fireEvent.change(lastName, {
      target: {
        value: "Henderson"
      }
    })
  })

  await waitFor(() => {
    fireEvent.change(email, {
      target: {
        value: "mock@email.com"
      }
    })
  })

  await waitFor(() => {
    fireEvent.click(submit)
  })
})