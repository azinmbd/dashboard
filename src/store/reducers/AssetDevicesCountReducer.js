
const INITIAL_STATE = {
    data: [],
  };
  
  export default function AssetDevicesCount(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "FETCH_ASSET_DEVICES_COUNT":
        return {
          ...state,
          data: action.payload,
        };
      default:
        return state;
    }
  }
  