import React from 'react';

// component imports 
import PrimarySearchAppBar from './TabPanel';
import TabPanel from './Navbar-Material-UI/PrimarySearchAppBar';

const Navbar = () => {
    return (
        <div >
            <TabPanel />
            <PrimarySearchAppBar />
        </div>
    );
}

export default Navbar;