import {render, screen} from "@testing-library/react";
import Input from "./Input";
import UseTareas from "../hooks/UseTareas";
function Wrapper() {
  const { addTarea } = UseTareas();
  return <Input add={addTarea} />;
}
describe("<Input />",()=>{
    test("Input is rendering",()=>{
        render(<Wrapper />)
        const inputBtn = screen.getByText("Crear");
        const inputTxt = screen.getByPlaceholderText("Escribe tu nueva tarea");
        expect(inputBtn).toBeInTheDocument();
        expect(inputTxt).toBeInTheDocument();
    });
})