// import React from 'react';
// import RingLoader from "react-spinners/ClipLoader";

// function Loader() {
//   return (
//     <div className="sweet-loading">
//       <RingLoader
//         color={'#fff'}
//         size={150}
//         aria-label="Loading Spinner"
//         data-testid="loader"
//       />
//     </div>
// );
// }

// export default Loader;

import { ColorRing } from  'react-loader-spinner'

export const Loader = () => {
    return (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    )
    
}