/***************
INSTALL INSTRUCTION
npm install bootstrap
npm install bootstrap-solarized
npm install resolve-url-loader
npm install -S react-draft-wysiwyg
npm install --save draft-js react react-dom
npm install react-jsonschema-form --save 
 ***************/

import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap.css'
import './bootstrap.min.css'
import './_bootswatch.scss'
import './_variables.scss'
import './custom.scss'
import './App.css';
import './bootstrap-solarized-light.css'
import React, { Component } from "react";
import { render } from "react-dom";
import {widgets, originalSchema, originalUISchema, formData} from './schema.js'
import Form from "react-jsonschema-form";
import * as sample from './skillItUp.json';

const log = (type) => console.log.bind(console, type);
class App extends Component {
  
  render() {
    const onSubmit = ({ formData }, e) => console.log("Data submitted: ", formData)
    
    return (
      <div className="App">
      <header className="App-header">
      <Form className = "Form" schema={originalSchema}
        uiSchema = {originalUISchema}
        formData={formData} 
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
        widgets = {widgets}/>
    </header>
      </div>
    )
  }
}

export default App;