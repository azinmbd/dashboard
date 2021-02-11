import axios from 'axios';

// export * from '../slices/AllBuildingsSlice';

// default id password action
// -------------------------------------------------------------------------------

// export const fetchAllBuildings = () => async (dispatch) => {
//   const response = await axios.get(
//     'https://api.lora.atrovan.com/api/buildings/all?password=asd123'
//   );
//   dispatch({
//     type: 'FETCH_ALL_BUILDINGS',
//     payload: response.data.data[0].uuid,
//   });
// };

// home page actions for towers
// --------HOME PAGE-----------------------------------------------------------------------
export const fetchBuildingAssets = (uuid) => async (dispatch) => {
  console.log(uuid);
  const response = await axios.get(
    `https://api.lora.atrovan.com/api/assets/building/${uuid}?limit=100`
  );
  console.log(response.data.data);
  dispatch({
    type: 'FETCH_BUILDING_ASSETS',
    payload: response.data.data,
  });
};

export const fetchAssetDevicesCount = ({ assetId, type }) => async (dispatch) => {
  const response = await axios.get(
    `https://api.lora.atrovan.com/api/devices/asset/${assetId}?limit=100&type=${type}`
  );
  console.log(response.data.data.length);
  dispatch({
    type: 'FETCH_ASSET_DEVICES_COUNT',
    payload: response.data.data,
  });
};

// -------HOME PAGE DETAIL------------------------------------------------------------------------
// home page to towe detail page actions

export const setAssetDetail = ({ assetId, type }) => async (dispatch) => {
  const response = {
    data: {
      assetId,
      type,
    },
  };
  dispatch({
    type: 'SET_ASSET_DETAIL',
    payload: response.data,
  });
};
export const fetchSingleAsset = ({ assetId, type }) => async (dispatch) => {
  if ((assetId, type !== undefined)) {
    const response = await axios.get(`https://api.lora.atrovan.com/api/asset/${assetId}`);

    dispatch({
      type: 'FETCH_SINGLE_ASSET',
      payload: response.data,
    });
  }
};
export const fetchAssetDevices = ({ assetId, type }) => async (dispatch) => {
  const response = await axios.get(
    `https://api.lora.atrovan.com/api/devices/asset/${assetId}?limit=100&type=${type}`
  );

  dispatch({
    type: 'FETCH_ASSET_DEVICES',
    payload: response.data.data,
  });
};

// ---------Reports PAGE----------------------------------------------------------------------
// Reports page actions

export const fetchBuildingDevices = (uuid) => async (dispatch) => {
  const response = await axios.get(
    `https://api.lora.atrovan.com/api/devices/building/${uuid}?limit=100`
  );

  dispatch({
    type: 'FETCH_BUILDING_DEVICES',
    payload: response.data,
  });
};

export const searchBuildingDevices = ({ buildingId, searchText }) => async (dispatch) => {
  const response = await axios.get(
    `https://api.lora.atrovan.com/api/devices/building/${buildingId}?limit=100&textSearch=${searchText}`
  );
  dispatch({
    type: 'SEARCH_BUILDING_DEVICES',
    payload: response.data.data,
  });
};

//see get date and detail to get bill

export const setItem = (item) => async (dispatch) => {
  const response = {
    data: {
      item,
    },
  };
  dispatch({
    type: 'SET_ITEM',
    payload: response.data,
  });
};

export const setDate = (dateRange) => async (dispatch) => {
  const response = {
    data: {
      dateRange,
    },
  };
  dispatch({
    type: 'DATE_RANGE',
    payload: response.data,
  });
};

export const fetchBillData = ({ deviceID, beginTime, endTime }) => async (dispatch) => {
  const response = await axios.get(
    `https://api.lora.atrovan.com/api/device/${deviceID}/bill?beginTime=${beginTime}&endTime=${endTime}`
  );
  dispatch({
    type: 'GET_BILL',
    payload: response.data,
  });
};
