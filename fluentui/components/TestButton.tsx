import * as React from "react";
import { Button } from "react-native-paper";

const TestButton = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log("Pressed")}>
    Hej hej
  </Button>
);

export default TestButton;
