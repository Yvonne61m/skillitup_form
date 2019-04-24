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

// function CustomFieldTemplate(props) {
//   const {id, classNames, label, help, required, description, errors, children} = props;
//   return (
//     <div className={classNames}>
//       <label htmlFor={id}>{label}{required ? "*" : null}</label>
//       {description}
//       {children}
//       {errors}
//       {help}
//     </div>
//   );
// }

// function ArrayFieldTemplate(props) {
//   return (
//     <div>
//       {props.items.map(element => element.children)}
//       {props.canAdd && <button type="button" onClick={props.onAddClick}></button>}
//     </div>
//   );
// }
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
        criterionId: { type: "number", title: "criterionId", default: sample.criterionId, canAdd: true },
        dtCreated: { type: "string", title: "dtCreated", default: sample.dtCreated },
        dtUpdated: { type: "string", title: "dtUpdated", default: sample.dtUpdated },
        questions: { 
          title: "questions", 
          type: "array", 
          items:  [
            {
              title: "question1",
              type: "object",
              minItem: sample.questions.length,
              properties: {
                  questionId: {type: "number", title:"questionId", default: sample.questions[0].questionId},
                  questionText: {type:"string", title:"questionText", default: sample.questions[0].questionText},
                  questionIndex: {type: "number", title:"questionIndex", default: sample.questions[0].questionIndex},
                  expectedAnswer: {type:"string", title:"expectedAnswer", default: sample.questions[0].expectedAnswer[0]}
              }
            },
            {
              title: "question2",
              type: "object",
              minItem: sample.questions.length,
              properties: {
                  questionId: {type: "number", title:"questionId", default: sample.questions[1].questionId},
                  questionText: {type:"string", title:"questionText", default: sample.questions[1].questionText},
                  questionIndex: {type: "number", title:"questionIndex", default: sample.questions[1].questionIndex},
                  expectedAnswer: {type:"string", title:"expectedAnswer", default: sample.questions[1].expectedAnswer[0]}
              }
            }

          ]
        }
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
            onSubmit={onSubmit}
            onError={log("errors")}
            // ArrayFieldTemplate={ArrayFieldTemplate}
            // FieldTemplate={CustomFieldTemplate} 
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
