// src/components/MovieCard.jsx
const MovieCard = ({ movie }) => {
    return (
      <div className="group relative cursor-pointer overflow-hidden rounded-lg transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-300 flex items-center justify-center">
          <h4 className="text-white text-lg font-bold text-center px-2">
            {movie.title}
          </h4>
        </div>
      </div>
    );
  };
  
  export default MovieCard;