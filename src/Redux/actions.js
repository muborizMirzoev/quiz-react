import {ADD_ANSWER} from './types';

export function addAnswer(event) {
   return {
      type: ADD_ANSWER,
      payload: event
   }
}
