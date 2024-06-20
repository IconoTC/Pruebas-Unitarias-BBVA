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
});