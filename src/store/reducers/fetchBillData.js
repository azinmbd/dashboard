

const INITIAL_STATE = {
    data:[]
  }
  
  export default function GetBillReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case "GET_BILL":
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
    }
    