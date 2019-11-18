import React, { useState, useEffect } from 'react';
import axios from 'axios';

// component imports 
import Categories from './Categories'; 

const Account = (props) => {
    const categoryId = process.env.ACCOUNT_ID; 
    const catName = 'account'
    return ( 
        <div>
            <Categories categoryID={categoryId} componentName={catName} />
        </div>
     );
}
 
export default Account;