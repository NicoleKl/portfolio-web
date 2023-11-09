import React from "react";
import './css/NavLink.css';

const NavLink = ({ sectionName, isActive, handleClick }) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <li>
            <a onClick={() => handleClick(sectionName)} className={`header_link ${isActive && 'link_active'} `}>
                {capitalizeFirstLetter(sectionName)}
            </a>
        </li>
    );
};

export default NavLink;