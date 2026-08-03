import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {

  const menus = [
    "Home",
    "Movies",
    "Series",
    "About"
  ];

  const footerLinks = [
    "About",
    "Movies",
    "Series",
    "Contact"
  ];

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar
        logo="MovieFlix"
        menus={menus}
      />

      <main className="flex-1">

        <Hero
          title="Unlimited Movies, TV Shows, and More"
          description="Watch anywhere. Cancel anytime. Discover thousands of movies from all genres."
          buttonText="Explore Now"
        />

      </main>

      <Footer
        brand="MovieFlix"
        links={footerLinks}
        copyright="© 2026 MovieFlix. All Rights Reserved."
      />

    </div>
  );
}

export default App;