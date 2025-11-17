import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
export default function Searchbar({ setSearch,search}) {
    const inputRef = React.useRef()
    function formHandler(formData) {
        setSearch(formData.get("search"))
    }
    return (
        <>
            <form action={formHandler} className="searchbar">
                <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <input placeholder="Search for a movie" name="search" defaultValue={search}
                    ref={inputRef}
                />
                <button>Search</button>
            </form>
        </>
    )
}