import {useState} from 'react';
import { useParams } from 'react-router-dom';
import { producto } from "../mocks/item.mock"



const ItemListContainer = ({ greeting }) => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    
    const productList = new Promise((resolve) =>
    setTimeout(() => {
        resolve(producto);
    },2000)
    ); 
    productList.then((data) => {
        if (category) {
            const categories = data.filter(product => product.category === category);
        } else {
            setProducts(data)
        }
    });
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