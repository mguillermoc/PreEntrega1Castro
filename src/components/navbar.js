import logo from '../logo.svg';
import { router } from '../router';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


function navbar(){
    return(
        <div className="navbar1" id="nv1">
        <div className="logo" id="nv2">
        <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        </div>
        <div className="menu1" id="nv3">
            <Link to='/'> Home</Link>
            <Link to='/category/random1'> Random 1</Link>
            <Link to='/category/random2'> Random 2</Link>
            </div>
        <CartWidget/>
        </div>
    )
}
export default navbar;