import "./SortBar.css";

export default function SortBar({

    sort,

    setSort

}){

    return(

        <div className="sortBar">

            <select

                value={sort}

                onChange={(e)=>setSort(e.target.value)}

            >

                <option value="">

                    Sort By

                </option>

                <option value="name">

                    Name

                </option>

                <option value="priceLow">

                    Price Low → High

                </option>

                <option value="priceHigh">

                    Price High → Low

                </option>

                <option value="rating">

                    Rating

                </option>

            </select>

        </div>

    );

}