import React from "react"
import Counter from '../Counter'
import {render, fireEvent} from '@testing-library/react'

test("Check title text", () => {
    const {getByTestId}    = render(<Counter/>)
    const title = getByTestId("title")

    expect(title.textContent).toBe("My Counter")
})

test("Check initial input value and onChange functionality", () => {
    const {getByTestId}    = render(<Counter/>)
    const el = getByTestId("input")

    expect(el.value).toBe("1")

    fireEvent.change(el, {
        target  : {
            value: "5"
        }
    })

    expect(el.value).toBe("5")
})

test("Check button increase text", () => {
    const {getByTestId}    = render(<Counter/>)
    const el = getByTestId("increase")

    expect(el.textContent).toBe("+")
})

test("Check button descrease text", () => {
    const {getByTestId}    = render(<Counter/>)
    const el = getByTestId("decrease")

    expect(el.textContent).toBe("-")
})

test("Change input value and click on INCREASE button", () => {
    const {getByTestId}    = render(<Counter/>)
    const input     = getByTestId("input")
    const button    = getByTestId("increase")
    const value     = getByTestId("value")

    expect(value.textContent).toBe("0")
    expect(input.value).toBe("1")

    fireEvent.change(input, {
        target: {
            value   : "8"
        }
    })

    expect(input.value).toBe("8")

    fireEvent.click(button)

    expect(value.textContent).toBe("8")

    fireEvent.click(button)
    fireEvent.click(button)

    expect(value.textContent).toBe("24")
})

test("Change input value and click on DECREASE button", () => {
    const {getByTestId}    = render(<Counter/>)
    const input     = getByTestId("input")
    const button    = getByTestId("decrease")
    const value     = getByTestId("value")

    expect(value.textContent).toBe("0")
    expect(input.value).toBe("1")

    fireEvent.change(input, {
        target: {
            value   : "8"
        }
    })

    expect(input.value).toBe("8")

    fireEvent.click(button)

    expect(value.textContent).toBe("-8")

    fireEvent.click(button)
    fireEvent.click(button)

    expect(value.textContent).toBe("-24")
})

test("Mixing event INCREASE and DECREASE button", () => {
    const {getByTestId}    = render(<Counter/>)
    const input     = getByTestId("input")
    const buttonInc    = getByTestId("increase")
    const buttonDec    = getByTestId("decrease")
    const value     = getByTestId("value")

    expect(value.textContent).toBe("0")
    expect(input.value).toBe("1")

    fireEvent.click(buttonInc)
    fireEvent.click(buttonInc)
    fireEvent.click(buttonInc)
    fireEvent.click(buttonInc)

    expect(value.textContent).toBe("4")

    fireEvent.click(buttonDec)
    fireEvent.click(buttonDec)

    expect(value.textContent).toBe("2")
})

test('Check className for coloring value', () => {
    const {getByTestId}    = render(<Counter/>)
    const input     = getByTestId("input")
    const buttonInc    = getByTestId("increase")
    const buttonDec    = getByTestId("decrease")
    const value     = getByTestId("value")

    fireEvent.change(input, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(buttonInc)
    fireEvent.click(buttonInc)
    fireEvent.click(buttonInc)

    expect(value.className).toMatch(/green/i)

    fireEvent.change(input, {
        target: {
            value: "300"
        }
    })

    fireEvent.click(buttonDec)
    fireEvent.click(buttonDec)

    expect(value.className).toMatch(/red/i)
})
