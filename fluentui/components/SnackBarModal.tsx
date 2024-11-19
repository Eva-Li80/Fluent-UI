import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Modal, Portal, Text, Button, Snackbar } from "react-native-paper";

const SnackBarModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [snackBarvisible, setSnackBarVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const onToggleSnackBar = () => setSnackBarVisible(!snackBarvisible);
  const onDismissSnackBar = () => setSnackBarVisible(false);
  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle} // Modalens "ruta"
          style={styles.modalOverlay} // Overlay-stil
        >
          <View style={styles.snackContainer}>
            <Button onPress={onToggleSnackBar}>
              {snackBarvisible ? "Dölj snack" : "Visa snack"}
            </Button>
            <Snackbar
              visible={snackBarvisible}
              onDismiss={onDismissSnackBar}
              action={{
                label: "Undo",
                onPress: () => {
                  // Do something
                },
              }}
            >
              <Text style={styles.snackText}>
                Hej där kexet, där står du och smular
              </Text>
            </Snackbar>
          </View>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 10 }} onPress={showModal} mode="contained">
        Visa SnackBarModal
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
  snackContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    marginTop: 15,
    textAlign: "center",
  },
  snackText: {
    color: "white",
  },
});

export default SnackBarModal;
