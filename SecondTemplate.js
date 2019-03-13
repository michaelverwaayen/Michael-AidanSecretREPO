import React, { Component } from 'react';
import './SecondTemplate.css';


import EmailHtml from "/home/michael/hello-world/src/EmailHTML.js";
import {Form, TextArea} from 'semantic-ui-react'
import{
  Alignment,
  Button,
  Classes,
  H5,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Switch

} from "@blueprintjs/core";



class SecondTemplate extends Component {
  render() {


    return (
    <body>  
      <div className="App">
        <div class = "topnav">
          <a href="#Invite"> Invite</a>
          <a href ="#Editors">Editors</a>
          <a href="#..">...</a>
        </div>
        <div class = "sidenav">
          <a id = "1" href = "#"> Slide 1</a>
          <a id = "2" href = "#"> Slide 2</a>
          <a id = "3" href = "#"> Slide 3</a>
          <a id = "4" href = "#"> Slide 4</a>
          <a id = "5" href = "#"> Slide 5</a>
          
        </div>
      
        <div className = "main">
          <div className = "topRight">
            <Form className = "textBox1">
              <TextArea placeholder='type here 1' />
           </Form>
           </div>
           <div className= "topleft">
           <Form className = "textBox2">
              <TextArea placeholder = 'type here 2' />
            </Form>
            </div>
            <div className = "bottomRight">
              <Form className= "textBox3">
                <TextArea placeholder = "Enter inspiration here" font-size = "100" />
              </Form>
            </div>

          <div className = "bottomLeft">
            <img class = 'picTemplate' src = "https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg" alt="React logo" width =" 50" height = "50"></img>
            </div>
            
        </div>

      

      </div>
    </body>
      
    );
  }
}
export default SecondTemplate;
