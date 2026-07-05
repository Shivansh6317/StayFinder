import Hero from "../components/Hero/Hero";

import HotelGrid from "../components/HotelGrid/HotelGrid";

import useHotels from "../hooks/useHotels";

export default function Home(){

    const{

        hotels,

        loading,

        error

    }=useHotels();

    return(

        <>

            <Hero/>

            {

                loading ?

                <h2
                style={{
                    textAlign:"center",
                    marginTop:"40px"
                }}
                >
                    Loading Hotels...
                </h2>

                :

                error ?

                <h2
                style={{
                    textAlign:"center",
                    color:"red",
                    marginTop:"40px"
                }}
                >
                    {error}
                </h2>

                :

                <HotelGrid

                    hotels={hotels}

                />

            }

        </>

    );

}