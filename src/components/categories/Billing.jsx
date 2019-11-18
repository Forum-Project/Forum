import React, { useState, useEffect } from 'react';
import axios from 'axios';

// component imports 
import Categories from './Categories'; 

const Billing = (props) => {
    const categoryId = '5dcde725f8297d491c8e92ea'; 
    const catName = 'billing'
    return ( 
        <div>
            <Categories categoryID={categoryId}  componentName={catName} />
        </div>
     );
}
 
export default Billing;