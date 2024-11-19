import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  ProgressBar,
  RadioButton,
} from "react-native-paper";

const ProgressBarModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState("first");
  const [progressCounter, setProgressCounter] = React.useState(0.25);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function onRadioBtnClick(name: string, value: number) {
    setChecked(name);
    setProgressCounter(value);
  }

  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle} // Modalens "ruta"
          style={styles.modalOverlay} // Overlay-stil
        >
          <ProgressBar progress={progressCounter} color={"plum"} />
          <View style={styles.radioBtnBox}>
            <RadioButton
              value="0.25"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => onRadioBtnClick("first", 0.25)}
            />
            <RadioButton
              value="0.25"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => onRadioBtnClick("second", 0.5)}
            />
            <RadioButton
              value="0.25"
              status={checked === "third" ? "checked" : "unchecked"}
              onPress={() => onRadioBtnClick("third", 0.75)}
            />
            <RadioButton
              value="0.25"
              status={checked === "fourth" ? "checked" : "unchecked"}
              onPress={() => onRadioBtnClick("fourth", 1)}
            />
          </View>
          <Button
            style={{ marginTop: 10 }}
            onPress={() => {
              setProgressCounter(0);
            }}
            mode="contained"
          >
            Rensa
          </Button>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 10 }} onPress={showModal} mode="contained">
        Show ProgressBarModal
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10, // Gör hörnen rundade
    width: Dimensions.get("window").width * 0.8, // Gör den 80% av skärmens bredd
    height: Dimensions.get("window").height * 0.7,
    maxWidth: 600, // Maxbredd för större skärmar
    alignSelf: "center", // Centrerar modalen horisontellt
  },
  modalOverlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Svart overlay med transparens
  },
  radioBtnBox: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default ProgressBarModal;
