import { ADD_MEMBER_SUCCESS, ADD_MEMBER_FAIL } from '../actions/actionTypes';

const initialState = {
  members: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        members: [payload, ...state.members],
        loading: false,
      };
    case ADD_MEMBER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
