import React, {useState} from 'react'
import { Container, Row, Col, Text, Form, FormGroup, Label} from 'reactstrap'
//import { Icon, Input } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
//import { Column } from 'ag-grid-community'
import Home from './Home'
import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate';


const Step4 = () =>{
    //const[locale, setlocal] = useState(LOCALES.ENGLISH);
    const [locale, setLocal] = useState(LOCALES.ENGLISH);
    return (
       // <I18nProvider locale={locale}>
        <Container>
       <h3> {'Finished'}</h3> <br/>
        <h3>{'Our Employee will contact you soon!'}</h3>
        <Row>
        <Col>
            <div><li><Link to="/Home">Back To Main Page</Link></li></div>
        </Col>
        </Row>
       

        </Container>
       // </I18nProvider>
    )
}
export default Step4;