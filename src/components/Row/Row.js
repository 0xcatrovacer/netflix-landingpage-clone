import React, { useEffect, useState } from 'react'
import axios from '../../axios'

const Row = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request);
            return request
        }
        fetchData();

    }, [])

    return (
        <div className="Row">

            <h2>{title}</h2>

        </div>
    )
}

export default Row
