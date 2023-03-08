import React from 'react';
import { NavLink } from 'react-bootstrap';
import './SidebarItems.css';

const SidebarItems = ({ Icon, IconActive, Text }) => {
    return (
        <NavLink className="SidebarItem">
            <span className="Icon">{Icon}</span>
            <span className="IconActive">{IconActive}</span>
            <span className="Text">{Text}</span>
        </NavLink>
    );
};

export default SidebarItems;