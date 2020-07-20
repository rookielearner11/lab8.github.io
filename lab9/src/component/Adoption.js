import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { Icon } from 'semantic-ui-react'
import {Link, NavLink} from 'react-router-dom'
import Disy from '././Disy';
const list1 = [
    {
      id: 'a',
      name:'Disy',
      firstname: 'Disy, 1 years old',
      url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    },
    {
      id: 'b',
      name:'Tina',
      firstname: 'Tina, 6 months',
      url: 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2',
    },
  ];
  const list2 = [
    {
      id: 'c',
      name:'Eric',
      firstname: 'Eric, 2 years old',
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg',
    },
    {
      id: 'd',
      name:'Puff',
      firstname: 'Puff, 4 months',
      url: 'https://cf.ltkcdn.net/cats/images/std/64219-336x357-Smallest-cat.jpg',
    },
  ];
  const list3 = [
    {
      id: 'e',
      name:'Ken',
      firstname: 'Ken, 1 years old',
      url: 'https://static.scientificamerican.com/blogs/cache/file/7A1AA7B6-1E54-4974-96488CF81302DC7C_source.jpg?w=590&h=800&B84E174E-0675-48A0-971D72A4376AC80F',
    },
    {
      id: 'f',
      name:'Lucky',
      firstname: 'Lucky, 6 months',
      url: 'https://newsd.co/wp-content/uploads/2018/02/cocker-spaniel-names.jpg',
    },
  ];
  const list4 = [
    {
      id: 'g',
      name:'George',
      firstname: 'George, 2 years old',
      url: 'https://spca.bc.ca/wp-content/uploads/happy-dog-tongue-hanging-out-825x549.jpg',
    },
    {
      id: 'h',
      name:'Nene',
      firstname: 'Nene, 7 months',
      url: 'https://www.dogfoodadvisor.com/wp-content/uploads/2019/08/Pembroke-Welsh-Corgi.jpg',
    },
  ];
const Adoption = () => {
    return(
        <Container>
      <Row>
        <Col><div className="container">
            <h4 className="left">Adoption</h4>
            <br></br>
            <br></br>
            <br></br>
            <ul>
                {list1.map(item => (
                <li key={item.id}>
                    <div><img width="250px" height="250px" src={item.url}/></div>
                    <div>{item.firstname}</div>
                    <div><li><Link to={item.name}>Interested in {item.name}</Link></li></div>
                    <br></br>
                </li>
                ))}
            </ul>
        </div></Col>

        <Col><div className="container">
            <br></br>
            <br></br>
            <br></br>
            <ul>
                {list2.map(item2 => (
                <li key={item2.id}>
                    <div><img width="250px" height="250px" src={item2.url}/></div>
                    <div>{item2.firstname}</div>
                    <div><li><Link to={item2.name}>Interested in {item2.name}</Link></li></div>
                    <br></br>
                </li>
                ))}
            </ul>
        </div></Col>

        <Col><div className="container">
            <br></br>
            <br></br>
            <br></br>
            <ul>
                {list3.map(item3 => (
                <li key={item3.id}>
                    <div><img width="250px" height="250px" src={item3.url}/></div>
                    <div>{item3.firstname}</div>
                    <div><li><Link to={item3.name}>Interested in {item3.name}</Link></li></div>
                    <br></br>
                </li>
                ))}
            </ul>
        </div></Col>

        <Col><div className="container">
            <br></br>
            <br></br>
            <br></br>
            <ul>
                {list4.map(item4 => (
                <li key={item4.id}>
                    <div><img width="250px" height="250px" src={item4.url}/></div>
                    <div>{item4.firstname}</div>
                    <div><li><Link to={item4.name}>Interested in {item4.name}</Link></li></div>
                    <br></br>
                </li>
                ))}
            </ul>
        </div></Col>
      </Row>
    </Container>
       /* <div className="container">
            <h4 className="left">Adoption</h4>
            <br></br>
            <br></br>
            <br></br>
            <ul>
                {list.map(item => (
                <li key={item.id}>
                    <div><img width="250px" height="250px" src={item.url}/></div>
                    <div>{item.firstname}</div>
                </li>
                ))}
            </ul>
        </div>*/
    )

}

export default Adoption;