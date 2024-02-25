import { configureStore } from "@reduxjs/toolkit";
import appSettingsReducer from "@/store/slices/appSettings";
import globalReducer from "@/store/slices/global";
import paginationReducer from "@/store/slices/pagination";
import globalEdit from "./slices/globalEdit";
const store = configureStore({
  reducer: {
    appSettings: appSettingsReducer,
    global: globalReducer,
    pagination: paginationReducer,
    globalEdit:globalEdit,
  },
});

export default store;
