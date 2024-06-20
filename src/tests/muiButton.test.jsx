import { afterEach, beforeEach, describe, expect, test, vi, beforeAll, afterAll} from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '@mui/material';

describe ('Test button Mui', () => {
  
 //Se ejecuta una sola vez antes del primer test
  beforeAll (() => {

  });

// Se ejecuta antes de cada test
  beforeEach(() => {
     //Hacemos una escucha de los console log antes de cada test
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  // Se ejecuta después de cada test
  afterEach(() => {
    //Paramos la escucha de los console log después de cada test
    console.log.mockRestore();
  });

  //Se ejecuta una sola vez después del último test
  afterAll (() => {
  });

 

  test('render button Mui correct text', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
  })

  test('when button is clicked prop Onclick shoul be called', () => {
    //Ahora el console.log sólo aparece cuando se llama a la funcion mock vi.fn
    const handleClick = vi.fn(() => console.log('click')); 
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /Click me/i });
    expect(button).toBeInTheDocument();
    expect(console.log).not.toHaveBeenCalledWith('click')
    expect(console.log).toHaveBeenCalledTimes(0);
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('click')
    expect(console.log).toHaveBeenCalledTimes(1);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith('click')
    expect(console.log).toHaveBeenCalledTimes(2);
  })

  test('renders MuiButton with correct styles', () => {
    render(<Button fullWidth style={{ backgroundColor: 'blue' }}>Styled Button</Button>);
    const button = screen.getByRole('button', { name: /styled button/i });
    expect(button).toBeInTheDocument();
    expect(button.style.backgroundColor).toBe('blue');
    expect(button).toHaveStyle('background-color: rgb(0, 0, 255)');
    expect(button).toHaveStyle('background-color: #0000ff');
    expect(button).toHaveStyle('width: 100%')
  })

  test('does not call onClick prop when MuiButton is disabled', () => {
    const handleClick = vi.fn(() => console.log('click'));
    render(<Button onClick={handleClick} disabled>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(console.log).not.toHaveBeenCalledWith('click')
    expect(console.log).toHaveBeenCalledTimes(0);
  });
})