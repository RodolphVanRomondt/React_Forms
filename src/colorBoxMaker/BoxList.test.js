import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("adds a box", function () {
    const { getByText, queryByText } = render(<BoxList />);
    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.click(getByText("Add New BOX"));
    expect(queryByText("X")).toBeInTheDocument();
});

it("removes a box", function () {
    const { getByText, queryByText } = render(<BoxList />);
    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.click(getByText("Add New BOX"));
    expect(queryByText("X")).toBeInTheDocument();

    fireEvent.click(getByText("X"));
    expect(queryByText("X")).not.toBeInTheDocument();
});
