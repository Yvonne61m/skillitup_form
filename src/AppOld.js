import React, { Component } from 'react';
import './App.css';
import Form from "react-jsonschema-form";
import JSONSchemaForm from "react-jsonschema-form";
// npm install react-jsonschema-form --save
import * as sample from './skillItUp.json';
import { Editor } from 'react-draft-wysiwyg';
// npm install -S react-draft-wysiwyg
import { convertFromRaw } from 'draft-js';
// npm install --save draft-js react react-dom
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import {originalSchema} from './schema.js';


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
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
        showHTMLEditor: false
      };
    }
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {

    const { editorState } = this.state;
    const onSubmit = ({ formData }, e) => console.log("Data submitted: ", formData)


    return (
      <div className="App">
        <header className="App-header">
          <Form schema={originalSchema}
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
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                />
              <textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
            </div>
          }
          <button onClick={() => { this.setState({ showHTMLEditor: !this.state.showHTMLEditor }) }}>Show Editor</button>

        </header>
      </div>
    )
  }




}





