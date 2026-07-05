import "./HotelCard.css";

export default function HotelCard({ hotel }) {

    return (

        <div className="hotel-card">

            <img

                src={hotel.thumbnail}

                alt={hotel.name}

            />

            <div className="hotel-content">

                <h2>{hotel.name}</h2>

                <p>

                    📍 {hotel.location}

                </p>

                <p>

                    ⭐ {hotel.rating}

                </p>

                <h3>

                    ₹ {hotel.price}

                </h3>

                <p>

                    {hotel.description.slice(0,100)}...

                </p>

            </div>

        </div>

    );

}