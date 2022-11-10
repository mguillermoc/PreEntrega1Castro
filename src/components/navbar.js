import logo from '../logo.svg';
import CartWidget from "./CartWidget"

function navbar(){
    return(
        <div className="navbar1" id="nv1">
        <div className="logo" id="nv2">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="menu1" id="nv3">
            <ul>
                <li>Test 1</li>
                <li>Test 2</li>
                <li>Test 3</li>
            </ul>
        </div>
        <CartWidget/>
        </div>
    )
}
export default navbar;