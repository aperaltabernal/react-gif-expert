import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Pruebas en <GifItem />', () => {

    const title = 'CS Lewis';
    const url = 'https://';
    
    test('debe hacer match con el snapshot', () => {

        const { container }  = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
        render(<GifItem title={title} url={url} />);
        //  screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe mostrar el titulo', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
});