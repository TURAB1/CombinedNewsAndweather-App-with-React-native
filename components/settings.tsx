import * as React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { DisplayHTML } from "react-native-display-html";
import { SelectList } from "react-native-dropdown-select-list";
import { RichEditor } from "react-native-pell-rich-editor";
import { SafeAreaView } from "react-native-safe-area-context";
import { create } from "react-test-renderer";

export const SettingsScreen = () => {
  const [baseUrl, setBaseUrl] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedLanguage, setSelectedLanguage] = React.useState("");

  const countries = [
    { key: "all", value: "All" },
    { key: "au", value: "Australia" },
    { key: "fr", value: "France" },
    { key: "in", value: "India" },
    { key: "ru", value: "Russia" },
    { key: "gb", value: "United kingdom" },
    { key: "us", value: "USA" },
    { key: "kr", value: "South Korea" }
  ]

  const languages = [
    { key: "all", value: "All" },
    { key: "en", value: "English" },
    { key: "fr", value: "French" },
    { key: "zh", value: "Chinese" },
    { key: "ko", value: "Korean" },
    { key: "jp", value: "Japanese" }
  ]


  return (
    <SafeAreaView style={styles.screenBackground}>
      <SelectList
        data={countries}
        setSelected={(val: any) => setSelectedCountry(val)}
        onSelect={() => console.log(selectedCountry)}
        save="key"
        placeholder="select country"
      />
      <SelectList
        data={languages}
        setSelected={(val: any) => setSelectedLanguage(val)}
        onSelect={() => console.log(selectedLanguage)}
        save="key"
        placeholder="select language"
      />
   
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screenBackground: {
    backgroundColor: "#007fff",
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  }
})