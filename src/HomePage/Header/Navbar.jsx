import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/blogger.png'


const Navbar = () => {
    return (
        <div className="w-full"> 
        <div className="navbar lg:w-11/12 mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
        <Link to={'/'} className="flex items-center">
            <img className="w-12" src={logo} alt="" />
        <a className="btn btn-ghost text-xl">BlogSphere</a>
        </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-3 lg:text-lg font-semibold">
        <NavLink  className={'nav'}  to={'/'}>Home</NavLink>
        <NavLink className={'nav'}  to={'/addBlogs'}>Add Blogs</NavLink>
        <NavLink  className={'nav'} to={'/allBlogs'}>All Blogs</NavLink>
        <NavLink  className={'nav'} to={'/featured'}>Featured Blogs</NavLink>
        <NavLink className={'nav'}  to={'/wishList'}>WishList</NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)"}} className="btn text-white lg:text-lg font-bold">Register</button>
          <button style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)"}} className="btn text-white lg:text-lg font-bold">Login</button>
        </div>
      </div>
      </div>
    );
};

export default Navbar;