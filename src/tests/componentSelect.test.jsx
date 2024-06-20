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
    const selectElement = screen.getByRole('combobox'); // Busca el elemento select
    expect(selectElement).toBeInTheDocument(); // Asegura que el elemento select esté en el documento
  });
});