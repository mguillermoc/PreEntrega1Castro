import { Layout } from "../components/Layout";
import { useParams } from "react-router-dom";   
import Item from "../components/item";
import {producto} from "../mocks/item.mock"
import ItemListContainer from "../components/ItemListContainer";


export const CategoryView =() => {
    const { category } = useParams();
    const categories = producto.filter(product => product.category === category);
    return (
        <Layout>
        <ItemListContainer/>
        {categories.map((producto) =>(
            <Item product={producto}/>
        ))}
        </Layout>
    );
};

export default CategoryView;


