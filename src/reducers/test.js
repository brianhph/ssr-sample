import { Map } from 'immutable';
import { 
  ACTION1,
  ACTION2
} from '../actions/test';

const initialState = Map({
  val1: 1111,
  val2: null
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION1:
      return state.merge({
        val1: 'data update'
      });
    case ACTION2:
      return state.merge({
        val2: 'val2'
      });
    default:
      return state;
  }
};
