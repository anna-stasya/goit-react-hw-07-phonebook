import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACT } from './actions-types';
//import { actions } from './actions';

//---------------------------------через toolkit---------------------------------
const items = createReducer([], {
  //* ----------добавить контакт------------
  [ADD_CONTACT]: (state, action) => {
    if (
      state.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase(),
      )
    ) {
      alert(`This contact already exists`);
      return;
    }
    return [...state, action.payload];
  },

  //* ---------удалить контакт------------
  [DELETE_CONTACT]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

//* ---------фильтр контакта------------
const filter = createReducer('', {
  [FILTER_CONTACT]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });

//-----------------------------------через 'redux';----------------------------------------------------

// const items = (state = [], action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];

//     case DELETE_CONTACT:
//       return state.filter((contact) => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', action) => {
//   switch (action.type) {
//     case FILTER_CONTACT:
//       return  action.payload;

//     default:
//       return state;
//   }
// };

//export default combineReducers({ items, filter });
