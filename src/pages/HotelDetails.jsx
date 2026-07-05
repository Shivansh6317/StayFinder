import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./HotelDetails.css";

export default function HotelDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [hotel, setHotel] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchHotel() {

            try {

                const response = await fetch(
                    `https://demohotelsapi.pythonanywhere.com/hotels/${id}`
                );

                if (!response.ok) {
                    throw new Error("Unable to fetch hotel.");
                }

                const data = await response.json();

                setHotel(data.data);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }

        }

        fetchHotel();

    }, [id]);

    if (loading) {

        return <h2 className="loading">Loading Hotel...</h2>;

    }

    if (error) {

        return <h2 className="error">{error}</h2>;

    }

    return (

        <div className="details-container">

            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <img
                src={hotel.thumbnail}
                alt={hotel.name}
                className="banner-image"
            />

            <div className="details-content">

                <h1>{hotel.name}</h1>

                <div className="hotel-meta">

                    <span>📍 {hotel.location}</span>

                    <span>⭐ {hotel.rating} / 5</span>

                </div>

                <h2 className="price">

                    ₹ {Number(hotel.price).toLocaleString()} / Night

                </h2>

                <p className="description">

                    {hotel.description}

                </p>

                {

                    hotel.photos.length > 0 && (

                        <>

                            <h2>Gallery</h2>

                            <div className="gallery">

                                {

                                    hotel.photos.map((photo, index) => (

                                        <img

                                            key={index}

                                            src={photo}

                                            alt={hotel.name}

                                        />

                                    ))

                                }

                            </div>

                        </>

                    )

                }

            </div>

        </div>

    );

}