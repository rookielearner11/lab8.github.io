import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Icon } from 'semantic-ui-react';


const Help = () => {
    return(
        <div className="container">
            <h4 className="left">Help</h4>
            <br></br>
            <br></br>
            <br></br>
            <div className="left">
                <Icon name='chat' size='big' />
                <a>Start Live Chat!</a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="left">
                <Icon name='mail' size='big' />
                <a>Send us email at: hjia088@uottawa.ca</a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="left">
                <Icon name='phone square' size='big' />
                <a>Contact Us: 613-562-5700</a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="left">You can provide you suggestions to us:</h4>
            <br></br>
            <Form>  
            <FormGroup>
                <Label for="exampleText"></Label>
                <Input type="textarea" name="text" id="exampleText" placeholder="Please enter your comments..."/>
            </FormGroup>
            <br></br>
            <Button>Submit</Button>
            <br></br>
            <br></br>
            </Form>
            <br></br>
            <br></br>
        </div>
    )
}

export default Help;