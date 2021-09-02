import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text in link (will fail)", () => {
  render(<App />);
  const linkElement = screen.getByText(/this will fail/i);
  expect(linkElement).toBeInTheDocument();
});
