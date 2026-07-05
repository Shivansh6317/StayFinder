import { useContext } from "react";

import "./Wishlist.css";

import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {

    const {

        wishlist,

        removeHotel

    } = useContext(WishlistContext);

    if (wishlist.length === 0) {

        return (

            <div className="empty">

                <h1>No Hotels in Wishlist</h1>

            </div>

        );

    }

    return (

        <div className="wishlist">

            <h1>My Wishlist</h1>

            {

                wishlist.map(hotel => (

                    <div

                        key={hotel.id}

                        className="wishlist-card"

                    >

                        <img

                            src={hotel.thumbnail}

                            alt={hotel.name}

                        />

                        <div className="info">

                            <h2>{hotel.name}</h2>

                            <p>📍 {hotel.location}</p>

                            <p>⭐ {hotel.rating}</p>

                            <h3>₹ {hotel.price}</h3>

                            <button

                                className="remove"

                                onClick={() => removeHotel(hotel.id)}

                            >

                                Remove

                            </button>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}