import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
    render(<TodoList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("adds a todo", function () {
    const { container, getByText } = render(<TodoList />);
    expect(container.querySelector("li")).not.toBeInTheDocument();
    
    fireEvent.click(getByText("Add New TODO"));
    expect(container.querySelector("li")).toBeInTheDocument();
});

it("removes a todo", function () {
    const { container, getByText } = render(<TodoList />);
    expect(container.querySelector("li")).not.toBeInTheDocument();

    fireEvent.click(getByText("Add New TODO"));
    expect(container.querySelector("li")).toBeInTheDocument();

    fireEvent.click(container.querySelector("i"));
    expect(container.querySelector("li")).not.toBeInTheDocument();
});
