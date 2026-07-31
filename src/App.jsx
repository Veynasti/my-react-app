import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar title="MovieFlix" />

      <Hero
        title="Temukan Film Favoritmu"
        description="Jelajahi berbagai film terbaik dengan rating tinggi."
        buttonText="Lihat Film"
      />

      <Footer text="© 2026 MovieFlix" />
    </>
  );
}

export default App;