import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Home } from '../pages/Home';

describe('Home component', () => {
    beforeAll(() => {
        vi.spyOn(console, 'log').mockImplementation(() => {});
        vi.spyOn(window, 'alert').mockImplementation(() => {});
    });

    afterAll(() => {
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
  });