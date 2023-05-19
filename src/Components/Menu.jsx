import React from "react";
import {Link,NavLink} from 'react-router-dom';
const Menu = ()=>{
    return (
        <>
            {/* page reloads */}
            {/* <a href="/">AboutUs</a>
            <a href="/contact">ContactUs</a>
            <br/> */}
            {/* page dont reload but active tab unknown */}
            {/* <Link to='/'>AboutUs</Link>
            <Link to='/contact'>ContactUs</Link>
            <br/> */}
            {/* active tab we know */}
            <div className="navbar">
            <NavLink activeClassName="active_class" to='/'>About Us</NavLink>
            <NavLink activeClassName="active_class" to='/service'>Service</NavLink>
            <NavLink activeClassName="active_class" to='/search'>Search</NavLink>
            <NavLink activeClassName="active_class" to='/user/subrata/biswas'>User</NavLink>
            <NavLink activeClassName="active_class" to='/contact'>Contact</NavLink>
            </div>
        </>
    );
}
export default Menu;