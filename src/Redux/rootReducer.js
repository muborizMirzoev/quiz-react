import {combineReducers} from "redux";
import {ADD_ANSWER} from "./types";

function userAnswersReducer(state = {}, action) {
   switch (action.type) {
      case ADD_ANSWER:
         const event = action.payload;
         const id = event.target.name;
         return {
            ...state,
            [id]: {status: event.target.dataset.answer, id: event.target.dataset.id}
         }
      default:
         return state
   }
}

export const rootReducer = combineReducers({
   userAnswers: userAnswersReducer,
})
