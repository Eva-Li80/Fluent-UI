import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Modal,
  Portal,
  Text,
  Button,
  TouchableRipple,
} from "react-native-paper";

const TouchableRippleModal = () => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [numbOfClicks, setNumbOfClicks] = React.useState(0);
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle} // Modalens "ruta"
          style={styles.modalOverlay} // Overlay-stil
        >
          <TouchableRipple
            onPress={() => console.log("Pressed")}
            rippleColor="rgba(216, 39, 245, 0.31)"
            style={styles.touchableRippleStyle}
          >
            <Text style={styles.text}>Tryck någonstans ✨</Text>
          </TouchableRipple>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 10 }} onPress={showModal} mode="contained">
        Visa TouchableRippleModal
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
  touchableRippleStyle: {
    flex: 1,
  },
  text: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 25,
  },
});

export default TouchableRippleModal;
