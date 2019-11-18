// import React, { useEffect, useState } from 'react';

// // library imports 
// import axios from 'axios'; 

// // component imports 
// import Billing from './Billing'; 
// import Contact from './Contact'; 
// import Account from './Account'; 

// export default function CategoriesPage() {

//     const [ categories, setCategories ] = useState(); 

//     useEffect(() => {
//         axios.get('http://localhost:5000/categories')
//             .then(res => {
//                 // console.log(res.data); 
//                 setCategories(res.data); 
//             })
//             .catch(err => {
//                 console.log(err); 
//             })
//     }, [])

//     // console.log(categories); 

//     return (
//         <div>
//             {categories ? (   
//             <div>
//                 <Billing categoryId={categories[0]} />
//                 <Account categoryId={categories[1]} />
//                 <Contact categoryId={categories[2]} /> 
//             </div>        
//             ) : null }
//             {/* {categories ? categories.map(cat => {return (<Categories categoryId={cat}/>)}) : <p>Dangit</p>} */}
//         </div>
//     )
// }
