import React from 'react'
import { Container, Row, Col, Text, Form, FormGroup, Label} from 'reactstrap'
import { Icon, Input } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { Column } from 'ag-grid-community'
import Registeration from './Registeration'

const Step3 = () =>{
    return(
        
        <Container>
            <div><h3>{"Step 3: "}</h3></div>
            <br/>
            <br/>


            <div>{"Please provide your personal information so that we can book a appointment for you "}</div>
           <Label for="FirstName"></Label>
           First Name: <Input type="textarea" name="firstname" 
           id="firstname"
           /><br />
           <br></br>

           <Label for="LastName"></Label>
           Last Name: <Input type="textarea" name="lastname" 
           id="lastname"
           /><br />
           <br></br>

           <Label for="Phone"></Label>
           Phone Number: <Input type="textarea" maxLength ="3" name="firstphone" id="firstphone"/>-<Input type="textarea" maxLength ="3" name="secondphone" id="secondphone"/>-<Input type="textarea" maxLength ="4" name="lastphone" id="lastphone"
           />
           <br />
           <br></br>

           <Label for="Email"></Label>
           Email Address: <Input type="email" name="email" 
           id="email"
           /><br />
           <br></br>

        <Row>
            <Col>
            <div><li><Link to="/Registeration">Back</Link></li></div>
            </Col>      
        </Row>

        

        <Row>
            <Col>
            <div><li><Link to="/Step4">Submit</Link></li></div>
            </Col>
        
        </Row>
                       
        
        </Container>
    )
    }
    export default Step3;