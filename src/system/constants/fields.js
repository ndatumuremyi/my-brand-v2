import { patters } from '../utils/validation';

export const loginFields = [
  {
    name: 'email',
    field: 'email_field',
    error: 'email_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'pattern',
        value: patters.email,
      },
    ],
  },
  {
    name: 'password',
    field: 'password_field',
    error: 'password_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'pattern',
        value: patters.password,
        message: 'enter valid password',
        details: [
          { name: 'pattern', value: patters.uppercase, message: 'at least 1 uppercase required' },
          { name: 'pattern', value: patters.lowercase, message: 'at least 1 lower required' },
          { name: 'pattern', value: patters.digit, message: 'at least 1 digit required' },
          { name: 'pattern', value: patters.specialCharacter, message: 'at least 1 special character required' },
          { name: 'minlength', value: 8, message: 'at least 8 characters required' },
        ],
      },
    ],
  },
];

export const contactFields = [
  {
    name: 'names',
    field: 'names_field',
    error: 'names_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'minlength',
        value: 3,
      },
      {
        name: 'maxlength',
        value: 25,
      },
    ],
  },
  {
    name: 'email',
    field: 'email_field',
    error: 'email_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'pattern',
        value: patters.email,
      },
    ],
  },
  {
    name: 'message',
    field: 'description_field',
    error: 'description_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'minlength',
        value: 5,
      },
      {
        name: 'maxlength',
        value: 70,
      },
    ],
  },
];
export const commentFields = [
  {
    name: 'names',
    field: 'names_field',
    error: 'names_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'minlength',
        value: 3,
      },
      {
        name: 'maxlength',
        value: 20,
      },
    ],
  },
  {
    name: 'email',
    field: 'email_field',
    error: 'email_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'pattern',
        value: patters.email,
      },
    ],
  },
  {
    name: 'description',
    field: 'description_field',
    error: 'description_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'minlength',
        value: 5,
      },
      {
        name: 'maxlength',
        value: 70,
      },
    ],
  },
];

export const createBlogFields = [
  {
    name: 'title',
    field: 'title_field',
    error: 'title_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
      {
        name: 'minlength',
        value: 3,
      },
      {
        name: 'maxlength',
        value: 100,
      },
    ],
  },
  {
    name: 'image',
    field: 'image_field',
    error: 'image_error',
    conditions: [
      {
        name: 'required',
        value: true,
      },
    ],
  },
];
