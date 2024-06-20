import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from '../pages/Home';

describe('Test Home component', () => {

    beforeEach(() => {
        vi.spyOn(console, 'log').mockImplementation(() => {});
        vi.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
        window.alert.mockRestore();
    });

    test('renders sign-in form', () => {
        render(<Home />);
        // Verificar que los elementos del formulario estén en el documento
        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password input/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
        expect(screen.getByText(/forgot password\?/i)).toBeInTheDocument();
        expect(screen.getByText(/don't have an account\? sign up/i)).toBeInTheDocument();
    });

    test('Test remember me checkbox', () => {
      render(<Home />);
      // Obtener el checkbox
      const rememberMeCheckbox = screen.getByLabelText(/remember me/i);
      // Verificar que el checkbox está inicialmente desmarcado
      expect(rememberMeCheckbox.checked).toBe(false);
      // Simular el marcado del checkbox
      fireEvent.click(rememberMeCheckbox);
      // Verificar que el checkbox está marcado
      expect(rememberMeCheckbox.checked).toBe(true);
      // Simular el desmarcado del checkbox
      fireEvent.click(rememberMeCheckbox);
      // Verificar que el checkbox está desmarcado
      expect(rememberMeCheckbox.checked).toBe(false);
  });
  });