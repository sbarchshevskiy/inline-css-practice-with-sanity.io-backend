import { NavLink } from "react-router-dom";

export default function NavBar (){
  return(
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink to="/">
            Sergey
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
          <NavLink to="/post">
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  )

}