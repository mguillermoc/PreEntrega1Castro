import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import CategoryView from "../views/category"



export const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
    },
    {
        path:'/category/:id',
        element: <CategoryView />,
    },
    // {},
])