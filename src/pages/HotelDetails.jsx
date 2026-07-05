import { useParams } from "react-router-dom";

export default function HotelDetails(){

    const { id } = useParams();

    return(

        <h1
            style={{
                textAlign:"center",
                marginTop:"100px"
            }}
        >

            Hotel Details : {id}

        </h1>

    );

}