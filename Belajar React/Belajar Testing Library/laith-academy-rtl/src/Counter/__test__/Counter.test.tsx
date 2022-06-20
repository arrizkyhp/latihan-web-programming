import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
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

test("change input value works correctly", () => {
    render(<Counter />)

    const inputEl = screen.getByTestId("counter-input") as HTMLInputElement

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    expect(inputEl.value).toBe("5")

})

test("click on + button add 1 to counter", () => {
    render(<Counter />)

    const addButton = screen.getByTestId("btn-add")
    const counterEl = screen.getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(addButton)

    expect(counterEl.textContent).toBe("1")
})

test("click on - button subtract 1 to counter", () => {
    render(<Counter />)

    const subtractButton = screen.getByTestId("btn-subtract")
    const counterEl = screen.getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(subtractButton)

    expect(counterEl.textContent).toBe("-1")
})

test("change input value then click add button works correctly", () => {
    render(<Counter />)

    const addButton = screen.getByTestId("btn-add")
    const counterEl = screen.getByTestId("counter")
    const inputEl = screen.getByTestId("counter-input") as HTMLInputElement

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addButton)

    expect(counterEl.textContent).toBe("5")
})

test("change input value then click subtract button works correctly", () => {
    render(<Counter />)

    const subtractButton = screen.getByTestId("btn-subtract")
    const counterEl = screen.getByTestId("counter")
    const inputEl = screen.getByTestId("counter-input") as HTMLInputElement

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subtractButton)

    expect(counterEl.textContent).toBe("-5")
})

test("adding and subtracting leads to correct counter number", () => {
    render(<Counter />)

    const addButton = screen.getByTestId("btn-add")
    const counterEl = screen.getByTestId("counter")
    const inputEl = screen.getByTestId("counter-input") as HTMLInputElement
    const subtractButton = screen.getByTestId("btn-subtract")

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(subtractButton)
    fireEvent.click(subtractButton)

    expect(counterEl.textContent).toBe("30")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(subtractButton)

    expect(counterEl.textContent).toBe("45")
})

test("counter contains correct className", () => {
    render(<Counter />)

    const counterEl = screen.getByTestId("counter")
    const inputEl = screen.getByTestId("counter-input") as HTMLInputElement
    const subtractButton = screen.getByTestId("btn-subtract")
    const addButton = screen.getByTestId("btn-add")

    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addButton)
    
    expect(counterEl.className).toBe("")
    
    fireEvent.click(addButton)
    
    expect(counterEl.className).toBe("counter--green")
    
    fireEvent.click(subtractButton)
    fireEvent.click(subtractButton)
    
    expect(counterEl.className).toBe("")
    
    fireEvent.click(subtractButton)
    fireEvent.click(subtractButton)

    expect(counterEl.className).toBe("counter--red")

})