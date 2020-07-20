import React from 'react'
import { Container, Row, Col, Text} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { Column } from 'ag-grid-community'
import Home from '././Home';

const Disy = () =>{
    return (
        <Container>
            <div><h3>{"Step 1: "}</h3></div>
            <br/>
            <br/>
        <Row>
            <Col>
            <div><img width="250px" height="250px" src={'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'}/></div>
            
            </Col>
            <Col>
            <div>
                {"  "}
            </div>
            <div>
            <br />
            <br />
                {" Disy, 1 years old. She is very shy, and she needs longer time to adapt new environment"}
            </div>
            <div>
                {"She is very healthy, and she is sterilized."}
            </div>

            
            </Col>
        </Row>
        <Row>
            <Col>
            <div><li><Link to="/adoption">Back</Link></li></div>
            </Col>
            
        </Row>
        <Row>
            <Col>
            <div><li><Link to="/registeration">Start to make a reservation for adopting animals</Link></li></div>
            </Col>
        
        </Row>
        </Container>
    )
}
export default Disy;