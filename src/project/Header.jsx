import React from "react";
import { Link,NavLink } from "react-router-dom";
import '../project/header.css'
import logo from '../Images/Project_logo-removebg-preview.png'


const Header = () => {
  const activelink={
    color:'#f6ad55'
  }
  const notActive={
    color:"#fff"
  }
    return ( <>
        
        <>
        <nav class="navbar bg-body-tertiary shadow fixed-top px-5 py-2">
  <div class="container-fluid align-items-center d-flex">
            <div>
            <div>
                <a class="navbar-brand"><Link to="/"><img src={logo} /></Link></a>
            </div>

        <ul class=" justify-content-around d-flex w-50  navigations">
          <span class="">
            <a class="nav-link active" aria-current="page"><NavLink to="/" style={({isActive})=>(isActive?activelink:notActive)}> Home</NavLink></a>
          </span>
          <span class="nav-item">
            <a class="nav-link" ><NavLink to="/about" style={({isActive})=>(isActive?activelink:undefined)}>About</NavLink></a>
          </span>
          <span class="nav-item">
            <a class="nav-link" ><NavLink to="/skills" style={({isActive})=>(isActive?activelink:undefined)}>Skills</NavLink></a>
          </span>
          <span class="nav-item">
            <a class="nav-link" ><NavLink to="/project" style={({isActive})=>(isActive?activelink:undefined)}>Projects</NavLink></a>
          </span>

          <span class="nav-item">
            <a class="nav-link" ><NavLink to="/contact" style={({isActive})=>(isActive?activelink:undefined)}>Contact</NavLink></a>
          </span>
          
        </ul>
            </div>

    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page"><NavLink to="/" style={({isActive})=>(isActive?activelink:undefined)}>Home</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><NavLink to="/about" style={({isActive})=>(isActive?activelink:undefined)} >About</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><NavLink to="/skills" style={({isActive})=>(isActive?activelink:undefined)} >Skills</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><NavLink to="/project" style={({isActive})=>(isActive?activelink:undefined)} >Projects</NavLink></a>
          </li>
          <li class="nav-item">
            <a class="nav-link"><NavLink to="/contact" style={({isActive})=>(isActive?activelink:undefined)}>Contact</NavLink ></a>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</nav>
        </>

    </>);
}
 
export default Header;