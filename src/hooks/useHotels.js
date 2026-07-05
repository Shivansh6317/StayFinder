import {useEffect,useState} from "react";

import {fetchHotels} from "../services/hotelApi";

export default function useHotels(

    currentPage,

    pageSize

){

    const[hotels,setHotels]=useState([]);

    const[loading,setLoading]=useState(true);

    const[error,setError]=useState("");

    const[total,setTotal]=useState(0);

    useEffect(()=>{

        async function loadHotels(){

            try{

                setLoading(true);

                const data=

                await fetchHotels(

                    pageSize,

                    currentPage*pageSize

                );

                setHotels(data.data);

                setTotal(data.count);

            }

            catch(err){

                setError(err.message);

            }

            finally{

                setLoading(false);

            }

        }

        loadHotels();

    },[currentPage,pageSize]);

    return{

        hotels,

        loading,

        error,

        total

    };

}