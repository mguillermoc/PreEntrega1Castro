import Navbar from "../components/navbar";

export const Layout = ({ children }) => {
    return <div className="App">
        <Navbar/>
        { children }
    </div>
    
}