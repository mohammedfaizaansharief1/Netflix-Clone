function MovieModal({ movie, onClose }) {
    if (!movie) return null;
  
    return (
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <button style={styles.closeButton} onClick={onClose}>
            ❌
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p style={{ marginTop: "1rem" }}>{movie.overview}</p>
        </div>
      </div>
    );
  }
  
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },
    modal: {
      background: "white",
      padding: "2rem",
      borderRadius: "10px",
      width: "500px",
      maxHeight: "80vh",
      overflowY: "auto",
    },
    closeButton: {
      position: "absolute",
      top: "10px",
      right: "20px",
      fontSize: "1.5rem",
      background: "transparent",
      border: "none",
      cursor: "pointer",
    },
  };
  
  export default MovieModal;
  