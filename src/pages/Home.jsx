import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    
    const movies = [
        {id: 1, title: 'Movie 1', release_date:'2020'},
        {id: 2, title: 'Movie 2', release_date:'2022'},
        {id: 3, title: 'Movie 3', release_date:'2023'},
    ]

    const handleSearch = (e) => {
        e.preventDefault() // Submit button automatically refreshes page on click by default. This prevents it from refreshing
        alert(`Searched for ${searchQuery}`);
        setSearchQuery('I set this query')
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map(movie => (
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                        <MovieCard movieObject={movie} key={movie.id}/>
                    )
                    
                ))}
            </div>
        </div>
    )
}

export default Home