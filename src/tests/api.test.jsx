import { describe, it, expect } from 'vitest'; // Importa las funciones de vitest para describir pruebas, ejecutar pruebas y realizar afirmaciones
import { getProducts, getProduct } from '../service/Api'; // Importa las funciones de API para obtener productos desde un servicio externo
import { productsData, productData } from '../constant'; // Importa datos constantes de productos y un producto específico para comparación

describe('API functions', () => {
  
    it('should fetch products from the real API', async () => {
        // Prueba para verificar la obtención de la lista de productos desde el API
        const result = await getProducts(); // Obtiene la lista de productos usando la función getProducts del servicio API
        // Afirmaciones
        expect(Array.isArray(result)).toBe(true); // Verifica que el resultado sea un arreglo
        expect(Array.isArray(productsData)).toBe(true); // Verifica que productsData también sea un arreglo (constante local)
        expect(result).toHaveLength(20); // Verifica que el resultado tenga una longitud de 20 productos
        expect(productsData).toHaveLength(20); // Verifica que productsData tenga una longitud de 20 productos
        expect(result).toEqual(productsData); // Verifica que el resultado obtenido sea igual a la constante local productsData
    });
  });