import { useEffect, useState } from 'react';
import { getProduct, getProducts } from '../service/Api'; //Importamos las funciones para obtener los products de la API
import { TextField } from '@mui/material'; //Importamos el componente TextField de mui

const ProductList = () => {
    //Estados para almacenar la listas de productos y producto que va a estar seleccionado
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState();

    //Función asíncrona para obtener y establecemos la lista de productos
    const fetchProducts = async () => {
        const productsData = await getProducts(); //Llama a la función para obtener la lista de productos
        setProducts(productsData); //Actualiza el estado con los datos de los productos obtenidos
    };

    // Función asíncrona para obtener y establecemos un producto por su id
    const fetchProduct = async (id) => {
        const productData = await getProduct(id); //Llamamos a la función para obtener un p`roducto por su id
        setProduct(productData); //Actualiza el estado con el datos del productos obtenido
        console.log(productData)
    };
    
//Llamamos a fetch products la primera vez que montamos el componente
    useEffect(() => {
        fetchProducts()
    }, []);

    //Componente renderizado
    return (
        <div>
        <h1>Product List</h1>
        <button onClick={() => fetchProduct(2)}>Click me</button>
        <ul>
            {products.map(product => (
                <li title={product.title} key={product.id}>{product.title}</li>
            ))}
        </ul>
        {product && <TextField label={product?.title} />}
        </div>
    );
};

export default ProductList;
