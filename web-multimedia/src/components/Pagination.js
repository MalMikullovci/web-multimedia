import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ page, setPage, totalItems, itemsPerPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="pagination flex justify-center my-6 bg-gray-900 p-4 rounded-md">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="px-4 py-2 mx-1 bg-gray-700 text-white rounded-md hover:bg-gray-600"
      >
        Previous
      </button>
      {pageNumbers.map(num => (
        <button
          key={num}
          onClick={() => setPage(num)}
          className={`px-4 py-2 mx-1 ${page === num ? 'bg-blue-600' : 'bg-gray-700'} text-white rounded-md hover:bg-gray-600`}
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
        className="px-4 py-2 mx-1 bg-gray-700 text-white rounded-md hover:bg-gray-600"
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
};

export default Pagination;
