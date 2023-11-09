import React, { useState } from "react";
import './css/Contacts.css';
import ContactIcon from './ContactIcon';

const Contacts = () => {
    const contacts = ['email', 'phone', 'linkedin']

    return (
        <div id='contacts' className="section contactsSection">
            <div className="contactsSection_container container">
                <h1 className="contactsSection_header">Get in touch</h1>
                <div className="contactsGrid">
                    {contacts.map((contact, i) => {
                        return (
                            <ContactIcon
                                key={i}
                                type={contact}
                                copy={contact !== 'linkedin'}
                            />
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Contacts;
