import React, { Component } from 'react';
import './App.css';
import Form from "react-jsonschema-form";
import * as sample from './skillItUp.json';



const log = (type) => console.log.bind(console, type);

class App extends Component {
  constructor(){
    super()
    this.state = {
      showHTMLEditor: false
    }
  }
  render() {
    const schema = {
      title: "SkillItUp",
      type: "object",
      properties: {
        id: { type: "number", title: "id", default: sample.id },
        title: { type: "string", title: "title", default: sample.title },
        introduction: { type: "string", title: "introduction", default: sample.introduction},
        criterionId: { type: "number", title: "criterionId", default: sample.criterionId },
        dtCreated: { type: "string", title: "dtCreated", default: sample.dtCreated },
        dtUpdated: { type: "string", title: "dtUpdated", default: sample.dtUpdated },
        // done: { type: "boolean", title: "Done?", default: false }
      }
    };
  
    const onSubmit = ({formData}, e) => console.log("Data submitted: ", formData)

    return (
      <div className="App">
        <header className="App-header">
          <Form schema={schema}
            onChange={console.log("changed")}
            // onSubmit={onSubmit} ref={(form) => {yourForm = form;}}
            onSubmit={onSubmit}
            onError={log("errors")} />
    {
      this.state.showHTMLEditor && <p>I'm HTML Editor</p>
    }
    <button onClick = {()=> {this.setState({showHTMLEditor: !this.state.showHTMLEditor})}}>Show Editor</button>

        </header>
      </div>
    )
    }
}

export default App;
