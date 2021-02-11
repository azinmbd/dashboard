
const INITIAL_STATE = {
    data:[]
  }
  
  export default function SetItemReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case "SET_ITEM":
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
    }
    