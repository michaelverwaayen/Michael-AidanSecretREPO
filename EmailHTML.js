import React, { Component } from 'react';
import {Form, TextArea} from 'semantic-ui-react'
class EmailHTML extends Component {
    render() {
      return (
          <div>
        <Form className = "emailTextBox">
            <TextArea placeholder='type here' />
        </Form>
              <button id = "button" type="button">SEND!</button>
        </div>
      );
    }
  }



  export default EmailHTML;
