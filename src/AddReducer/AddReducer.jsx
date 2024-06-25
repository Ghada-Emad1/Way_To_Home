import { createSlice } from "@reduxjs/toolkit";
//import { FeedList } from '../data/FeedList';

const AddSlice = createSlice({
  name: "Add",
  initialState: {
    addpost: [],
    addShelter: [],
    addwork: [],
    addhomeless: [],
  },
  reducers: {
    addUserpost: (state, action) => {
      state.addpost.push(action.payload);
    },

    Shelter: (state, actions) => {
      state.addShelter.push(actions.payload);
      console.log(actions);
    },
    work: (state, actions) => {
      state.addwork.push(actions.payload);
      console.log(actions);
    },
    homeless: (state, actions) => {
      state.addhomeless.push(actions.payload);
      console.log(actions);
    },
  },
});

export const { addUserpost, Shelter, work,homeless } = AddSlice.actions;
export default AddSlice.reducer;
