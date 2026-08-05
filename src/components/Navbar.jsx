function Navbar({ logo, menus }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-10 py-5 z-50">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-red-500">
          {logo}
        </h1>

        {/* Menu */}
        <ul className="flex gap-8">
          {menus.map((menu, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-red-500 transition duration-300"
            >
              {menu}
            </li>
          ))}
        </ul>

        {/* Login */}
        <button className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;