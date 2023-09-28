import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {

    test('debe agregar una nueva categoria', () => { 
        
        const newCategory = 'Narnia';
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);

        expect(screen.getByText(newCategory)).toBeTruthy();
    });

    test('no debe agregar una categoria repetida', () => {
        const newCategory = 'Caspian';
        render(<GifExpertApp />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: newCategory}});
        fireEvent.submit(form);
        
        expect(screen.getAllByText(newCategory).length).toBe(1);
    });
});