import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";
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
    <div className="min-h-screen bg-black">

      <Navbar
        logo="MovieFlix"
        menus={menus}
      />

      <main className="pt-24">

        <Hero
          title="Unlimited Movies, TV Shows, and More"
          description="Watch anywhere. Cancel anytime."
          buttonText="Explore Now"
        />

        <MovieSection />

        <Footer
          brand="MovieFlix"
          links={footerLinks}
          copyright="© 2026 MovieFlix. All Rights Reserved."
        />

      </main>

    </div>
  );
}

export default App;