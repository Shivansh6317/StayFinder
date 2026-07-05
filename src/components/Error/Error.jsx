import "./Error.css";

export default function Error({ message }) {

    return (

        <div className="error">

            <h2>⚠ Something Went Wrong</h2>

            <p>{message}</p>

        </div>

    );

}