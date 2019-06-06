import { Editor } from 'react-draft-wysiwyg';
// npm install -S react-draft-wysiwyg
import React, { Component } from "react";
import { convertFromRaw } from 'draft-js';
// npm install --save draft-js react react-dom
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, ContentState } from 'draft-js';

import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import Wysiwyg from './wysiwyg.js';
import * as sample from './skillItUp.json';


export const originalSchema = {

  "title": "CHALLENGE",
  // "description": "These samples are best viewed without live validation.",
  "type": "object",
  "properties": {
    "challenge_title": {
      "title": "Title",
      "type": "string",
      "default": ""
    },
    "challenge_des": {
      "title": "Introduction",
      "type": "string",
      "default":""
    },
    "questions": {
      "title": "All Questions",
      "type": "array",
      "items": {
        "title": "Q&A",
        "type": "object",
        "properties": {
          "questionText": {
            "title": "Question Text",
            "type": "string",
            "default": "Please enter a question."
          },
          "answerTexts": {
            "title": "All Answers Texts",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "answerText": {
                  "title":  "Answer Text",
                  "type": "string",
                }
              }
            }
          }
        },
      }
    },
  }
}

export const widgets = {
  myWysiwyg: Wysiwyg
}


export const originalUISchema = {

  "challenge_des": {
    "ui:widget": "myWysiwyg"
  },

  "questions": {
    "items": {
      "questionText": {
        "ui:widget": "myWysiwyg",
      }
    }
  },
}

const questions =
  Object.keys(sample.questions).map((e) => {
    return (
      {
        "questionText": sample.questions[e].questionText,
        "answerTexts": 
        Object.keys(sample.questions[e].expectedAnswer).map((e1) => {
          return (
            {
              "answerText": sample.questions[e].expectedAnswer[e1]
            }
          )
        })
      }
    )
  })




export const formData = {
  "challenge_title": sample.title,
  "challenge_des": sample.introduction,
  "questions": questions
}


