import React from 'react';

// library imports 
import { NavLink } from 'react-router-dom'; 

// stylesheet imports 
import './TabPanel.scss'; 

const TabPanel = () => {
	return ( 
		<div className="tabpanel-container">
			<NavLink className="tabs" activeClassName="tabs-active" to="/postpage">Home</NavLink>
			<NavLink className="tabs" activeClassName="tabs-active" to="/categories">Categories</NavLink>
			<NavLink className="tabs" activeClassName="tabs-active" to="/blahblah">Blah Blah</NavLink>
		</div>
	);
}
 
export default TabPanel;