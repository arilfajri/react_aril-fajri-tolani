import React from 'react'

function ButtonTable() {
  return (
    <div>
      <div className="row m-3">
        <div className="col d-flex justify-content-center">
          <button type="button" className="btn btn-danger me-2" id="delete-button">
            Deletion
          </button>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            id="search"
            style={{ width: 400 }}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            id="search-button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default ButtonTable