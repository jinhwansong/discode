import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { produce } from 'immer';
// import { baseAxios } from '@/utils/instance';

interface IServerInitialState {
  popupOpen: boolean;
  popupType: string | null;
}

const initialState: IServerInitialState = {
  popupOpen: false,
  popupType: null,
};

const ServerReducer = createSlice({
  name: 'server',
  initialState,
  reducers: {
    togglePopup: (state, action: PayloadAction<string>) =>
      produce(state, (draft) => {
        draft.popupOpen = !draft.popupOpen;
        draft.popupType = action.payload;
      }),
  },
});
export const { togglePopup } = ServerReducer.actions;
export default ServerReducer;
