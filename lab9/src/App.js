import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Navbar from './component/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/Home'
import Adoption from './component/Adoption'
import Help from './component/Help';
import Footer from './component/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Disy from './component/Disy';
import Puff from './component/Puff';
import George from './component/George';
import Lucky from './component/Lucky';
import Nene from './component/Nene';
import Tina from './component/Tina';
import Ken from './component/Ken';
import Eric from './component/Eric';
import Registeration from './component/Registeration';
import {RadioGroup, Radio} from 'react-radio-group'
import Step3 from './component/Step3';
import Step4 from './component/Step4';
import Homecn from './component/Homecn';

//import { AppContainer } from 'react-hot-loader';
//import en from 'react-intl/locale-data/en';
//import zn from 'react-intl/locale-data/zh';
//addLocaleData([...en, ...zh]);



class App extends Component {
  render(){
    const settings = {
      dots: true,
      infinite: true,
      fade:true,
      speed: 500,
      arrows:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Slider {...settings}>
          {photos.map((photo) => {
            return(
              <div>
                <img width="100%" height="400px" src={photo.url}/>
              </div>
            )
          })}
          </Slider>
          <Route path='/home' component={Home} />
          <Route path='/adoption' component={Adoption} />
          <Route path='/help' component={Help} />
          <Route path='/disy' component={Disy}/>
          <Route path='/eric' component={Eric}/>
          <Route path='/george' component={George}/>
          <Route path='/lucky' component={Lucky}/>
          <Route path='/ken' component={Ken}/>
          <Route path='/tine' component={Tina}/>
          <Route path='/nene' component={Nene}/>
          <Route path='/puff' component={Puff}/>
          <Route path= '/registeration' component={Registeration}/>
          <Route path= '/step3' component={Step3}/>
          <Route path= '/step4' component={Step4}/>
          <Route path= '/homecn' component={Homecn}/>
          
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const photos = [
  {
    name: 'photp 1',
    url: 'https://media11.s-nbcnews.com/j/MSNBC/Components/Video/202003/DogAdoptionThumbnail.focal-760x428.jpg'
  },
  {
    name: 'photp 2',
    url: 'https://sterlingshelter-animalshelterinc.netdna-ssl.com/wp-content/uploads/2017/09/adoption.jpg'
  },
  {
    name: 'photp 3',
    url: 'https://www.boldbusiness.com/wp-content/uploads/2019/09/Animal-Adoption.jpg'
  }
]

export default App;
