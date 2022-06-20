import Counter from "../Counter";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'

test("header renders with correct text", () => {
    render(<Counter />)

    const headerEl = screen.getByTestId("header")

    expect(headerEl.textContent).toBe("Counter")
})