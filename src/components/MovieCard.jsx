function MovieCard({movieObject}) {
    function onFavouriteClicked() {
        alert('Clicked')
    }
    
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movieObject.url} alt={movieObject.title}/>
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={onFavouriteClicked}>♡</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movieObject.title}</h3>
                <p>{movieObject.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard