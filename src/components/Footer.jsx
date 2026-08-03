function Footer({ brand, links, copyright }) {
  return (
    <footer className="bg-slate-900 text-white px-10 py-8">

      {/* Baris Atas */}
      <div className="flex justify-between items-start">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-red-500">
            {brand}
          </h2>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>

          <ul className="space-y-2">
            {links.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-red-500"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>

          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Help Center</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <ul className="space-y-2">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>

      {/* Garis */}
      <hr className="my-8 border-gray-700" />

      {/* Copyright */}
      <p className="text-center text-gray-400">
        {copyright}
      </p>

    </footer>
  );
}

export default Footer;