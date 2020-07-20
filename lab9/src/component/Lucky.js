import React from 'react'
import { Container, Row, Col, Text} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { Column } from 'ag-grid-community'
import Home from '././Home';

const Lucky = () =>{
    return (
        <Container>
        <Row>
            <Col>
            <div><img width="250px" height="250px" src={'https://newsd.co/wp-content/uploads/2018/02/cocker-spaniel-names.jpg'}/></div>
            
            </Col>
            <Col>
            <div>
                {"  "}
            </div>
            <div>
                {" Lucky, 6 months. He is very shy, and he needs longer time to adapt new environment"}
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
export default Lucky;