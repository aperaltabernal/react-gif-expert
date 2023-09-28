import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory />', () => { 

    test('debe cambiar el valor de la caja de texto', () => { 
        
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');
        
        fireEvent.input(input, {target: {value: 'Hola'}});
        
        expect(input.value).toBe('Hola');
     });

    test('debe llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Hola';
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        screen.debug();

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });


    test('no debe llamar onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
 });