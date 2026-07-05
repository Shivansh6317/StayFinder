import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState(() => {

        const stored = localStorage.getItem("wishlist");

        return stored ? JSON.parse(stored) : [];

    });

    useEffect(() => {

        localStorage.setItem(

            "wishlist",

            JSON.stringify(wishlist)

        );

    }, [wishlist]);

    function addHotel(hotel) {

        const exists = wishlist.some(

            item => item.id === hotel.id

        );

        if (exists) {

            alert("Hotel already exists in wishlist.");

            return;

        }

        setWishlist([...wishlist, hotel]);

    }

    function removeHotel(id) {

        setWishlist(

            wishlist.filter(

                hotel => hotel.id !== id

            )

        );

    }

    return (

        <WishlistContext.Provider

            value={{

                wishlist,

                addHotel,

                removeHotel

            }}

        >

            {children}

        </WishlistContext.Provider>

    );

}