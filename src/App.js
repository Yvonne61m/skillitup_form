import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap.css'
import './bootstrap.min.css'
import './_bootswatch.scss'
import './_variables.scss'
import './custom.scss'
import './App.css';
// npm install bootstrap
// npm install bootstrap-solarized
// npm install resolve-url-loader
import React, { Component } from "react";
import { render } from "react-dom";
import {widgets, originalSchema, originalUISchema} from './schema.js'
// npm install react-jsonschema-form --save
import Form from "react-jsonschema-form";



// import './node_modules/bootstrap-solarized-light.css';

// const schema = {
//   title: "Todo",
//   type: "object",
//   required: ["title"],
//   properties: {
//     title: { type: "string", title: "Title", default: "A new task" },
//     done: { type: "boolean", title: "Done?", default: false }
//   }
// };

const log = (type) => console.log.bind(console, type);
class App extends Component {
  
  render() {
    const onSubmit = ({ formData }, e) => console.log("Data submitted: ", formData)
    
    // function Tpl(props) {
    //   const {id, label, required, children} = props;
    //   return (
    //     <div className="App">
    //       <label htmlFor={id}>{label}{required ? "*" : null}</label>
    //       {children}
    //     </div>
    //   );
    // }
    return (
      <div className="App">
      <header className="App-header">
      <Form className = "Form" schema={originalSchema}
        uiSchema = {originalUISchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
        widgets = {widgets}/>
       {/* FieldTemplate = {Tpl}  */}
    </header>
      </div>
    )
  }
}

export default App;