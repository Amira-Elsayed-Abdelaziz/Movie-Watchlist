import { Link, Outlet } from "react-router-dom";

import { useLocation } from "react-router-dom";
export default function TopSection() {
    const location = useLocation()
    return (<>
        <header>
            <h1>{location.pathname == "/" ? "Find your film" : "My Watchlist"}</h1>
            {location.pathname == "/" ?
                <Link to="watchlist">My Watchlist</Link>
                :
                <Link to="/">Search for movies</Link>
            }
        </header>
        <Outlet />
    </>
    )
}