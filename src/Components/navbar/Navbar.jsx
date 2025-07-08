// import React from "react";


// const Navbar = (props) => {
//   console.log("props at navbar",props);

  

//   return (
//     <div className="navwrapper">
//       <div className="logo">
//        Edgecut
//       </div>
//       <div className="navItems">
//         <ul>
//           <li>
//             <a className="nav-link" href="#home">
//               {props.navlinks.home}
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="#about">
//             {props.navlinks.about}

//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="#experience">
//             {props.navlinks.furniture}           
//              </a>
//           </li>
//           <li>
//             <a className="nav-link" href="#contacts">
//             {props.navlinks.blogs}           
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="#contacts">
//             {props.navlinks.contacts}           
//             </a>
//           </li>
//           <li>
//             <a className="nav-link" href="#login">
//             {props.navlinks.login}           
//             </a>
//           </li>



//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import './Navbar.css'; // Optional CSS file for styling

const Navbar = ({ navlinks }) => {
  return (
    <nav className="navbar">
      <div className="logo">Edgecut</div>
      <ul className="nav-links">
        <li><a href="#">{navlinks.home}</a></li>
        <li><a href="#">{navlinks.about}</a></li>
        <li><a href="#">{navlinks.furniture}</a></li>
        <li><a href="#">{navlinks.blogs}</a></li>
        <li><a href="#">{navlinks.contact}</a></li>
        <li><a href="#">{navlinks.login}</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

