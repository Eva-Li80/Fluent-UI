import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import TestButton from "./components/TestButton";

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Välkommen till React Native Paper!</Text>
        <TestButton />
        <Button mode="contained" onPress={() => console.log("Tryck!")}>
          Klicka här
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
