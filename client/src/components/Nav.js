import {NavLink} from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact
                   activeClassName="text-white"
                   className="inflex-flex
                   items-center
                   py-6
                   x-3
                   mr-4
                   text-red-100
                   hover:text-green-800
                   text-4xl
                   font-bold
                   cursive
                   tracking-widest"
          >
            Sergey
          </NavLink>
          <NavLink to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex
            items-center
            py-3
            px-3
            my-6
            rounded
            text-red-200
            hover:text-green-800
            "
          >
            About
          </NavLink>
          <NavLink to="/projects"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex
            items-center
            py-3
            px-3
            my-6
            rounded
            text-red-200
            hover:text-green-800
            "
          >
            Projects
          </NavLink>
          <NavLink to="/post"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex
            items-center
            py-3
            px-3
            my-6
            rounded
            text-red-200
            hover:text-green-800
            "
          >
            Blog
          </NavLink>
        </nav>
        <div>
          
        </div>
      </div>
    </header>
  )

}