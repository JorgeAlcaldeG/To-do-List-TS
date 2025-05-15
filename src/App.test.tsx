import {render, screen, fireEvent, waitFor} from "@testing-library/react";
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

    test("Task is reating without text?",()=>{
        render(<App />);
        const inputBtn = screen.getByText("Crear");
        fireEvent.click(inputBtn);
        expect(screen.getByText("Aún no hay tareas creadas"))
    })

    test("Delete all is working",async ()=>{
        render(<App />)
        const inputBtn = screen.getByText("Crear");
        const inputTxt = screen.getByPlaceholderText("Escribe tu nueva tarea");
        fireEvent.change(inputTxt,{target:{value:'test1'}})
        fireEvent.click(inputBtn)

        fireEvent.change(inputTxt,{target:{value:'test2'}})
        fireEvent.click(inputBtn)

        await waitFor(()=>{
            expect(screen.queryByText("Aún no hay tareas creadas")).not.toBeInTheDocument();
        })

        const delAllBtn = screen.getByText("Borrar todo")

        fireEvent.click(delAllBtn);
        expect(screen.getByText("Aún no hay tareas creadas")).toBeInTheDocument();
    })

    test("Task's stante changes",()=>{
        render(<App />)
        const inputBtn = screen.getByText("Crear");
        const inputTxt = screen.getByPlaceholderText("Escribe tu nueva tarea");

        fireEvent.change(inputTxt, {target:{value:'test1'}});
        fireEvent.click(inputBtn)

        const task = screen.getByText("test1");
        fireEvent.click(task)
        expect(task).toHaveClass("font-bold")
        fireEvent.click(task)
        expect(task).toHaveClass("line-through")
    })
    test("mode button is working",()=>{
        render(<App />)
        const buttons = screen.getAllByRole('button')
        fireEvent.click(buttons[0])
        
        expect(document.documentElement).toHaveClass("dark")
        
        fireEvent.click(buttons[0])

        expect(document.documentElement).not.toHaveClass("dark")
    })
})