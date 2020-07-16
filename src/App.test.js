import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Aumni Frontend Coding Challenge/i);
  expect(headerElement).toBeInTheDocument();
});
