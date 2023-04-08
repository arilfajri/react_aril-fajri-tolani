import React from 'react'

function ButtonRandom() {
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);
  }

    return (
      <div className="text-center mt-5">
        <button
          type="submit"
          className="btn btn-danger submit"
          onClick={handleClick}
        >
          Random Button
        </button>
      </div>
    );
}

export default ButtonRandom
