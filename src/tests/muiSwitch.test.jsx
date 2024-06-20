import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from '@mui/material';
import { useState } from 'react';

describe("Test SwitchMui", () => {
  test('renders Switch correctly', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('checkbox'); // Busca el elemento Switch por su rol de checkbox
    expect(switchElement).toBeInTheDocument(); // Verifica que el Switch está en el documento
  });

    //verificará si se llama a la propiedad onChange cuando cambia el estado de algún componente
    test('calls onChange prop when state changes', () => { 
      const handleChange = vi.fn(); // Crea una función mock para el evento onChange
      render(<Switch onChange={handleChange} />); // Renderiza el Switch con el evento onChange
      const switchElement = screen.getByRole('checkbox'); // Busca el elemento Switch por su rol de checkbox
      fireEvent.click(switchElement); // Simula un clic en el Switch
      expect(handleChange).toHaveBeenCalledTimes(1); // Verifica que la función handleChange se llamó una vez
    });
});