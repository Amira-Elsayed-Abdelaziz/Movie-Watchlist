import React from "react"
import { WatchListContext } from "../App"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import MovieCard from "./MovieCard"
import { Link } from "react-router-dom"
export default function WatchList() {
    const { watchList } = React.useContext(WatchListContext)
    return (
        <section className="watchlist">
            {watchList.length == 0 ?
                (
                    <div className="no-watchlist">
                        <h2>Your watchlist is looking a little empty...</h2>
                        <div className="add-btn">
                            <Link to="/"> <FontAwesomeIcon icon={faPlus} />Let’s add some movies!</Link>
                        </div>
                    </div>

                )
                :
                (
                    watchList.map(ele => <MovieCard key={ele.imdbID} movie={ele} addOrRemove={false} />)
                )
            }
        </section >
    )
}