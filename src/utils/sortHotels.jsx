export default function sortHotels(

    hotels,

    sort

){

    const arr=[...hotels];

    switch(sort){

        case "name":

            arr.sort(

                (a,b)=>a.name.localeCompare(b.name)

            );

            break;

        case "priceLow":

            arr.sort(

                (a,b)=>Number(a.price)-Number(b.price)

            );

            break;

        case "priceHigh":

            arr.sort(

                (a,b)=>Number(b.price)-Number(a.price)

            );

            break;

        case "rating":

            arr.sort(

                (a,b)=>b.rating-a.rating

            );

            break;

        default:

            break;

    }

    return arr;

}