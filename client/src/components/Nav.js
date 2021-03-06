import {NavLink} from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-beige-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact
                   activeClassName="text-blue"
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
            Upcoming
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://www.linkedin.com/in/sergey-barchshevskiy/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="https://www.facebook.com/eager.avido/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
          <SocialIcon url="https://github.com/sbarchshevskiy/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }}/>
        </div>
      </div>
    </header>
  )

}