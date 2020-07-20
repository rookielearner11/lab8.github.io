import React from 'react'
import { Container, Row, Col, Text} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { Column } from 'ag-grid-community'
import Home from '././Home';

const Puff = () =>{
    return (
        <Container>
        <Row>
            <Col>
            <div><img width="250px" height="250px" src={'https://cf.ltkcdn.net/cats/images/std/64219-336x357-Smallest-cat.jpg'}/></div>
            
            </Col>
            <Col>
            <div>
                {"  "}
            </div>
            <div>
                {" Puff, 1 years old. She is very shy, and she needs longer time to adapt new environment"}
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
            <div><li><Link to="/registeration">Registeration</Link></li></div>
            </Col>
        
        </Row>
        </Container>
    )
}
export default Puff;