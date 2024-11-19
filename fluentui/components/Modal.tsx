import { ReactNode } from "react";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Portal, Modal, Button } from "react-native-paper";

type ModalProps = {
  buttonTitle: string;
  children: ReactNode;
};
const GenericModal = (props: ModalProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <View style={styles.portal}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={toggleVisibility}
          contentContainerStyle={styles.modal}
        >
          {props.children}
        </Modal>
      </Portal>
      <Button
        style={{ marginTop: 10 }}
        mode="contained"
        onPress={toggleVisibility}
      >
        {props.buttonTitle}
      </Button>
    </View>
  );
};

export default GenericModal;

const styles = StyleSheet.create({
  portal: {
    backgroundColor: "transparent",
    opacity: 3,
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    alignItems: "center",
  },
  button: {
    marginTop: 10,
  },
});
