import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      // this is called destructuring an existing array = taking out every element 1 at a time. 
      return [action.payload.data, ...state];
  }
  return state;
}
