const INITIAL_STATE = {
    data:[]
  }
  
  export default function SearchBuildingReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case "SEARCH_BUILDING_DEVICES":
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
    }
    