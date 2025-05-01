function HeroBanner({ movie }) {
    if (!movie) return null;
  
    const backgroundImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  
    return (
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
  
        <div className="relative p-8 text-white max-w-xl">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="mb-4 line-clamp-3">{movie.overview}</p>
          <button className="bg-red-600 hover:bg-red-700 text-black px-4 py-2 rounded font-semibold">
            Play
          </button>
        </div>
      </div>
    );
  }
  
  export default HeroBanner;
  