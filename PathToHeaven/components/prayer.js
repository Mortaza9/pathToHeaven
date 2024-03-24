import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Prayer = ({ name, time }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.prayerDetails}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <BouncyCheckbox
        size={30}
        fillColor="#3e19d2"
        isChecked={isChecked}
        onPress={(isChecked) => setIsChecked(isChecked)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  prayerDetails: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 5,
  },
  time: {
    fontSize: 16,
    color: "#666666",
  },
});

export default Prayer;
