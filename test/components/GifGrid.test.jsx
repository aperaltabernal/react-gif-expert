import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 

    const category = 'Narnia';

    test('debe mostrar el loading inicialmente', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={ category }/>);
        screen.debug();
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('debe mostrar items cuando se cargan las imagenes del useFetchGifs', () => { 
        const gifs = [
            {
                id: '123',
                title: 'Nuevo',
                url: 'https://nuevo.com'
            },
            {
                id: '456',
                title: 'Otro',
                url: 'https://Otro.com'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={ category }/>);

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});