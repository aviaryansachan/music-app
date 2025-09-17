import { NavLink } from "react-router"
import { Outlet } from "react-router"

export default function NavBar() {
  return ( <>
    <div className="nav">
        <div className="logo"> RN World</div>
    <ul>
        <li>
            <NavLink to='/'> Home</NavLink>
        </li>
        <li>
            <NavLink to='/login'> Login</NavLink>
        </li>
    </ul>
    </div>
    <Outlet />
    </>
  )
}
