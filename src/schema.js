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

export const originalSchema = {
  // "definitions": {
  //   "Thing": {
  //     "type": "object",
  //     "properties": {
  //       "name": {
  //         "type": "string",
  //         "default": "Default name"
  //       }
  //     }
  //   }
  // },
  "type": "object",
  "properties": {
    "listOfStrings": {
      "type": "array",
      "title": "Challenge",
      "description": "This is a challenge!",
      "firstName": {
        "type": "string",
        "title": "First name"
      },
      "lastName": {
        "type": "string",
        "title": "Last name"
      },
      "items": {
        "title": "question",
        "type": "string",
        "default": "bazinga",
      },
    },
    
    // "multipleChoicesList": {
    //   "type": "array",
    //   "title": "A multiple choices list",
    //   "items": {
    //     "type": "string",
    //     "enum": [
    //       "foo",
    //       "bar",
    //       "fuzz",
    //       "qux"
    //     ]
    //   },
    //   "uniqueItems": true
    // },
    // "fixedItemsList": {
    //   "type": "array",
    //   "title": "A list of fixed items",
    //   "items": [
    //     {
    //       "title": "A string value",
    //       "type": "string",
    //       "default": "<p>bild</p>"
    //     }
    //     ,
    //     {
    //       "title": "a boolean value",
    //       "type": "boolean"
    //     }
    //   ]
    //   ,
    //   "additionalItems": {
    //     "title": "Additional item",
    //     "type": "number"
    //   }
    // },
    // "minItemsList": {
    //   "type": "array",
    //   "title": "A list with a minimal number of items",
    //   "minItems": 3,
    //   "items": {
    //     "$ref": "#/definitions/Thing"
    //   }
    // },
    // "defaultsAndMinItems": {
    //   "type": "array",
    //   "title": "List and item level defaults",
    //   "minItems": 5,
    //   "default": [
    //     "carp",
    //     "trout",
    //     "bream"
    //   ],
    //   "items": {
    //     "type": "string",
    //     "default": "unidentified"
    //   }
    // },
    // "nestedList": {
    //   "type": "array",
    //   "title": "ChallengeList",
    //   "items": {
    //     "type": "array",
    //     "title": "Challenge",
    //     "items": {
    //       "title": "Question",
    //       "type": "string",
    //       "default": "<p>Edit your question here!</p>"
    //     }
    //   }
    // },
    // "unorderable": {
    //   "title": "Unorderable items",
    //   "type": "array",
    //   "items": {
    //     "type": "string",
    //     "default": "lorem ipsum"
    //   }
    // },
    // "unremovable": {
    //   "title": "Unremovable items",
    //   "type": "array",
    //   "items": {
    //     "type": "string",
    //     "default": "lorem ipsum"
    //   }
    // },
    // "noToolbar": {
    //   "title": "No add, remove and order buttons",
    //   "type": "array",
    //   "items": {
    //     "type": "string",
    //     "default": "lorem ipsum"
    //   }
    // },
    // "fixedNoToolbar": {
    //   "title": "Fixed array without buttons",
    //   "type": "array",
    //   "items": [
    //     {
    //       "title": "A number",
    //       "type": "number",
    //       "default": 42
    //     },
    //     {
    //       "title": "A boolean",
    //       "type": "boolean",
    //       "default": false
    //     }
    //   ],
    //   "additionalItems": {
    //     "title": "A string",
    //     "type": "string",
    //     "default": "lorem ipsum"
    //   }
    // }
  }

export const widgets = {
  myWysiwyg : Wysiwyg
}

<<<<<<< HEAD
  export const originalUISchema = {
    "listOfStrings": {
      "items": {
        "ui:emptyValue": ""
      }
    },
    "multipleChoicesList": {
      "ui:widget": "checkboxes"
    },
    "fixedItemsList": {
      "items": [
        {
          "ui:widget": "myWysiwyg"
        },
        {
          "ui:widget": "select"
        }
      ],
      "additionalItems": {
        "ui:widget": "updown"
      }
    },
    "unorderable": {
      "ui:options": {
        "orderable": false
      }
    },
    "unremovable": {
      "ui:options": {
        "removable": false
      }
    },
    "noToolbar": {
      "ui:options": {
        "addable": false,
        "orderable": false,
        "removable": false
      }
    },
    "fixedNoToolbar": {
      "ui:options": {
        "addable": false,
        "orderable": false,
        "removable": false
      }
    }
  }
=======
export const originalUISchema = {
  // "nestedList": {
  //   "items": {
  //     "items": {
  //       "ui:widget": "myWysiwyg"
  //     }
  //   }
  // },
  "listOfStrings": {
    "items": {
      // "ui:emptyValue": ""
      "ui:widget": "myWysiwyg"
    ,
    "firstName": {
      "ui:autofocus": true,
      "ui:emptyValue": ""
    }}
  },
  // "multipleChoicesList": {
  //   "ui:widget": "checkboxes"
  // },
  // "fixedItemsList": {
  //   "items": [
  //     {
  //       "ui:widget": "myWysiwyg"
  //     },
  //     {
  //       "ui:widget": "select"
  //     }
  //   ],
  //   "additionalItems": {
  //     "ui:widget": "updown"
  //   }
  // },
  // "unorderable": {
  //   "ui:options": {
  //     "orderable": false
  //   }
  // },
  // "unremovable": {
  //   "ui:options": {
  //     "removable": false
  //   }
  // },
  // "noToolbar": {
  //   "ui:options": {
  //     "addable": false,
  //     "orderable": false,
  //     "removable": false
  //   }
  // },
  // "fixedNoToolbar": {
  //   "ui:options": {
  //     "addable": false,
  //     "orderable": false,
  //     "removable": false
  //   }
  // }
}
>>>>>>> 542f577... changed css, schema
