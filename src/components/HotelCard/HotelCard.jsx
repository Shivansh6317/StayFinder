import "./HotelCard.css";

import {useNavigate} from "react-router-dom";

export default function HotelCard({hotel}){

    const navigate=useNavigate();

    return(

        <div className="hotel-card">

            <img

                src={hotel.thumbnail}

                alt={hotel.name}

            />

            <div className="hotel-content">

                <h2>{hotel.name}</h2>

                <p>📍 {hotel.location}</p>

                <p>⭐ {hotel.rating}</p>

                <h3>₹ {hotel.price}</h3>

                <p>

                    {hotel.description.slice(0,100)}...

                </p>

                <button

                    className="details-btn"

                    onClick={()=>navigate(`/hotel/${hotel.id}`)}

                >

                    View Details

                </button>

            </div>

        </div>

    );

}