
import * as React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from './components/settings';
import {useSelector, useDispatch} from 'react-redux';
import { fetchingNewsData } from './redux/reducers/news_reducer'; 
import { HomeScreen } from './components/home';
import { WeatherInfoScreen } from './components/WeatherInfo';

function MainNews(): React.JSX.Element {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch<any>();

  React.useEffect( ()=>{
    dispatch(fetchingNewsData("science"));
  },[]);

  return (
    <NavigationContainer>
      <Tab.Navigator   
       screenOptions={{headerShown: false}} >
        <Tab.Screen   
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("./assets/icons/home_icon.png")}
                />
              );
            },
          }} />
        <Tab.Screen 
        name="Weather" 
        component={WeatherInfoScreen}
        options={{
          tabBarIcon: ({size,focused,color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("./assets/icons/weather_icon.png")}
              />
            );
          },
        }}  
        />
        <Tab.Screen 
          name="Setting" 
          component={SettingsScreen}
          options={{
          
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={require("./assets/icons/setting_icon.png")}
                />
              );
            },
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerSection:{
    marginTop:10,  
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
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
    backgroundColor:"#0E86D4",
    borderRadius:2,
    height:30,
    width:75,
    justifyContent:"center",
    marginTop:10
  },
  buttonText:{
  color:"white"
  },
  scrollViewContainter:{
    marginTop:20,
    height:570, 
  }

});

export default MainNews;
