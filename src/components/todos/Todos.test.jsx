import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import Todos from "./Todos";
describe('Todos', () => {
    it('should render Todos heading', () => {
        render(<Todos />)
        expect(screen.getByText('Add Todo lists!')).toBeInTheDocument()
    });
    it('should add todo in the list', () => {
        // render(<Todos />)
        const inputField = screen.getByTestId('todos-input-field')
        expect(inputField).toBeInTheDocument()
        fireEvent.change(inputField, { target: { value: "Buy Shoes" } })
        const addButton = screen.getByTestId('add-button')
        fireEvent.click(addButton)
        expect(screen.getByText(/Buy Shoes/i)).toBeInTheDocument()
    })
});