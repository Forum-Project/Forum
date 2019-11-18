import React, { useState, useEffect } from 'react';
import axios from 'axios';

// component imports 
import Categories from './Categories'; 

const Billing = (props) => {
    const categoryId = process.env.BILLING_ID; 
    const catName = 'billing'
    return ( 
        <div>
            <Categories categoryID={categoryId}  componentName={catName} />
        </div>
     );
}
 
export default Billing;