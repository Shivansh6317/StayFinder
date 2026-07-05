import "./HotelCard.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { WishlistContext } from "../../context/WishlistContext";

export default function HotelCard({ hotel }) {

    const navigate = useNavigate();

    const { addHotel } = useContext(WishlistContext);

    return (

        <div className="hotel-card">

            <img

                src={hotel.thumbnail}

                alt={hotel.name}

            />

            <div className="hotel-content">

                <h2>{hotel.name}</h2>

                <p>📍 {hotel.location}</p>

                <p>⭐ {hotel.rating} / 5</p>

                <h3>

                    ₹ {Number(hotel.price).toLocaleString()}

                </h3>

                <p>

                    {hotel.description?.slice(0, 100)}...

                </p>

                <div className="button-group">

                    <button

                        className="wishlist-btn"

                        onClick={() => addHotel(hotel)}

                    >

                        Add Wishlist

                    </button>

                    <button

                        className="details-btn"

                        onClick={() => navigate(`/hotel/${hotel.id}`)}

                    >

                        View Details

                    </button>

                </div>

            </div>

        </div>

    );

}