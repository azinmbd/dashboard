import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AllBuildingsReducer from '../slices/AllBuildingsSlice';
import BuildingAssetsReducer from '../slices/FetchBuildingsSlice';
import AssetDetailReducer from './AssetDetailReducer';
import AssetDevicesCountReducer from './AssetDevicesCountReducer';
import AssetDevicesReducer from './AssetDevicesReducer';
// import BuildingAssetsReducer from './BuildingAssetsReducer';
import BuildingDevicesReducer from './BuildingDevicesReducer';
import GetBillReducer from './fetchBillData';
import SearchBuildingReducer from './SearchBuildingReducer';
import SetDateReducer from './SetDateReducer';
import SetItemReducer from './SetItemReducer';
import SingleAssetReducer from './SingleAssetReducer';

export default combineReducers({
  AllBuildingsReducer: persistReducer(
    { key: 'AllBuildingsReducer', storage, whitelist: ['data'] },
    AllBuildingsReducer
  ),
  BuildingAssetsReducer: persistReducer(
    { key: 'BuildingAssetsReducer', storage, whitelist: ['data'] },
    BuildingAssetsReducer
  ),
  AssetDevicesReducer: persistReducer(
    { key: 'AssetDevicesReducer', storage, whitelist: ['state'] },
    AssetDevicesReducer
  ),

  // -------SINGLE TOWER COUNT--------------------------------------------------------------------------
  AssetDevicesCountReducer: persistReducer(
    { key: 'AssetDevicesCount', storage, whitelist: ['data'] },
    AssetDevicesCountReducer
  ),

  // ---SINGLR TOWER ASSETS------------------------------------------------------------------------------
  AssetDetailReducer: persistReducer(
    { key: 'AssetDetailReducer', storage, whitelist: ['data'] },
    AssetDetailReducer
  ),
  SingleAssetReducer: persistReducer(
    { key: 'SingleAssetReducer', storage, whitelist: ['data'] },
    SingleAssetReducer
  ),

  // ---Reports PAGE ------------------------------------------------------------------------------
  BuildingDevicesReducer: persistReducer(
    { key: 'BuildingDevicesReducer', storage, whitelist: ['data'] },
    BuildingDevicesReducer
  ),
  SearchBuildingReducer: persistReducer(
    { key: 'SearchBuildingReducer', storage, whitelist: ['data'] },
    SearchBuildingReducer
  ),

  //---SHOW BILL PAGE ------------------------------------------------------------------------------
  SetItemReducer: persistReducer(
    { key: 'SetItemReducer', storage, whitelist: ['data'] },
    SetItemReducer
  ),
  SetDateReducer: persistReducer(
    { key: 'SetDateReducer', storage, whitelist: ['data'] },
    SetDateReducer
  ),
  GetBillReducer: persistReducer(
    { key: 'GetBillReducer', storage, whitelist: ['data'] },
    GetBillReducer
  ),
});
