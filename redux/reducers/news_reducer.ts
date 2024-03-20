import {  ToastAndroid,Platform,Alert } from "react-native";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchingNewsData=createAsyncThunk("fetchingData",async(category:string)=>{
    let baseUrl="https://newsdata.io/api/1/news?apikey=pub_398597730d74d20392b106ad0dd36c1322456&category="+category;
    console.log("url::"+baseUrl);
    const res=await fetch(baseUrl);
    const final=await res.json();
  return final;
});

const newsSlice=createSlice({
  name:"news",
  initialState: {
    isLoading:false,
    error:false,
    data:null,
    category:"science",
    city:"seoul",
    country:"kor"
    

  },
  extraReducers:(builder)=>{
   builder.addCase(fetchingNewsData.pending,(state,action)=>{
    state.isLoading=true
    });
   builder.addCase(fetchingNewsData.fulfilled,(state:any,action)=>{
    state.isLoading=false
    state.data=action.payload
    console.log("fetch news successful")
   }) 
   builder.addCase(fetchingNewsData.rejected,(state,action)=>{
    state.isLoading=false;
    state.error=true;
    console.log("fetching news error ");
   })
  },
  reducers:{
   setCategory:(state,action)=>{
    state.category=action.payload;
    console.log(state.city);

   }

  }

})

  
export const {setCategory}=newsSlice.actions;
export default newsSlice.reducer;
 
  