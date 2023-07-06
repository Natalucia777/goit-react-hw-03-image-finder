import React from 'react';
import RingLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <div className="sweet-loading">
      <RingLoader
        color={'#fff'}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
);
}

export default Loader;