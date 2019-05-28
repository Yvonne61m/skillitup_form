import React, { Component } from "react";
import { render } from "react-dom";
import {widgets, originalSchema, originalUISchema} from './schema.js'
// npm install react-jsonschema-form --save
import Form from "react-jsonschema-form";
import './bootstrap.min.css';
import './App.css';

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

    return (
      <div className="App">
      <header className="App-header">
      <Form schema={originalSchema}
        uiSchema = {originalUISchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
        widgets = {widgets} />
               </header>
      </div>
    )
  }
}

export default App;