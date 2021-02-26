import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import requests from '../../requests';

import './Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    const baseURL = "https://image.tmdb.org/t/p/original/"

    return (
        <header className="Banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(
                    ${baseURL}${movie.backdrop_path})`
            }}>
            <div className="BannerContents">
                <h1 className="BannerTitle">
                    {movie.title || movie.name || movie.original_name}
                </h1>

                <div className="BannerButtons">
                    <button className="BannerButton">Play</button><button className="BannerButton">My List</button>
                </div>

                <h1 className="BannerDescription">
                    {movie.overview}
                </h1>
            </div>
        </header>
    )
}

export default Banner
