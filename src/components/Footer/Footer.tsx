import React, { FC } from 'react';
import EmailSubscription from './EmailSubscription/EmailSubscription';
import FooterColumns from './FooterColumns';
import './Footer.css'
import FooterLocal from './FooterLocal/FooterLocal';
import FooterPartners from './FooterPartners/FooterPartners';

type PropsType = {}

const Footer: FC<PropsType> = (props) => {
    return (
        <footer className="footer">
            <EmailSubscription />
            <FooterColumns />
            <FooterLocal />
            <FooterPartners />
        </footer>
    )
}

export default Footer;