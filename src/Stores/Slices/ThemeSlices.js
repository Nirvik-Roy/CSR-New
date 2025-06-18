import {createSlice} from '@reduxjs/toolkit';

const ThemeSlices = createSlice({
    name:'theme',
    initialState:{
        dark:false
    },
    reducers:{
        toggleTheme(state,action){
           state.dark == !state.dark
        }
    }
})

export default ThemeSlices.reducer;
export const {toggleTheme} = ThemeSlices.actions