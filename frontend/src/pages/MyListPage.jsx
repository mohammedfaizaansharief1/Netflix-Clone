// src/pages/MyListPage.jsx
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

const MyListPage = () => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(storedList);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4 px-4">My List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {myList.length > 0 ? (
          myList.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-center col-span-full">No movies in your list.</p>
        )}
      </div>
    </div>
  );
};

export default MyListPage;