import * as types from "./actionType";

const initialState = {
  users: [],
  user: {},
  addedUsers: [],
  addedProduct: [],
  loading: true,
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_INFORMATIONS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_INFO:
      return {
        ...state,
        loading: false,
      };
    case types.ADD_INFO:
      return {
        ...state,
        loading: false,
      };
    case types.GET_INFO:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.UPDATE_INFO:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case types.GET_ADDED_USERS:
      return {
        ...state,
        addedProduct: action.payload,
        loading: false,
      };

    case types.ADD_USER:
      return {
        ...state,
        loading: false,
      };

    case types.DELETE_ADDED_USER:
      return {
        ...state,
        loading: false,
      };
    case types.GET_PRODUCT_ADDED:
      return {
        ...state,
        addedProduct: action.payload,
        loading: false,
      };

    case types.ADD_PRODUCT:
      return {
        ...state,
        loading: false,
      };

    case types.PRODUCT_DELETED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducers;
