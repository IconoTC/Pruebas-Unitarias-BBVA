import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom';
import { Select } from "../components/Select"; // Importa el componente Select a testear

const animals = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "lion", label: "Lion" },
  { value: "tiger", label: "Tiger" },
  { value: "elephant", label: "Elephant" },
  { value: "giraffe", label: "Giraffe" },
  { value: "zebra", label: "Zebra" },
  { value: "penguin", label: "Penguin" },
  { value: "panda", label: "Panda" },
  { value: "koala", label: "Koala" },
];

describe("Test Select component", () => {
  test('renders Select correctly', () => {
    render(<Select options={animals}/>); // Renderiza el componente Select con las opciones de animales
    const selectElement = screen.getByRole('combobox'); // Busca el elemento select por el rol combobox
    expect(selectElement).toBeInTheDocument(); // Asegura que el elemento select esté en el documento
  });

  test("should render with default value selected", async () => {
    const value = 'cat';
    render(<Select options={animals} value={value}/>); // Renderiza el componente Select con un valor predeterminado 'cat'
    const select = screen.getByRole("combobox"); // Obtiene el elemento select
    expect(select).toBeInTheDocument(); // Asegura que el elemento select esté en el documento
    expect(screen.getByText('Cat').selected).toBe(true); // Asegura que la opción 'Cat' esté seleccionada
  });
});