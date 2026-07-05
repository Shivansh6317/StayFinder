import { useMemo, useState } from "react";

import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterBar from "../components/FilterBar/FilterBar";
import SortBar from "../components/SortBar/SortBar";
import HotelGrid from "../components/HotelGrid/HotelGrid";
import Pagination from "../components/Pagination/Pagination";

import useHotels from "../hooks/useHotels";

import filterHotels from "../utils/filterHotels";
import sortHotels from "../utils/sortHotels";

export default function Home() {

    const PAGE_SIZE = 12;

    const [currentPage, setCurrentPage] = useState(0);

    const [search, setSearch] = useState("");

    const [selectedLocation, setSelectedLocation] = useState("");

    const [sort, setSort] = useState("");

    const {

        hotels,

        loading,

        error,

        total

    } = useHotels(currentPage, PAGE_SIZE);

    const locations = useMemo(() => {

        return [...new Set(hotels.map(hotel => hotel.location))];

    }, [hotels]);

    let filteredHotels = filterHotels(

        hotels,

        search,

        selectedLocation

    );

    filteredHotels = sortHotels(

        filteredHotels,

        sort

    );

    return (

        <>

            <Hero />

            <div className="controls">

                <SearchBar

                    search={search}

                    setSearch={setSearch}

                />

                <FilterBar

                    locations={locations}

                    selectedLocation={selectedLocation}

                    setSelectedLocation={setSelectedLocation}

                />

                <SortBar

                    sort={sort}

                    setSort={setSort}

                />

            </div>

            {

                loading ?

                    <h2
                        style={{
                            textAlign: "center",
                            marginTop: "40px"
                        }}
                    >
                        Loading Hotels...
                    </h2>

                    :

                    error ?

                        <h2
                            style={{
                                color: "red",
                                textAlign: "center",
                                marginTop: "40px"
                            }}
                        >
                            {error}
                        </h2>

                        :

                        <>

                            <HotelGrid

                                hotels={filteredHotels}

                            />

                            <Pagination

                                currentPage={currentPage}

                                setCurrentPage={setCurrentPage}

                                totalPages={Math.ceil(total / PAGE_SIZE)}

                            />

                        </>

            }

        </>

    );

}