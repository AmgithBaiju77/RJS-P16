
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders the Home page by default", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: "Welcome to Our Website"
    })
  ).toBeInTheDocument();
});

test("navigates to the About Us page", async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.click(
    screen.getByRole("link", { name: "About Us" })
  );

  expect(
    screen.getByRole("heading", { name: "About Us" })
  ).toBeInTheDocument();
});

test("navigates to the Contact Us page", async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.click(
    screen.getByRole("link", { name: "Contact Us" })
  );

  expect(
    screen.getByRole("heading", { name: "Contact Us" })
  ).toBeInTheDocument();
});
