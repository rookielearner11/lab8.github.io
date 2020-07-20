import React,{useState} from 'react'
import { Icon } from 'semantic-ui-react';
import {Link, NavLink} from 'react-router-dom'
import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate';
import Homecn from './Homecn';

const Home = () => {
    //const [locale, setLocal] = useState(LOCALES.ENGLISH);
    return(
        //<I18nProvider locale={locale}>
        <div className="container">
            <br></br>
            <br></br>
            <Icon name='clock' size='big' /><h4 className="left">Open Hour:</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Monday ~ Friday: 9 a.m ~ 7 p.m</p>
            <p>Saturday: 11 a.m ~ 5 p.m </p>
            <p>Sunday: Closed</p>
            
            <Icon name='info circle' size='big' /><h4 className="left">About Us</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Pet Home is a non-profit, community-based organization and a registered charitable organization. We are trying our best to help homeless animals to find a new home.</p>

            <Icon name='info circle' size='big' />
            <h4 className="left">In order to adopt a cut animal, you need to book an appointment</h4><br/>
            <h4 className="left">There are four steps you need to complete:</h4><br/><br/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>Step1: Choose a stray animal that you want to adopt</p>
            <p>Step2: Give your address to us</p>
            <p>Step3: Provide your personal information</p>
            <p>Step4: Successfull reservation an appointment</p>
            <br></br>
            <br></br>
            <div><li><Link to="/Homecn">Go to the chinese version page</Link></li></div>
        </div>
        //</I18nProvider>
    )
}

export default Home;