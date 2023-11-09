import React, { useState } from "react";
import './css/ContactIcon.css';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactIcon = ({ type, copy }) => {
    const ContactsData = {
        'email': 'nicole.klosovich@gmail.com',
        'phone': '+17787122512',
        'linkedin': 'https://www.linkedin.com/in/veronika-klosovych-382200172/'
    }

    const ContactIconsComponents = {
        'email': <MailIcon fontSize="large" sx={{ color: 'black' }}/>,
        'phone': <PhoneIcon fontSize="large" sx={{ color: 'black' }}/>,
        'linkedin': <LinkedInIcon fontSize="large" sx={{ color: 'black' }}/>
    }

    const [copied, setCopied] = useState(false);

    const handleClick = (contactType) => {
        setCopied(true);
        navigator.clipboard.writeText(ContactsData[contactType]);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (copy ? (
        <div className={`contactIcon ${copied && 'contactIcon_active'} `} onClick={() => handleClick(type)}>
            {copied ? <p>copied</p> : ContactIconsComponents[type]}
        </div >)
        : (
            <a href={ContactsData[type]} target="_blank" className="contactIcon">
                {ContactIconsComponents[type]}
            </a>
        ));
};

export default ContactIcon;