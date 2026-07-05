const BASE_URL = "https://demohotelsapi.pythonanywhere.com";

export async function fetchHotels(limit = 12, skip = 0) {

    const response = await fetch(

        `${BASE_URL}/hotels?limit=${limit}&skip=${skip}`

    );

    if (!response.ok) {

        throw new Error("Unable to fetch hotels.");

    }

    return await response.json();

}