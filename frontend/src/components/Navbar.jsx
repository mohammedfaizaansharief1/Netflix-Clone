// function Navbar({ onSearch, onCategorySelect }) {
//   const handleSearchChange = (e) => {
//     onSearch(e.target.value);
//   };

//   return (
//     <nav className="flex items-center justify-between p-4 bg-black text-white">
//       <h1 className="text-2xl font-bold">MyFlix 🎬</h1>

//       <div className="flex space-x-4">

//       <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("trending")}
//         >
//           Home
//         </button>

//         <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("trending")}
//         >
//           TV Shows
//         </button>

//         <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("trending")}
//         >
//           Movies
//         </button>

//         <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("trending")}
//         >
//           Latest
//         </button>

//         <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("trending")}
//         >
//           My List
//         </button>



//         {/* Categories */}
//         {/* <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("trending")}
//         >
//           Trending
//         </button>
//         <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("top-rated")}
//         >
//           Top Rated
//         </button>
//         <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("upcoming")}
//         >
//           Upcoming
//         </button>
//         <button className="hover:text-red-500 text-black"
//         onClick={() => onCategorySelect("movies")}>Movies</button>
//         <button className="hover:text-red-500 text-black"
//         onClick={() => onCategorySelect("series")}>Series</button> */}

//         {/* Genres */}
//         {/* <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("action")}
//         >
//           Action
//         </button>
//         <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("horror")}
//         >
//           Horror
//         </button>
//         <button
//           className="hover:text-red-500 text-black"
//           onClick={() => onCategorySelect("comedy")}
//         >
//           Comedy
//         </button> */}
//       </div>

//       <input
//         type="text"
//         placeholder="Search..."
//         onChange={handleSearchChange}
//         className="p-2 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
//       />
//     </nav>
//   );
// }

// export default Navbar;



import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();

  const navLinkClass = (path) =>
    `px-4 py-2 ${
      location.pathname === path
        ? "text-white font-bold border-b-2 border-red-500"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-80 fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-red-600">NETFLIX</div>
      <div className="flex items-center space-x-6 text-sm sm:text-base">
        <Link to="/" className={navLinkClass("/")}>Home</Link>
        <Link to="/tv-shows" className={navLinkClass("/tv-shows")}>TV Shows</Link>
        <Link to="/movies" className={navLinkClass("/movies")}>Movies</Link>
        <span className="text-gray-500 cursor-not-allowed">Latest</span>
        <Link to="/my-list" className={navLinkClass("/my-list")}>My List</Link>
        <Link to="/profile" className="text-white hover:text-red-500">
          <FaUserCircle className="text-2xl" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

