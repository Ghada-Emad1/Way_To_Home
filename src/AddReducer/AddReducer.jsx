import {createSlice} from '@reduxjs/toolkit'
//import { FeedList } from '../data/FeedList';

const AddSlice=createSlice({
    name:'Add',
    initialState:{
        addpost:[],
        addShelter :[]
    },
    reducers:{
        addUserpost:(state,action)=>{
            state.addpost.push(action.payload)
        },

        Shelter : ( state , actions)  =>{
            state.addShelter.push(actions.payload);
            console.log(actions);
        },
    }

})
 

export const{addUserpost ,Shelter}=AddSlice.actions
export default AddSlice.reducer;
