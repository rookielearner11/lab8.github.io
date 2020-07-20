import React from 'react'
import { Container, Row, Col, Text} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { Column } from 'ag-grid-community'
import Home from '././Home';

const Nene = () =>{
    return (
        <Container>
        <Row>
            <Col>
            <div><img width="250px" height="250px" src={'https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/Pembroke-Welsh-Corgi.jpg'}/></div>
            
            </Col>
            <Col>
            <div>
                {"  "}
            </div>
            <div>
                {" Nene, 7 months. He is very shy, and he needs longer time to adapt new environment"}
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
export default Nene;