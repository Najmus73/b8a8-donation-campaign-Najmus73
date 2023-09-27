import { Link, NavLink } from "react-router-dom";
import '../FullSiteCss/FullSiteCss.css'


const NavBar = () =>{
    return (
      <div className="pt-10">
        <nav className="flex justify-between text-center" id="navBar">
          <div><Link to="/"><img className="w-36" src="https://i.ibb.co/Nx0jk6p/Logo.png"></img></Link></div>
          <ul className="flex gap-10"> 
            <li>
            <NavLink
               to="/"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>
               Home
            </NavLink>
            </li>
            <li>
            <NavLink
               to="/donation"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>
               Donation
            </NavLink>
            </li>
            <li>
            <NavLink
               to="/statistics"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-red-600 underline" : "" }>
               Statistics
            </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default NavBar;