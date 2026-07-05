import "./HotelGrid.css";

import HotelCard from "../HotelCard/HotelCard";

export default function HotelGrid({ hotels }) {

    return (

        <section className="hotel-grid">

            {

                hotels.map(hotel => (

                    <HotelCard

                        key={hotel.id}

                        hotel={hotel}

                    />

                ))

            }

        </section>

    );

}