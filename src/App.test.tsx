import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

describe("<App />",()=>{
    test("Task is creating correctly",async()=>{
        render(<App />)
        const inputBtn = screen.getByText("Crear");
        const inputTxt = screen.getByPlaceholderText("Escribe tu nueva tarea");
        fireEvent.change(inputTxt, {target:{value: "testing"}})
        fireEvent.click(inputBtn);

        const tareaTxt = await screen.findByText("testing");
        const buttons = await screen.findAllByRole("button", { name: /borrar/i });
        // console.log(buttons)
        const tareaBtn = buttons[1];
        expect(tareaTxt).toBeInTheDocument();
        expect(tareaBtn).toBeInTheDocument();

        fireEvent.click(tareaBtn)
        expect(screen.queryByText('testing')).not.toBeInTheDocument();
    })
})