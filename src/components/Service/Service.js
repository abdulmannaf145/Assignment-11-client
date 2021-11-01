// import React from 'react';
// import { Link } from 'react-router-dom';

// const Service = (props) => {
//     const {placeName,price,img,paragraph,id}= props.place;
//     return (
//         <div>
//         <div className="col">
//             <div className="card h-100">
//                 <img style={{height:"300px"}} src={img} className="card-img-top img-fluid" alt="..."/>
//                 <div className="card-body text-start">
//                     <h5 className="card-title">{placeName}</h5>
//                     <p className="card-text">{paragraph}</p>
//                     <p className="card-text">{price}</p>
//                     <div className="d-flex justify-content-between">
//                         <Link to={`/service/${id}`}>
//                             <button style={{border:'3px solid',background: "#f9676b",color:'white',padding:'6px'}}>Details</button>
//                         </Link>
//                         <button style={{border:'3px solid',background: "#f9676b",color:'white',padding:'6px'}}>Book now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default Service;