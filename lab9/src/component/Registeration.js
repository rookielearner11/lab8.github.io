import React from 'react'
import { Container, Row, Col, Text, Form, FormGroup, Label} from 'reactstrap'
import { Icon, Input } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { Column } from 'ag-grid-community'
import Home from '././Home'
//import { RadioGroup, RadioButton } from 'react-radio-buttons';
//import { render } from '@testing-library/react'

const Registeration = () =>{
    return(
        
        <Container>
            <div><h3>{"Step 2: "}</h3></div>
            <br/>
            <br/>

            <div>{"Please provide your dddress, We will find the closest store for you "}</div>
           <Label for="address"></Label>
           <Input type="textarea" name="address" 
           id="address"
           placeholder ="Please Enter Your Address"/>
            <Row>
            <Col>
            <div><li><Link to="/adoption">Back</Link></li></div>
            </Col>
            
        </Row>

        <Row>
            <Col>
            <div><li><Link to="/Step4">I have adopted animals from Pet Home before</Link></li></div>
            </Col>
            
        </Row>


        <Row>
            <Col>
            <div><li><Link to="/step3">Next</Link></li></div>
            </Col>
        
        </Row>
                       
        
        </Container>
    )
    

    

}
export default Registeration;