function Navbar({ title }) {
    return (
        <nav className="bg-black text-white p-5">
            <h1 className="text-2xl font-bold">
                🎬 {title}
            </h1>
        </nav>
    );
}

export default Navbar;