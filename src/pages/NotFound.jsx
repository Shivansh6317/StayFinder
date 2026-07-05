import { Link } from "react-router-dom";

export default function NotFound() {

    return (

        <div

            style={{

                minHeight:"70vh",

                display:"flex",

                flexDirection:"column",

                justifyContent:"center",

                alignItems:"center"

            }}

        >

            <h1

                style={{

                    fontSize:"90px",

                    color:"#2563eb"

                }}

            >

                404

            </h1>

            <h2>

                Page Not Found

            </h2>

            <br/>

            <Link

                to="/"

                style={{

                    background:"#2563eb",

                    color:"white",

                    padding:"12px 20px",

                    borderRadius:"8px"

                }}

            >

                Back To Home

            </Link>

        </div>

    );

}