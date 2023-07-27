import { LOAD_REGION } from '../constants/actionTypes';

const initialState = {
  region: null,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REGION:
      return {
        ...state,
        region: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
