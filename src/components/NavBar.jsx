import { CartWidget } from "./CartWidget";
import "./NavBar.css";

export const NavBar = () => (
<div>
<img className = "imgLogo" src="https://plus.unsplash.com/premium_photo-1707353401897-da9ba223f807?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhdHxlbnwwfHwwfHx8MA%3D%3D" alt="logo" />

  <div className="navBar">
  <ul>
    <a href="">Remeras</a>
  </ul>
  <ul>
    <a href="">Pantalones</a>
  </ul>
  <ul>
    <a href="">Buzos</a>
  </ul>
  
  </div>
  <CartWidget />
</div>
);