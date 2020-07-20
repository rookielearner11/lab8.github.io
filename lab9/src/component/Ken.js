import React from 'react'
import { Container, Row, Col, Text} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import { Column } from 'ag-grid-community'
import Home from '././Home';

const Ken = () =>{
    return (
        <Container>
        <Row>
            <Col>
            <div><img width="250px" height="250px" src={'https://static.scientificamerican.com/blogs/cache/file/7A1AA7B6-1E54-4974-96488CF81302DC7C_source.jpg?w=590&h=800&B84E174E-0675-48A0-971D72A4376AC80F'}/></div>
            
            </Col>
            <Col>
            <div>
                {"  "}
            </div>
            <div>
                {" Lucky, 1 year old. He is very shy, and he needs longer time to adapt new environment"}
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
export default Ken;