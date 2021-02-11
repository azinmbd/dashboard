import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const INITIAL_STATE = [];

const BuildingAssets = createSlice({
  initialState: INITIAL_STATE,
  name: 'BuildingAssets',
  reducers: {
    BuildingAssetsReducer(state, action) {
      state.data = action.payload;
    },
  },
});
export const fetchBuildingAssets = (uuid) => async (dispatch) => {
    const response = await axios.get(
      `https://api.lora.atrovan.com/api/assets/building/${uuid}?limit=100`
    );
    dispatch(BuildingAssetsReducer(response.data.data));
    // dispatch({
    //   type: 'FETCH_BUILDING_ASSETS',
    //   payload: response.data.data,
    // });
  };

const { BuildingAssetsReducer } = BuildingAssets.actions;



export default BuildingAssets.reducer;
