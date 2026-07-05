import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {

    const [wishlist, setWishlist] = useState(() => {

        const data = localStorage.getItem("wishlist");

        return data ? JSON.parse(data) : [];

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

            alert("Hotel already added to wishlist.");

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