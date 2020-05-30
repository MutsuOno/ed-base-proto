export const initialState = {
  items: [],
  errorMessage: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_REQUEST":
      return {
        ...state,
        errorMessage: null,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        items: action.payload,
      };
    case "SEARCH_FAILURE":
      return {
        ...state,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};
