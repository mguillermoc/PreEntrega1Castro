import { useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { producto } from "../mocks/item.mock"
import {useState} from 'react';


const ItemDetailContainer = () =>{
    const [item, setItem] = useState(null);
    useEffect(()=>{
        new Promise ((resolve) => setTimeout(()=> resolve(producto[0]), 2000)).then(
            (data) => setItem(data)
        );

    }, []);
    if(!item) {
        return <p>Loading...</p>
    }
    return <ItemDetail item={item}/>
}

export default ItemDetailContainer;