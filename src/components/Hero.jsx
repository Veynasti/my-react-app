function Hero({ title, description, buttonText }) {
    return (
        <section className="text-center py-24">

        <h2 className="text-5xl font-bold">
            {title}
        </h2>

        <p className="mt-6 text-gray-600">
            {description}
        </p>

        <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg">
            {buttonText}
        </button>

        </section>
    );
}

export default Hero;