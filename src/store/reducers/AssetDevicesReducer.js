const INITIAL_STATE = {
  data:[]
}

export default function AssetDevicesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "FETCH_ASSET_DEVICES":

        return {
          ...state,
          data: action.payload
        };
      default:
        return state;
    }
  }
  