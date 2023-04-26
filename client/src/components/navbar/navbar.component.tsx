import { Path } from '@/routes/path.routes';
import { ReactElement } from 'react';
import { GitHub, ArrowUpRight, MessageSquare, User } from 'react-feather'
import {Link} from 'react-router-dom'
export const Navbar: React.FC = () => {

  const externalLinks: ReactElement[] = [
    <li>
      <a
        href="https://github.com/MeysamShams/Cleverbot"
        target={"_blank"}
      >
        <GitHub />
        Github
        <ArrowUpRight size={17} />
      </a>
    </li>,
    <li>
      <a href="https://chat.openai.com" target={"_blank"}>
        <MessageSquare />
        ChatGPT
        <ArrowUpRight size={17} />
      </a>
    </li>
  ]
  return (
    <div className="navbar bg-base-100  top-0 w-full sm:p-1 lg:p-5 z-50">
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
        <a className="btn btn-link text-white px-2    no-underline hover:no-underline normal-case text-2xl items-center ">
          <img src="https://cdn-icons-png.flaticon.com/512/2814/2814650.png" className="pr-3 no-animation" alt="logo" width={50} />
          CleverBot
        </a>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {externalLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <Link to={Path.Auth+Path.Login} className="btn btn-ghost normal-case mr-1">
          <User size={20} className="pr-1" />
          Login
        </Link>
        <Link to={Path.Auth+Path.Register} className="btn btn-ghost normal-case text-white bg-gradient-to-r from-cyan-500 to-blue-500">
          Register
        </Link>
      </div>
    </div>
  );
};
