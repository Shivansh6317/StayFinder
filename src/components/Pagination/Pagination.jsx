import "./Pagination.css";

export default function Pagination({

    currentPage,

    setCurrentPage,

    totalPages

}) {

    return (

        <div className="pagination">

            <button

                disabled={currentPage === 0}

                onClick={() => setCurrentPage(currentPage - 1)}

            >

                Previous

            </button>

            {

                [...Array(totalPages)].map((_, index) => (

                    <button

                        key={index}

                        className={

                            currentPage === index

                                ? "active"

                                : ""

                        }

                        onClick={() => setCurrentPage(index)}

                    >

                        {index + 1}

                    </button>

                ))

            }

            <button

                disabled={currentPage === totalPages - 1}

                onClick={() => setCurrentPage(currentPage + 1)}

            >

                Next

            </button>

        </div>

    );

}