import {createSlice} from '@reduxjs/toolkit'
import { FeedList } from '../data/FeedList';

const AddSlice=createSlice({
    name:'Add',
    initialState:FeedList,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        }
    }

})
 

export const{addUser}=AddSlice.actions
export default AddSlice.reducer;
