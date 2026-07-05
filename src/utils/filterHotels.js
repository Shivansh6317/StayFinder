export default function filterHotels(

    hotels,

    search,

    location

){

    return hotels.filter(hotel=>{

        const matchSearch=

            hotel.name

            .toLowerCase()

            .includes(

                search.toLowerCase()

            );

        const matchLocation=

            location===""

            ||

            hotel.location===location;

        return matchSearch && matchLocation;

    });

}