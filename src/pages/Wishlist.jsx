import { useContext } from "react";

import "./Wishlist.css";

import { WishlistContext } from "../context/WishlistContext";

export default function Wishlist() {

    const {

        wishlist,

        removeHotel

    } = useContext(WishlistContext);

    return (

        <div className="wishlist">

            <h1>My Wishlist</h1>

            {

                wishlist.length === 0 ?

                    <h2 className="empty">

                        Wishlist is Empty

                    </h2>

                    :

                    wishlist.map(hotel => (

                        <div

                            key={hotel.id}

                            className="wishlist-card"

                        >

                            <img

                                src={hotel.thumbnail}

                                alt={hotel.name}

                            />

                            <div className="wishlist-info">

                                <h2>{hotel.name}</h2>

                                <p>📍 {hotel.location}</p>

                                <p>⭐ {hotel.rating}</p>

                                <h3>

                                    ₹ {Number(hotel.price).toLocaleString()}

                                </h3>

                                <button

                                    className="remove-btn"

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