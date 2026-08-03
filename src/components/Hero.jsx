import cinema from "../assets/cinema.jpeg";

function Hero({ title, description, buttonText }) {
  return (
    <section className="bg-black text-white min-h-[80vh] flex items-center justify-between px-16">

      {/* Kiri */}
      <div className="max-w-xl">

        <h2 className="text-6xl font-bold leading-tight">
          {title}
        </h2>

        <p className="mt-6 text-gray-300 text-lg">
          {description}
        </p>

        <button className="mt-8 bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition">
          {buttonText}
        </button>

      </div>

      {/* Kanan */}
      <img
        src={cinema}
        alt="Cinema"
        className="w-125 rounded-xl shadow-2xl"
      />

    </section>
  );
}

export default Hero;