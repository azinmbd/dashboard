import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const INITIAL_STATE = [];

const BillData = createSlice({
  initialState: INITIAL_STATE,
  name: 'BillData',
  reducers: {
    BillDataReducer(state, action) {
      state.data = action.payload;
    },
  },
});

export const fetchBillData = ({ deviceID, beginTime, endTime }) => async (dispatch) => {
    console.log({ deviceID, beginTime, endTime });
    const response = await axios.get(
      `https://api.lora.atrovan.com/api/device/${deviceID}/bill?beginTime=${beginTime}&endTime=${endTime}`
    );
      
      dispatch(BillDataReducer(response.data));

  };


const { BillDataReducer } = BillData.actions;



export default BillData.reducer;
