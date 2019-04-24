import React, { Component } from 'react';
import './App.css';
import Form from "react-jsonschema-form";
import JSONSchemaForm from "react-jsonschema-form";
import * as sample from './skillItUp.json';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw } from 'draft-js';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const log = (type) => console.log.bind(console, type);
const content = { "entityMap": {}, "blocks": [{ "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };

class App extends Component {

  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
      showHTMLEditor: false
    };
  }

  onContentStateChange: Function = (contentState) => {
    this.setState({
      contentState,
    });
  };

  render() {
    const schema = {
      title: "SkillItUp",
      type: "object",
      properties: {
        id: { type: "number", title: "id", default: sample.id },
        title: { type: "string", title: "title", default: sample.title },
        introduction: { type: "string", title: "introduction", default: sample.introduction },
        criterionId: { type: "number", title: "criterionId", default: sample.criterionId },
        dtCreated: { type: "string", title: "dtCreated", default: sample.dtCreated },
        dtUpdated: { type: "string", title: "dtUpdated", default: sample.dtUpdated },
        // done: { type: "boolean", title: "Done?", default: false }
      }
    };
    const { contentState } = this.state;
    const onSubmit = ({ formData }, e) => console.log("Data submitted: ", formData)


    return (
      <div className="App">
        <header className="App-header">
          <Form schema={schema}
            onChange={console.log("changed")}
            // onSubmit={onSubmit} ref={(form) => {yourForm = form;}}
            onSubmit={onSubmit}
            onError={log("errors")}
             />


          {
            this.state.showHTMLEditor &&
            <div>
              <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onContentStateChange={this.onContentStateChange}
              />
              <textarea
                disabled
                value={JSON.stringify(contentState, null, 4)}
              />
            </div>
          }
          <button onClick={() => { this.setState({ showHTMLEditor: !this.state.showHTMLEditor }) }}>Show Editor</button>

        </header>
      </div>
    )
  }




}




export default App;
