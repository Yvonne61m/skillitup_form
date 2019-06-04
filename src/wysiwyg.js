import { Editor } from 'react-draft-wysiwyg';
import React, { Component } from "react";

// npm install -S react-draft-wysiwyg
import { convertFromRaw } from 'draft-js';
// npm install --save draft-js react react-dom
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


export class Wysiwyg extends Component{
    constructor(props) {
        super();
        const contentBlock = htmlToDraft(props.value);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
          const editorState = EditorState.createWithContent(contentState);
          this.state = {
            editorState,
            // : EditorState.createEmpty()
            showHTMLEditor: false
          };
        }
      }
      onEditorStateChange = (editorState) => {
          this.props.onChange(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
        this.setState({
          editorState,
        }); 
      };
      render(){
          console.log("props---",this.props)
  return (
    <div>
    <Editor className="editor"
      editorState={this.state.editorState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={this.onEditorStateChange}
      toolbar= {
        {
          options: ['inline', 'list', 'link', 'image'],
          inline: {
            options: ['bold', 'italic', 'underline'],
          },
          list: {
            options: ['unordered', 'ordered'],
          },
          link: {
            options: ['link'],
          },
        }
      }
      />
    {/* <textarea
      disabled
      value={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
      /> */}
  </div>
  )}
}
export default Wysiwyg