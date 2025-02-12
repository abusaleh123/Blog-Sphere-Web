import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/Images/blogger.png';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

const Navbar = () => {
  const { user, theme, toggleTheme } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 



  const navStyle = (() => {
    if (location.pathname === '/') {
      return scrollPosition === 0 
        ? "md:absolute top-0 z-10 md:bg-opacity-40 md:text-white w-11/12" 
        : `sticky top-0 z-50 ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white '}  w-11/12 mx-auto shadow-md`;
    } else if (location.pathname === '/addBlogs') {
      return `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'} w-11/12 mx-auto`;
    } 
    else if(location.pathname === '/allBlogs') {
      return `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname === '/featured') {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname === '/wishList') {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname === '/addReview') {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname === '/all-reviews') {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname === '/register') {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname === '/login') {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname === '/contact') {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname.startsWith('/blogs/') && location.pathname.split('/')[4] === user?._id) {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }
    else if(location.pathname.startsWith('/updateBlog/') && location.pathname.split('/')[4] === user?._id) {
      return  `  ${theme === 'dark' ? 'bg-black shadow-xl shadow-white/10 text-white' : 'bg-white'}  mx-auto`
        
    }

    
    else {
      return "w-11/12 mx-auto"; // Default style for other paths
    }
  })();




  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.error(error);
      });
  };








  return (
    <div className={`w-full  ${navStyle} sticky top-0 z-50 `}>
      <div className={`navbar w-11/12  mx-auto flex justify-center py-6`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost w-fit lg:hidden">
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
              style={{
                background: "linear-gradient(to top, #5350C3 0%, #8784F8 0%)"
              }}
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-white font-bold text-lg rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <NavLink className={'nav'} to={'/'}>Home</NavLink>
              {user && <NavLink className={'nav'} to={'/addBlogs'}>Add Blogs</NavLink>}
              <NavLink className={'nav'} to={'/allBlogs'}>All Blogs</NavLink>
              <NavLink className={'nav'} to={'/featured'}>Featured Blogs</NavLink>
              {user && <NavLink className={'nav'} to={'/wishList'}>WishList</NavLink>}
              {user && <NavLink className={'nav'} to={'/contact'}>Contact Us</NavLink>}
            </ul>
          </div>
          <Link to={'/'} className="flex items-center justify-center gap-0">
            <img className="md:w-12 w-10" src={logo} alt="Logo" />
            <span className="btn btn-ghost text-lg hidden md:inline-flex md:text-xl">BlogSphere</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal md:gap-6 lg:gap-8 px-3 lg:text-lg font-semibold">
            <NavLink className={'nav'} to={'/'}>Home</NavLink>
            {user && <NavLink className={'nav'} to={'/addBlogs'}>Add Blogs</NavLink>}
            <NavLink className={'nav'} to={'/allBlogs'}>All Blogs</NavLink>
            <NavLink className={'nav'} to={'/featured'}>Featured Blogs</NavLink>
            {user && <NavLink className={'nav'} to={'/wishList'}>WishList</NavLink>}
            {user && <NavLink className={'nav'} to={'/contact'}>Contact Us</NavLink>}
          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-2">
        <input onClick={toggleTheme} type="checkbox" className="toggle toggle-info" defaultChecked />
          {user ? (
            <>
          
              <img className="md:w-12 md:h-12 w-8 h-8 object-cover rounded-full" src={user.photoURL} alt="User" />
              <button onClick={handleLogOut} style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)" }} className="btn text-white text-sm md:text-lg font-bold">Log Out</button>
            </>
          ) : (
            <>
              <Link to={'/register'} style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)" }} className="btn text-white w-20 md:w-fit lg:text-lg text-sm font-bold">Register</Link>
              <Link to={'/login'} style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)" }} className="btn text-white md:text-lg text-sm w-14 md:w-fit font-bold">Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
