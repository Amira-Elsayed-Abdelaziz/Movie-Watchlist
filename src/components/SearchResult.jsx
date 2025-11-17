import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm, faSpinner } from "@fortawesome/free-solid-svg-icons"
import React from "react"
import MovieData from "./MovieData"

export default function SearchResult({ search }) {
    const [allMoviesId, setAllMoviesId] = React.useState([])
    React.useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}`)
            .then(res => res.json())
            .then(data => setAllMoviesId(data.Search?.map(ele => ele.imdbID)))
    }, [search])
    return (
        <section className="result">
            {!search ?
                (
                    <>
                        <span>
                            <FontAwesomeIcon icon={faFilm} />
                        </span>
                        <h2>Start exploring</h2> </>
                )
                :
                allMoviesId ? (
                    allMoviesId.map(ele => <MovieData key={ele} id={ele} />)
                ) : (<FontAwesomeIcon icon={faSpinner} spin />)
            }
        </section>
    )
}