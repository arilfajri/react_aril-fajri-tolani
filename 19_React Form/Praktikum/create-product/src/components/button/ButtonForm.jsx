import React from 'react'

function ButtonForm() {
  return (
    <div>
      <div className="text-center mt-5">
        <button
          type="submit"
          className="btn btn-primary submit"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          id="submitbutton"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default ButtonForm