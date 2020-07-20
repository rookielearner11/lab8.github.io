import React,{useState} from 'react'
import { Icon } from 'semantic-ui-react';
import {Link, NavLink} from 'react-router-dom'
import {I18nProvider, LOCALES} from '../i18n';
import translate from '../i18n/translate';
import Home from './Home';

const Homecn = () => {
    //const [locale, setLocal] = useState(LOCALES.ENGLISH);
    return(
        //<I18nProvider locale={locale}>
        <div className="container">
            <br></br>
            <br></br>
            <Icon name='clock' size='big' /><h4 className="left">营业时间:</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>周一至周日: 9：00 ~ 19:00</p>
            <p>周六: 11:00 ~ 17:00 </p>
            <p>周日: 关门</p>
            
            <Icon name='info circle' size='big' /><h4 className="left">About Us</h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>我们是一个非盈利组织， 致力于帮宠物找家</p>

            <Icon name='info circle' size='big' />
            <h4 className="left">要领养动物， 你必须先预约</h4><br/><br/><br/><br/>
            <h4 className="left">有四个步骤你需要完成:</h4><br/><br/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p>步骤一：选择一个你想领养的无家可归的动物</p>
            <p>步骤二：给我们你的地址</p>
            <p>步骤三： 提供你的个人信息</p>
            <p>步骤四： 步骤完成，我们会有员工联系你</p>
            <br></br>
            <br></br>
            <div><li><Link to="/Home">返回英文界面</Link></li></div>
        </div>
        //</I18nProvider>
    )
}

export default Homecn;