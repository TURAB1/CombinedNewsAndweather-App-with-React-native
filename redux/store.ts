import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./reducers/news_reducer";

export const store =configureStore({
  reducer:{ 
    news:newsReducer
   
  }

})