export const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 w-full p-3 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <li>
              <a href="https://chat.openai.com" target={"_blank"}>
                ChatGPT | OpenAi
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MeysamShams/Cleverbot"
                target={"_blank"}
              >
                Github Repository
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl text-white">
          CleverBot
        </a>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="https://chat.openai.com" target={"_blank"}>
              ChatGPT | OpenAi
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MeysamShams/Cleverbot"
              target={"_blank"}
            >
              Github Repository
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost normal-case mr-1">Login</a>
        <a className="btn btn-ghost normal-case text-white bg-gradient-to-r from-cyan-500 to-blue-500">
          Register
        </a>
      </div>
    </div>
  );
};
