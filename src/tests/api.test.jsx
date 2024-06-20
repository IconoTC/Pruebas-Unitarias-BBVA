import { describe, test, expect, expectTypeOf } from 'vitest'; // Importa las funciones de vitest para describir pruebas, ejecutar pruebas y realizar afirmaciones
import { getProducts, getProduct } from '../service/Api'; // Importa las funciones de API para obtener productos desde un servicio externo
import { productsData, productData } from '../constant'; // Importa datos constantes de productos y un producto específico para comparación

describe('API functions', () => {

    test('should fetch products from the real API', async () => {
        // Prueba para verificar la obtención de la lista de productos desde el API
        const result = await getProducts(); // Obtiene la lista de productos usando la función getProducts del servicio API
        // Afirmaciones
        expect(Array.isArray(result)).toBe(true); // Verifica que el resultado sea un array
        expect(Array.isArray(productsData)).toBe(true); // Verifica que productsData también sea un array (constante local)
        expect(result).toHaveLength(20); // Verifica que el resultado tenga una longitud de 20 productos
        expect(productsData).toHaveLength(20); // Verifica que productsData tenga una longitud de 20 productos
        expect(result).toEqual(productsData); // Verifica que el resultado obtenido sea igual a la constante local productsData
    });

    test('should fetch a single product from the real API', async () => {
      // Prueba para verificar la obtención de un producto individual desde el API
      const result = await getProduct(2); // Obtiene el producto con ID 2 usando la función getProduct del servicio API
      // Afirmaciones
      expect(typeof productData).toEqual('object'); // Verifica que productData sea de tipo objeto
      expect(typeof result).toEqual('object'); // Verifica que el resultado obtenido sea de tipo objeto
      expect(result).toEqual(productData); // Verifica que el resultado obtenido sea igual a la constante local productData
      expect(result).toEqual(  {
          "id": 2,
          "title": "Mens Casual Premium Slim Fit T-Shirts ",
          "price": 22.3,
          "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          "rating": {
            "rate": 4.1,
            "count": 259
            }
          }) 
          expect(result.price).toEqual(22.3);
          expect(typeof result.price).toEqual('number');
          const title = result.title
          expect(title).toEqual("Mens Casual Premium Slim Fit T-Shirts ");
          expect(title).toContain("Mens Casual Premium");
          expect(typeof title).toEqual('string');
          expectTypeOf(result).toHaveProperty("title").toBeNumber();
          // Esta última aserción {♣expectTypeOf} no está funcionando correctamente, no verifica que la pripiedad title sea un string, os lo dejo aquí por si quereis probar con esta aserción
    });
  });