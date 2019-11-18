import React, { useState, useEffect } from 'react';
import axios from 'axios';

// component imports 
import Categories from './Categories'; 

const Contact = (props) => {
    const categoryId = process.env.CONTACT_ID; 
    const catName = 'contact'
    return ( 
        <div>
            <Categories categoryID={categoryId} componentName={catName} />
        </div>
     );
}
 
export default Contact;