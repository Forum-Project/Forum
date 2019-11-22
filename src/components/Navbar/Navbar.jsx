import React from 'react';

// component imports 
import TabPanel from './TabPanel';
import PrimarySearchAppBar from './Navbar-Material-UI/PrimarySearchAppBar';

const Navbar = (props) => {
    return (
        <div>
            <PrimarySearchAppBar path={props.path} />
            <TabPanel />
        </div>
    );
}

export default Navbar;