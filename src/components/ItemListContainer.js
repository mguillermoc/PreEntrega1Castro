import {useState} from 'react';
import { producto } from "../mocks/item.mock"



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const productList = new Promise((resolve) =>
    setTimeout(() => {
        resolve(producto);
    },3000)
    ); 
    productList.then((data) => setProducts(data));
    return (
        <div>
            <h2>{greeting}</h2>
            <ul className="flex-block">
                
                {products.map((product) =>
                <div className="caja">
                <img src={product.img} className='img-item'/>    
                <li className="li-caja">{product.name}</li>
                <p className="p-caja">{product.description}</p>
                </div>
                )}
            </ul>
        </div>
    )
};

export default ItemListContainer;