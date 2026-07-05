import {useMemo,useState} from "react";

import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterBar from "../components/FilterBar/FilterBar";
import SortBar from "../components/SortBar/SortBar";
import HotelGrid from "../components/HotelGrid/HotelGrid";
import Pagination from "../components/Pagination/Pagination";

import useHotels from "../hooks/useHotels";

import filterHotels from "../utils/filterHotels";
import sortHotels from "../utils/sortHotels";

export default function Home(){

    const PAGE_SIZE=12;

    const[currentPage,setCurrentPage]=useState(0);

    const{

        hotels,

        loading,

        error,

        total

    }=useHotels(

        currentPage,

        PAGE_SIZE

    );

    const[search,setSearch]=useState("");

    const[selectedLocation,setSelectedLocation]=useState("");

    const[sort,setSort]=useState("");

    const locations=useMemo(()=>{

        return [...new Set(

            hotels.map(h=>h.location)

        )];

    },[hotels]);

    let filtered=filterHotels(

        hotels,

        search,

        selectedLocation

    );

    filtered=sortHotels(

        filtered,

        sort

    );

    return(

        <>

            <Hero/>

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

            {

                loading ?

                <h2 style={{textAlign:"center"}}>

                    Loading...

                </h2>

                :

                error ?

                <h2 style={{textAlign:"center"}}>

                    {error}

                </h2>

                :

                <>

                    <HotelGrid

                        hotels={filtered}

                    />

                    <Pagination

                        currentPage={currentPage}

                        setCurrentPage={setCurrentPage}

                        totalPages={Math.ceil(total/PAGE_SIZE)}

                    />

                </>

            }

        </>

    );

}