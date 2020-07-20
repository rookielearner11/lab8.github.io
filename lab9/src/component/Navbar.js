import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Icon } from 'semantic-ui-react';
//import {localeProvider, LOCALES} from '../locale/locales';
//import { FormattedMessage} from 'react-intl';
//import implementation from '../locale/implementation';

const Navbar = () => {
    
    return (
        //<localeProvider locale={LOCALES.ENGLLISH}>
        <nav className="nav-wrapper skyblue darken-3">    
            <div className = "container">
            <Icon name='paw' size='big' />
                <a className="brand-logo">Pet Home</a>
                <ul className="right">
                    <li id ='home'><Link to="/home">Home</Link></li>
                    <li id = 'adoption'><Link to="/adoption">Adoption</Link></li>
                    <li id = 'help'> <Link to="/help">Help</Link></li>
                </ul>
            </div>
        </nav>
        
    )
}

 

export default Navbar;