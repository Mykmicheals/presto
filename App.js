import * as Font from "expo-font";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import quickSandRegular from "./src/assests/fonts/Quicksand-Regular.ttf";

async function loadFonts() {
  await Font.loadAsync({
    "Quicksand-Regular": quickSandRegular,
  });
}

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
