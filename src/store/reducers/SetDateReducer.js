

const INITIAL_STATE = {
    data:[]
  }
  
  export default function SetDateReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case "DATE_RANGE":
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
    }
    