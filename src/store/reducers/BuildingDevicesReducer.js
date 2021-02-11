
const INITIAL_STATE = {
    data:[]
  }
  
  export default function BuildingDevicesReducer(state = INITIAL_STATE, action) {
      switch (action.type) {
        case "FETCH_BUILDING_DEVICES":
          return {
            ...state,
            data: action.payload
          };
        default:
          return state;
      }
    }
    