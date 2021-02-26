import React, { useEffect, useState } from 'react'
import axios from '../../axios'

import './Row.css';

const baseURL = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();

    }, [fetchUrl]);

    console.log(movies)

    return (
        <div className="Row">

            <h2>{title}</h2>
            <div className='RowPosters' >
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`RowPoster ${isLargeRow && 'RowPosterLarge'}`}
                        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

export default Row
