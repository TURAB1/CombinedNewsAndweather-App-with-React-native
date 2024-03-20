import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SelectDropdown from 'react-native-select-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import { fetchingNewsData } from '../redux/reducers/news_reducer';
import { setCategory } from '../redux/reducers/news_reducer';   


export const HomeScreen=()=> {

  const [newsClick,setNewsClick]=React.useState(false);
  const [newsUrl,setNewsUrl]=React.useState("");
  const [newsImage,setNewsImage]=React.useState("");
  const [newsContent,setNewsContent]=React.useState("");


  const news= useSelector((state:any)=>state.news);

  const dispatch = useDispatch<any>();
 
const getNewsList=()=>{
    
    if (news.data !==null){
     return  news.data.results.map((item:any, index:number) => {
      return (
        <View  key={index} style={styles.newsList}>
        <Pressable onPress={()=>handleNewsClick(item.image_url,item.description)}>
          <Text>{item.title}</Text>
        </Pressable>
        <View style={styles.newsUnderline}></View>
        </View>
        );
    });
   }

 }


const NewsRead=()=>{
  return(
    <View style={{marginTop:20}}>
     {
     newsImage!=null?
      <Image style={styles.newsImage} source={{uri:newsImage}}/>:<Text style={styles.infoUnavailable}>Image is not available</Text>
     }
     
     {
     newsContent!=null?
     <ScrollView><Text style={styles.newsContent}>{newsContent}</Text></ScrollView>:<Text style={styles.infoUnavailable}>News description is not available</Text>
     }
    </View>

   );

 }
 const setNewsCategory=(category:any)=>{
  console.log(category)
  dispatch(setCategory(category));
  dispatch(fetchingNewsData(category));
  setNewsClick(false);
  
 }

 const handleNewsClick=(newsImage:string,description:any)=>{
      // setNewsUrl(newsUrl)
      setNewsImage(newsImage);
      setNewsContent(description);
     setNewsClick(true);
     console.log("news clicked");
     console.log(newsUrl);
   }





 return (
   <SafeAreaView >
      <View  style={styles.headerSection} > 
        <Pressable style={styles.button} onPress={()=>{setNewsCategory("science")}}>
          <Text style={styles.buttonText}>Science</Text> 
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{setNewsCategory("business")}}>
          <Text style={styles.buttonText}>Business</Text> 
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{setNewsCategory("health")}}>
          <Text style={styles.buttonText}>Health</Text> 
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{setNewsCategory("technology")}}>
          <Text style={styles.buttonText}>Technology</Text> 
        </Pressable>
      </View> 
      <View style={styles.screenBackground}>
      {
        !newsClick?
          <View style={styles.scrollViewContainter}>
            <ScrollView>
              {
              getNewsList()
              }
            </ScrollView>
          </View>:
          <NewsRead/> 
      } 
      </View>
   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
    screenBackground:{
    backgroundColor:"#007fff",
    width:"100%",
    height:"100%"
    },
    headerSection:{
      height:60 ,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
      backgroundColor:"#080E4B"
    },
    newsList:{
      marginLeft:10,
      marginRight:10, 
      height:60,
      justifyContent:"center"
    },
    newsUnderline:{
      backgroundColor:"#B1B1B1",
      height:1,
      marginTop:5
    },
    navBarSection:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center",
      position:"absolute",
      bottom:0,
      marginTop:20
    },
  
    icon:{
      height:60,
      width:60 
    },
  
  button:{
    backgroundColor:"#080E4B",
    borderRadius:2,
    height:30,
    width:75,
    justifyContent:"center",
   
  },
  buttonText:{
   color:"white"
  },
  scrollViewContainter:{
    marginTop:20,
    height:570,
   
  },
  newsImage:{
    height:250,
    width:250,
    alignSelf:"center"
  },
  infoUnavailable:{
    color:"red",alignSelf:"center"
  },
  newsContent:{
    marginLeft:5,
    marginRight:5
  }
  
  });