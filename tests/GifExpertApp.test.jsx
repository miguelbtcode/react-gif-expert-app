import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('Debe hacer match con el snapshoot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar el título de GifExpertApp', () => {
    render(<GifExpertApp />);

    const heading = screen.getAllByRole('heading', { level: 1 })[0];

    expect(heading.textContent).toBe('GifExpertApp');
  });

  test('Debe mostrar las categorías iniciales', () => {
    render(<GifExpertApp />);

    // Verifica que hay exactamente 2 categorías en el DOM
    const categories = screen.getAllByRole('heading', { level: 3 });

    expect(categories.length).toBe(2);
    expect(categories[0].textContent).toBe('One Punch');
    expect(categories[1].textContent).toBe('Dragon Ball');
  });
});
