const NavLinks = () => {
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>

      <li>
        <a href="#about">About</a>
      </li>

      <li>
        <a href="#team">Team</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
};

export default function Navbar({
  updateTheme,
  theme,
}: {
  updateTheme(theme: string): void;
  theme: string;
}) {
  return (
    <div
      className="navbar bg-base-100  sticky top-0"
      style={{
        width: "90%",
        margin: "auto",
        borderBottom: "1px solid lightgray",
      }}
    >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>

        <a className="btn btn-ghost normal-case text-xl">Encourage</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn rounded-full text-lg"
          onClick={() => {
            console.log("clicked");
            theme === "light" ? updateTheme("dark") : updateTheme("light");
          }}
        >
          {theme === "light" ? (
            <i className="bi-brightness-high"></i>
          ) : (
            <i className="bi bi-moon"></i>
          )}
        </a>
      </div>
    </div>
  );
}
