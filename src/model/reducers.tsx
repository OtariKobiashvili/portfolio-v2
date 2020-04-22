import * as ActionTypes from './action-types';

export function example(state: any, action: any) {
  switch (action.type) {
    case ActionTypes.EXAMPLE_DID_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
