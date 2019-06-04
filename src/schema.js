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
    "Questions": {
      "title": "Questions",
      "type": "array",
      "items": {
        "title": "Question",
        "type": "object",
        "properties": {
          "questionText": {
            "title": "QuestionText",
            "type": "string",
            "default": "Please enter a question."
          },
          "answerText": {
            "title": "AnswerText",
            "type": "string",
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

  "Questions": {
    "items": {
      "questionText": {
        "ui:widget": "myWysiwyg",
      }
    }
  },
}

export const formData = {
  "challenge_title": sample.title,
  "challenge_des": sample.introduction,
  "Questions":[
    {
      "questionText": sample.questions[0].questionText,
      "answerText":sample.questions[0].expectedAnswer
    }
  ]
}


