import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons"
import { WatchListContext } from "../App"
import React from "react"
export default function MovieCard({ movie, addOrRemove }) {

    const {setWatchList } = React.useContext(WatchListContext)
    function addToWatchList() {
        setWatchList(prev => [...prev, movie])
    }
    function removeFromWatchList(imdbID) {
        setWatchList(prev => prev.filter(ele => ele.imdbID != imdbID))
    }
    return (
        <div className="movie-card">
            <div className="card-poster">
                <img className="poster" src={movie.Poster} />

            </div>
            <div className="card-details">
                <div>
                    <h4>{movie.Title}</h4>
                    <span className="rate">
                        <FontAwesomeIcon icon={faStar} />{movie.imdbRating}
                    </span>

                </div>
                <div>
                    <span className="type">{movie.Genre}</span>
                    <span className="duration">{movie.Runtime}</span>

                </div>
                <div className="description">{movie.Plot}</div>
                <div className="add-btn">
                    {
                        addOrRemove ?
                            (<><button onClick={addToWatchList}><FontAwesomeIcon icon={faPlus} />Watch List</button></>) : (<><button onClick={() => removeFromWatchList(movie.imdbID)}> <FontAwesomeIcon icon={faMinus} />Remove</button></>)

                    }
                </div>
            </div>
        </div>

    )
}