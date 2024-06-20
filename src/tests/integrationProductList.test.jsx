import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import '@testing-library/jest-dom';
import ProductList from '../pages/ProductList';
import { productsData, productData } from '../constant';

describe('ProductList', () => {
    // Antes de todos los tests, espía la función console.log y la sustituye por una función vacía
    beforeAll(() => {
        vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    // Después de todos los tests, restaura console.log a su implementación original
    afterAll(() => {
        console.log.mockRestore();
    });

    // Test para renderizar la lista de productos
    it('renders product list', async () => {
        render(<ProductList />);
        // Espera a que los elementos se rendericen
        await waitFor(() => {
            const items = screen.getAllByRole('listitem');
            expect(items).toHaveLength(20); // Verifica que haya 20 elementos en la lista
            // Verifica que los primeros dos elementos contengan los textos especificados
            expect(items[0]).toHaveTextContent('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
            expect(items[1]).toHaveTextContent('Mens Casual Premium Slim Fit T-Shirts');
        });
    });
  });