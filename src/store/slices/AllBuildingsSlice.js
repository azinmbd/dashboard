import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const INITIAL_STATE = [];

const AllBuildingsSlice = createSlice({
  initialState: INITIAL_STATE,
  name: 'BuildingID',
  reducers: {
    AllBuildingsReducer(state, action) {
      state.data = action.payload;
    },
  },
});

const { AllBuildingsReducer } = AllBuildingsSlice.actions;

export const fetchAllBuildings = () => async (dispatch) => {
  const response = await axios.get(
    'https://api.lora.atrovan.com/api/buildings/all?password=asd123'
  );
  // dispatch({
  //   type: 'FETCH_ALL_BUILDINGS',
  //   payload: response.data.data[0].uuid,
  // });
  console.log(response);
  dispatch(AllBuildingsReducer(response.status));
};

export default AllBuildingsSlice.reducer;
