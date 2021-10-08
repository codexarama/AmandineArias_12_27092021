// TypeError: keyData.map is not a function
import React from 'react';

export default function KeyData({ keyData }) {
  return (
    <ul>
      {keyData.map((data, index) => (
        <>
          <li key={index}>{data} </li>
        </>
      ))}
    </ul>
  );
}

// import React from 'react';

// export default function KeyData({ keyData }) {
//   return (
//     <ul>
//       {keyData.map((data, unit, index) => (
//         <>
//           <li key={index}>{data} </li>
//           <li key={index}>{unit} </li>
//         </>
//       ))}
//     </ul>
//   );
// }
