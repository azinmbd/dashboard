const INITIAL_STATE = {
    data:[]
  }
  
  export default function SingleAssetReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case "FETCH_SINGLE_ASSET":
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
    }
    