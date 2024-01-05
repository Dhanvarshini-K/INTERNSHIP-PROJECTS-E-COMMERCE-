// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function YourComponent() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState('/account');

//   const handleItemClick = (value) => {
//     setSelectedValue(value);
//     setIsOpen(false);
//   };

//   const options = [
//     { value: '/account', label: 'Account' },
//     { value: '/address', label: 'Address' },
//     { value: '/order', label: 'Order' },
//   ];

//   return (
//     <div>
//       <label>Select Option:</label>
//       <div className="custom-dropdown">
//         <div
//           className="dropdown-toggle"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {selectedValue}
//         </div>
//         {isOpen && (
//           <ul className="dropdown-menu">
//             {options.map((option) => (
//               <li key={option.value} onClick={() => handleItemClick(option.value)}>
//                 <Link to={option.value}>{option.label}</Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default YourComponent;
