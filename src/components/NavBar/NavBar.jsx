import { Link, NavLink } from "react-router-dom";


const NavBar = () =>{
    return (
      <div className="pt-10">
        <nav className="flex justify-between text-center">
          <div><Link to="/"><img className="w-36" src="./src/assets/Logo.png"></img></Link></div>
          <ul className="flex gap-10"> 
            <li>
            <NavLink
               to="/"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-red-300 underline" : "" }>
               Home
            </NavLink>
            </li>
            <li>
            <NavLink
               to="/donation"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-red-300 underline" : "" }>
               Donation
            </NavLink>
            </li>
            <li>
            <NavLink
               to="/statistics"
               className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-red-300 underline" : "" }>
               Statistics
            </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )
}

export default NavBar;