import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Prayer from "./components/prayer";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import getGeoLocation from "./lib/location";
const Separator = () => <View style={styles.separator} />;

const location = getGeoLocation();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Prayer name="Sahour" time="05:00" />
      <Prayer name="sobh" time="05:25" />
      <Prayer name="Thohr" time="05:25" />
      <Prayer name="Asr" time="05:25" />
      <Prayer name="Maghreb" time="05:25" />
      <Prayer name="Isha" time="05:25" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#70e000",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-around", // Align items horizontally
  },
});

export default App;
