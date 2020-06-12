import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

test('submits correct values', async () => {
  const { container, getByText } = render(<ContactForm />)
  const firstName = container.querySelector('input[name="firstName"]');
  const lastName = container.querySelector('input[name="lastName"]');
  const email = container.querySelector('input[name="email"]');
  const submit = container.querySelector('input[type="submit"]');

  await waitFor(() => {
    fireEvent.change(firstName, {
      target: {
        value: "moc"
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

 // wait for appearance
 await waitFor(() => {
  const pre = getByText("firstName", {exact: false})
  expect(pre).toBeInTheDocument()
},{timeout: 500})

})

test('submits correct values with message and maxLength changed', async () => {
  const { container, getByText } = render(<ContactForm />)
  const firstName = container.querySelector('input[name="firstName"]');
  const lastName = container.querySelector('input[name="lastName"]');
  const email = container.querySelector('input[name="email"]');
  const message = container.querySelector('textarea[name=message]');
  const submit = container.querySelector('input[type="submit"]');


  await waitFor(() => {
    fireEvent.change(firstName, {
      target: {
        value: "Testing"
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
    fireEvent.change(message, {
      target: {
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet convallis nulla, vitae porttitor lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. "
      }
    })
  })

  await waitFor(() => {
    fireEvent.click(submit)
  })

 // wait for appearance
 await waitFor(() => {
  const pre = getByText("Lorem ipsum", {exact: false})
  expect(pre).toBeInTheDocument()
},{timeout: 500})

})