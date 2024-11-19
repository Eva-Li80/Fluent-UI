import { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import GenericModal from "./Modal";

const SegmentedButtonsModal = () => {
  const [value, setValue] = useState("");

  return (
    <GenericModal buttonTitle={"Show segmented buttons"}>
      <Text style={styles.text}>{value}</Text>
      <SegmentedButtons
        onValueChange={setValue}
        value={value}
        buttons={[
          {
            value:
              "Why did the bicycle fall over? Because it was two-tired! 🚲😄",
            label: "Press me!",
            icon: "emoticon-outline",
          },
          {
            value:
              "Why don’t oysters donate to charity? Because they’re shellfish! 🦪😄",
            label: "Press me!",
            icon: "emoticon-outline",
          },
          {
            value:
              "Why don’t skeletons fight each other? Because they don’t have the guts! 😄",
            label: "Press me!",
            icon: "emoticon-outline",
          },
        ]}
      ></SegmentedButtons>
    </GenericModal>
  );
};

export default SegmentedButtonsModal;

const styles = StyleSheet.create({
  text: {
    margin: 10,
  },
});
