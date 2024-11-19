import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Modal, Portal, Text, Button } from "react-native-paper";

const ButtonModal = () => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [numbOfClicks, setNumbOfClicks] = React.useState(0);
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => {
            setVisible(false);
            setNumbOfClicks(0);
          }}
          contentContainerStyle={styles.containerStyle} // Modalens "ruta"
          style={styles.modalOverlay} // Overlay-stil
        >
          <Button
            icon="camera"
            mode="contained"
            onPress={() => setNumbOfClicks(numbOfClicks + 1)}
          >
            Klicka på mig
          </Button>
          <Text style={styles.text}>Du har klickat {numbOfClicks} gånger</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 10 }} onPress={showModal} mode="contained">
        Visa ButtonModal
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
  text: {
    marginTop: 15,
    textAlign: "center",
  },
});

export default ButtonModal;
