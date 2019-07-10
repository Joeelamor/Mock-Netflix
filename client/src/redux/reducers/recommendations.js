const initState = { list: [], isLoading: false, err: null };

const recommendations = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        isLoading: true
      };

    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        err: null,
        list: action.list
      };

    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        err: action.err
      };

    case "ADD_USER_REQUEST":
      return {
        ...state,
        isLoading: true
      };

    case "ADD_USER_SUCCESS":
      return {
        ...state,
        list: [...state.list, action.item],
        isLoading: false,
        err: null
      };

    case "ADD_USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        err: action.err
      };

    default:
      return state;
  }
};

export default recommendations;
