function MovieCard({ movie }) {

    return (

        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-64">

            <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-80 object-cover"
            />

            <div className="p-4">

                <h2 className="text-white text-xl font-bold">
                    {movie.title}
                </h2>

                <p className="text-gray-400 mt-2">
                    {movie.genre}
                </p>

                <p className="text-yellow-400 mt-2">
                    ⭐ {movie.rating}
                </p>

            </div>

        </div>

    );

}

export default MovieCard;