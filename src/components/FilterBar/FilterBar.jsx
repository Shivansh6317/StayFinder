import "./FilterBar.css";

export default function FilterBar({

    locations,

    selectedLocation,

    setSelectedLocation

}){

    return(

        <div className="filterBar">

            <select

                value={selectedLocation}

                onChange={(e)=>setSelectedLocation(e.target.value)}

            >

                <option value="">

                    All Locations

                </option>

                {

                    locations.map(location=>(

                        <option

                            key={location}

                            value={location}

                        >

                            {location}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}