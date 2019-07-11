const initState = { myList: [], recommendations: [] };

const reducers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MYLIST_SUCCESS": {
      return {
        ...state,
        myList: action.list
      };
    }

    case "FETCH_RECOMMENDATION_SUCCESS":
      return {
        ...state,
        recommendations: action.list
      };

    case "REMOVE_ITEM_SUCCESS":
      return {
        myList: state.myList.filter(item => item.id !== action.item.id),
        recommendations: [...state.recommendations, action.item]
      };

    case "ADD_ITEM_SUCCESS":
      return {
        myList: [...state.myList, action.item],
        recommendations: state.recommendations.filter(
          item => item.id !== action.item.id
        )
      };

    default:
      return state;
  }
};

export default reducers;
