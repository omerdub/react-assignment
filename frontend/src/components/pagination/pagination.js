import React from "react";
import "../../styles/pagination.scss"

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination"> 
            <button onClick={()=>paginate(currentPage - 1)} disabled={currentPage === 1}> PREV </button>
            {pageNumbers.map(number => (
                <button disabled={currentPage === number} onClick={() => paginate(number)} key={number}>
                    {number}
                </button>
            ))}
            <button onClick={()=>paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}> NEXT </button>
        </div>
    );

}

export default Pagination;