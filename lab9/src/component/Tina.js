import React from 'react'
import { Container, Row, Col, Text} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { Column } from 'ag-grid-community'
import Home from '././Home';

const Tina = () =>{
    return (
        <Container>
        <Row>
            <Col>
            <div><img width="250px" height="250px" src={'https://spca.bc.ca/wp-content/uploads/happy-dog-tongue-hanging-out-825x549.jpg'}/></div>
            
            </Col>
            <Col>
            <div>
                {"  "}
            </div>
            <div>
                {" Gerrge, 2 years old. He is very shy, and he needs longer time to adapt new environment"}
            </div>
            <div>
                {"He is vey strong and healthy"}
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
            <div><li><Link to="/registeration">Registeration</Link></li></div>
            </Col>
        
        </Row>
        </Container>
    )
}
export default Tina;