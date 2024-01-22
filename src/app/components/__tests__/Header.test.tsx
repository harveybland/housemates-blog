import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../header/Header";

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(<Header />);
    const blogTextElement = screen.getByText("Blog");

    expect(blogTextElement).toBeInTheDocument();
  });
});
