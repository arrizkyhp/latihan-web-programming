import Counter from "../Counter";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

test("header renders with correct text", () => {
    render(<Counter />)

    const headerEl = screen.getByTestId("header")

    expect(headerEl.textContent).toBe("My Counter")
})

test("counter intially start at 0", () => {
    render(<Counter />)

    const counterEl = screen.getByTestId("counter")

    expect(counterEl.textContent).toBe("0")
})

test("input contains intial value of 1", () => {
    render(<Counter />)

    const inputEl = screen.getByTestId("counter-input") as HTMLInputElement

    expect(inputEl.value).toBe("1")
})

test("add button renders with +", () => {
    render(<Counter />)

    const addButton = screen.getByTestId("btn-add")

    expect(addButton.textContent).toBe("+")

})

test("subtract button renders with -", () => {
    render(<Counter />)

    const subtractButton = screen.getByTestId("btn-subtract")

    expect(subtractButton.textContent).toBe("-")

})