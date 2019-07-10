const initState = { list: [], isLoading: false, err: null };

const myList = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LIST_REQUEST":
      return {
        ...state,
        isLoading: true
      };

    case "FETCH_LIST_SUCCESS":
      return {
        ...state,
        isLoading: false,
        err: null,
        list: action.list
      };

    case "FETCH_LIST_FAILURE":
      return {
        ...state,
        isLoading: false,
        err: action.err
      };

    case "DELETE_ITEM_REQUEST":
      return {
        ...state,
        isLoading: true
      };

    case "DELETE_ITEM_SUCCESS":
      return {
        ...state,
        list: state.list.filter(item => item._id !== action.item._id),
        isLoading: false,
        err: null
      };

    case "DELETE_ITEM_FAILURE":
      return {
        ...state,
        isLoading: false,
        err: action.err
      };
    default:
      return state;
  }
};

export default myList;
