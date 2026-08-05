import MovieCard from "./MovieCard";
import batman from "../assets/batman.png";
import joker from "../assets/joker.jpeg";
import interstellar from "../assets/interstelar.jpeg";

function MovieSection() {

    const movies = [
        {
            id: 1,
            title: "Batman Begins",
            genre: "Action",
            rating: 5.0,
            image: batman
        },
        {
            id: 2,
            title: "Interstellar",
            genre: "Sci-Fi",
            rating: 4.5,
            image: interstellar
        },
        {
            id: 3,
            title: "Joker",
            genre: "Crime",
            rating: 4.8,
            image: joker
        }
    ];

    return (

        <section className="bg-black px-10 py-16">

            <h2 className="text-white text-3xl font-bold mb-8">
                Trending Movies
            </h2>

            <div className="flex gap-8">

                {movies.map((movie) => (

                    <MovieCard
                        key={movie.id}
                        movie={movie}
                    />

                ))}

            </div>

        </section>

    );

}

export default MovieSection;