import * as Location from "expo-location";

const getGeoLocation = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    setErrorMsg("Permission to access location was denied");
    return;
  }
  const location = await Location.getCurrentPositionAsync({});
  console.log(location);
  return location;
};

export default getGeoLocation;
