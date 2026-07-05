import {useEffect,useState} from "react";

import {useParams,useNavigate} from "react-router-dom";

export default function HotelDetails(){

    const{id}=useParams();

    const navigate=useNavigate();

    const[hotel,setHotel]=useState(null);

    const[loading,setLoading]=useState(true);

    useEffect(()=>{

        async function fetchHotel(){

            try{

                const response=await fetch(

                    `https://demohotelsapi.pythonanywhere.com/hotels/${id}`

                );

                const data=await response.json();

                setHotel(data.data);

            }

            catch(err){

                console.log(err);

            }

            finally{

                setLoading(false);

            }

        }

        fetchHotel();

    },[id]);

    if(loading){

        return(

            <h2 style={{textAlign:"center"}}>

                Loading...

            </h2>

        );

    }

    return(

        <div className="container" style={{marginTop:"40px"}}>

            <button

                onClick={()=>navigate(-1)}

            >

                ← Back

            </button>

            <br/><br/>

            <img

                src={hotel.thumbnail}

                style={{

                    width:"100%",

                    borderRadius:"10px"

                }}

            />

            <h1>{hotel.name}</h1>

            <h3>📍 {hotel.location}</h3>

            <h3>⭐ {hotel.rating}</h3>

            <h3>₹ {hotel.price}</h3>

            <p style={{marginTop:"20px"}}>

                {hotel.description}

            </p>

        </div>

    );

}