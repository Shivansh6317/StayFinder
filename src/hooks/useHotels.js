import { useEffect, useState } from "react";

import { fetchHotels } from "../services/hotelApi";

export default function useHotels() {

    const [hotels, setHotels] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        async function loadHotels() {

            try {

                const data = await fetchHotels(12, 0);

                setHotels(data.data);

            }

            catch (err) {

                setError(err.message);

            }

            finally {

                setLoading(false);

            }

        }

        loadHotels();

    }, []);

    return {

        hotels,

        loading,

        error

    };

}