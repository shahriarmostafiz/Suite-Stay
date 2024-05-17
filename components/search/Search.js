"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = ({ fromList, destination, checkin, checkout }) => {
    const { replace } = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const [searchState, setSearchState] = useState({
        "destination": destination || "Paris",
        "checkin": checkin || "",
        "checkout": checkout || ""
    })
    const [disableBtn, setDisableBtn] = useState(false)

    function handleSearchInput(event) {
        const name = event.target.name
        const value = event.target.value
        const state = { ...searchState, [name]: value }

        if (new Date(state.checkin).getTime() > new Date(state.checkout).getTime()) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
        setSearchState(state)
    }
    function doSearch(event) {
        // console.log("hello");
        const params = new URLSearchParams(searchParams)
        params.set("destination", searchState.destination)

        if (searchState.checkin && searchState.checkout) {
            params.set("checkin", searchState.checkin)
            params.set("checkout", searchState.checkout)
        }
        if (pathName.includes("hotels")) {
            replace(`${pathName}?${params.toString()}`)
        } else {
            replace(`${pathName}hotels?${params.toString()}`)

        }
    }
    return (
        <>
            <div className="lg:max-h-[250px] mt-6">
                <div id="searchParams" className={fromList && "!shadow-none"}>
                    <div>
                        <span>Destination</span>
                        <h4 className="mt-2">
                            <select name="destination" id="destination"
                                defaultValue={searchState.destination}
                                onChange={(e) => handleSearchInput(e)}>
                                <option value="Puglia">Puglia</option>
                                <option value="Catania">Catania</option>
                                <option value="Frejus">Frejus</option>
                                <option value="Calvi">Calvi</option>
                                <option value="Paris">Paris</option>
                                <option value="Cergy">Cergy</option>
                                <option value="London">London</option>
                            </select>
                        </h4>
                    </div>

                    <div>
                        <span>Check in</span>
                        <h4 className="mt-2">
                            <input type="date" name="checkin" id="checkin"
                                value={searchState.checkin}
                                onChange={(e) => handleSearchInput(e)} />
                        </h4>
                    </div>

                    <div>
                        <span>Checkout</span>
                        <h4 className="mt-2">
                            <input type="date" name="checkout" id="checkout"
                                value={searchState.checkout}

                                onChange={(e) => handleSearchInput(e)} />
                        </h4>
                    </div>
                </div>
            </div>

            <button
                disabled={disableBtn}
                onClick={(e) => doSearch(e)}
                className={`search-btn ${disableBtn && "bg-gray-500"}`}>🔍️ {fromList ? "Modify Search" : "Search"}</button>
        </>
    );
};

export default Search;
