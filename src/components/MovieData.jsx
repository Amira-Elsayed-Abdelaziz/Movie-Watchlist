import React from "react"
import MovieCard from "./MovieCard"
import { WatchListContext } from "../App"
export default function MovieData({ id }) {
    const { watchList } = React.useContext(WatchListContext)
    const onlyIDs = watchList.map(ele => ele.imdbID)
    const [movie, setMovie] = React.useState({})
    React.useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(data => setMovie({ ...data, Runtime: data.Runtime.split(" ").join("") }))
    }, [])

    return movie && (
        <MovieCard key={movie.imdbID} movie={movie} addOrRemove={
            onlyIDs.includes(id) ? false : true
        } />
    )
}