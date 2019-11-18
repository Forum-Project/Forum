import React, { useState, useEffect } from 'react';
import axios from 'axios';

// component imports 
import Categories from './Categories'; 

const Gameplay = (props) => {
    const categoryId = process.env.GAMEPLAY_ID; 
    const catName = 'gameplay'
    return ( 
        <div>
            <Categories categoryID={categoryId} componentName={catName} />
        </div>
     );
}
 
export default Gameplay;