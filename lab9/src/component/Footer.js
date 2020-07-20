import React from 'react'
import { Icon } from 'semantic-ui-react';
const Footer = () => {
    return (
        <nav className="nav-wrapper skyblue darken-3">
            <div className = "fixed-bottom">
                <div className="container">
                <Icon name='location arrow' size='big' />
                    <a className="brand-logo">Our Location</a>
                    <ul className="right">
                        <li>61 Dunn Street, Ottawa ON</li>
                        <li>K2K 3J7</li>    
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Footer;