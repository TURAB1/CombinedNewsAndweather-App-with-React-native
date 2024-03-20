import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { create } from "react-test-renderer";

export const SettingsScreen=()=> {
    const [baseUrl,setBaseUrl]=React.useState("");
    const [selectedCountry,setSelectedCountry]=React.useState("");
    const [selectedLanguage,setSelectedLanguage]=React.useState("");

    const countries=[
      {key:"au",value:"Australia"},
      {key:"fr",value:"France"},
      {key:"in",value:"India"},
      {key:"ru",value:"Russia"},
      {key:"gb",value:"United kingdom"},
      {key:"us",value:"USA"}

    ]

    const languages=[
        {key:"en",value:"English"},
        {key:"fr",value:"French"},
        {key:"zh",value:"Chinese"},
        {key:"ko",value:"Korean"},
        {key:"jp",value:"Japanese"}
     ]
    
    return (
      <SafeAreaView style={styles.screenBackground}>
        <SelectList 
          data={countries} 
          setSelected={setSelectedCountry}
          placeholder="select country"
        />
        <SelectList 
          data={languages} 
          setSelected={setSelectedLanguage}
          placeholder="select language"
        />

      </SafeAreaView>
    );
  }
  const styles=StyleSheet.create({
    screenBackground:{
      backgroundColor:"#007fff",
      width:"100%",
      height:"100%",
      flex: 1, 
      justifyContent: 'center', 
      alignItems:"center"
    }
  })