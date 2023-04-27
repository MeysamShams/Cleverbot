import { AuthContext } from '@/context/auth.context';
import { Path } from '@/routes/path.routes';
import { ReactElement, useContext } from 'react';
import { GitHub, ArrowUpRight, MessageSquare, User, LogOut, ChevronDown } from 'react-feather'
import {Link} from 'react-router-dom'
import { PlaceholderAvatar } from '../ui/avatar.component';
export const Navbar: React.FC = () => {
  const authCtx=useContext(AuthContext)

  const externalLinks: ReactElement[] = [
    <li key={1}>
      <a
        href="https://github.com/MeysamShams/Cleverbot"
        target={"_blank"}
      >
        <GitHub />
        Github
        <ArrowUpRight size={17} />
      </a>
    </li>,
    <li key={2}>
      <a href="https://chat.openai.com" target={"_blank"}>
        <MessageSquare />
        ChatGPT
        <ArrowUpRight size={17} />
      </a>
    </li>
  ]
  return (
    <div className='px-0'>

    <div className="navbar bg-base-200 shadow-lg  text-sm px-5 py-3 rounded-xl  z-50 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-sm lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {externalLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-link text-white px-2   no-underline hover:no-underline normal-case text-2xl items-center ">
          <img src="/clever.png" className="pr-3 no-animation" alt="logo" width={50} />
          <span className='invisible md:visible '>CleverBot</span>
        </Link>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {externalLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        {
          authCtx.isLoggedIn ?
          <div className='flex items-center gap-x-3'>
              <Link to={Path.User+"/"+Path.Chat}>
              <PlaceholderAvatar name='meysam' />
              </Link>
          <div className='text-xs leading-5'>          
          <span className='flex items-center gap-x-1'><User size={13}></User>Meysam</span>
          <p>Daily Credit: <span className='font-bold'>1</span></p> 
          </div>
            <button onClick={()=>authCtx.logout()} className='btn ml-2 btn-xs text-xs flex items-center gap-x-1  btn-ghost hover:text-error hover:bg-transparent p-0'><LogOut size={20}/></button>
          </div>
          :
          <>
          <Link to={Path.Auth+Path.Login} className="btn btn-ghost mr-1">
            <User size={20} className="pr-1" />
            Login
          </Link>
          <Link to={Path.Auth+Path.Register} className="btn btn-ghost text-white bg-gradient-to-b from-cyan-500 border-0 to-blue-500">
            Register
          </Link>
          </>

        }

      </div>
    </div>
    </div>
  );
};
