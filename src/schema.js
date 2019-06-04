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
      "default": sample.title
    },
    "challenge_des": {
      "title": "Introduction",
      "type": "string",
      "default": sample.introduction
    },
    "Question": {
      "title": "Questions",
      "type": "object",
      "properties": {
        "OldQuestion": {
          "type": "object",
          "title": "Question",
          "properties": {
            "questionText": {
              "title": "QuestionText",
              "type": "string",
              "default": sample.questions[0].questionText
            },
            "answer": {
              "title": "AnswerText",
              "type": "string",
              "default": sample.questions[0].expectedAnswer
            },
          }
        },
        "NewQuestion": {
          "title": " ",
          "type": "array",
          "items": {
            "type": "object",
            "title": "Question",
            "properties": {
              "questionText": {
                "title": "QuestionText",
                "type": "string",
                "default": "Please enter a question."
              },
              "answer": {
                "title": "AnswerText",
                "type": "string",
              },
            }
          },
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
  "Question": {
    "NewQuestion": {
      "items": {
        "questionText": {
          "ui:widget": "myWysiwyg",
        }
      }
    }
  },
  "Question": {
    "OldQuestion": {
      "questionText": {
        "ui:widget": "myWysiwyg",
      }
    }
  }

}
