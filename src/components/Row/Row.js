import React, { useEffect, useState } from 'react'
import axios from '../../axios'

import './Row.css';

const baseURL = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const ref = React.createRef();

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData();

    }, [fetchUrl]);

    const handleScroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };


    return (
        <div className="Row">

            <h2 className="RowTitle">{title}</h2>
            <div className='SliderContainer'>
                <span className="angleLeft sliderButton" onClick={() => handleScroll(-800)} >&#10094;</span>
                <div className='RowPosters' ref={ref} >
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`RowPoster ${isLargeRow && 'RowPosterLarge'}`}
                            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    ))}
                </div>
                <span className="angleRight sliderButton" onClick={() => handleScroll(800)}>&#10095;</span>
            </div>
        </div>

    )
}

export default Row
