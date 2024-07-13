import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import './Pagination.css';

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const pages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="pagination">
      <div className="navigation-prev" onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}>
        <IoIosArrowBack />
      </div>
      <div className="navigation-next" onClick={() => setCurrentPage(currentPage < pages ? currentPage + 1 : pages)}>
        <MdNavigateNext />
      </div>
    </div>
  );
};

export default Pagination;
