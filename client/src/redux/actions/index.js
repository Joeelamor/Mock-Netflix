import jsonData from "../../data/data.json";
const loadData = () => JSON.parse(JSON.stringify(jsonData));
const data = loadData();

export const getMyList = () => {
  return {
    type: "FETCH_MYLIST_SUCCESS",
    list: data.mylist
  };
};

export const getRecommendations = () => {
  return {
    type: "FETCH_RECOMMENDATION_SUCCESS",
    list: data.recommendations
  };
};

export const addItem = item => {
  return {
    type: "ADD_ITEM_SUCCESS",
    item: item
  };
};

export const removeItem = item => {
  return {
    type: "REMOVE_ITEM_SUCCESS",
    item: item
  };
};
