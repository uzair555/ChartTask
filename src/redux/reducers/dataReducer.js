import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Url} from '../../utils/BaseUrl';

const initialState = {
  Loader: false,
  bookData: [],
};

export const getBooksData = createAsyncThunk('getBooksData', async payload => {
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('x-api-key', '#b0@6hX8YasCq6^unOaPw1tqR');
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  return await fetch(`${Url}/books`, requestOptions)
    .then(response => response.json())
    .then(result => {
      return result.data;
    })
    .catch(error => console.log('error', error));
});

export const dataReducer = createSlice({
  name: 'dataReducer',
  initialState,
  reducers: {},
  extraReducers: {
    [getBooksData.fulfilled]: (state, action) => {
      state.Loader = false;
      state.bookData = action.payload;
    },
    [getBooksData.pending]: (state, action) => {
      state.Loader = true;
    },
    [getBooksData.rejected]: state => {
      state.Loader = false;
    },
  },
});

export const {} = dataReducer.actions;
export default dataReducer.reducer;
