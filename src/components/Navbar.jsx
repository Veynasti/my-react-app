function Navbar({ logo, menus }) {
  return (
    <nav className="bg-black text-white px-10 py-5 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-red-500">
        {logo}
      </h1>

      {/* Menu */}
      <ul className="flex gap-8">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-red-500 transition"
          >
            {menu}
          </li>
        ))}
      </ul>

      {/* Login */}
      <button className="bg-red-600 px-5 py-2 rounded-lg hover:bg-red-700 transition">
        Login
      </button>

    </nav>
  );
}

export default Navbar;