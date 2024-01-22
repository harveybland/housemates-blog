import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import Avatar from "../Avatar";

describe("Avatar Component", () => {
  it("renders without crashing", () => {
    const name = "Harvey";
    render(<Avatar name={name} />);

    const avatarElement = screen.getByText(name.slice(0, 1).toUpperCase());

    expect(avatarElement).toBeInTheDocument();
  });
});
