import React from 'react';
import EmailSubscription from './EmailSubscription/EmailSubscription';
import FooterColumns from './FooterColumns';
import './Footer.css'


const Footer = (props) => {
    return (
        <footer className="footer">
            <EmailSubscription />
            <FooterColumns />
            
        </footer>
    )
}

export default Footer;