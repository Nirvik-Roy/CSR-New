import { configureStore } from "@reduxjs/toolkit";
import ThemeSlices from './Slices/ThemeSlices'
const store = configureStore({
    reducer:{
        theme:ThemeSlices
    }
})

export default store;