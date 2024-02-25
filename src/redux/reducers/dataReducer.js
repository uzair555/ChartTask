import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Url} from '../../utils/BaseUrl';

const initialState = {
  userData: {},
  login : false,
};



export const dataReducer = createSlice({
  name: 'dataReducer',
  initialState,
 
    reducers: {
      setUser(state,action) {
        const user = action.payload;
        return {...state, userData:user,login:true}
      },
      removeUser(state,action) {
         return {...state, userData:{},login:false}
      }
    
  },
  extraReducers: {

  },
});

export const {setUser, removeUser} = dataReducer.actions;
export default dataReducer.reducer;
