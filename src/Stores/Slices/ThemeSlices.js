import {createSlice} from '@reduxjs/toolkit';

const ThemeSlices = createSlice({
    name:'theme',
    initialState:{
        dark: false
    },
    reducers:{
        darkTheme(state,action){
           state.dark = true
        },
        lightTheme(state,action){
            state.dark = false
        }

    }
})

export default ThemeSlices.reducer;
export const {darkTheme,lightTheme} = ThemeSlices.actions