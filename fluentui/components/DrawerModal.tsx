import * as React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { Modal, Portal, Button, Drawer } from "react-native-paper";
import TestButton from "./TestButton";

const DrawerModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [activeOne, setActiveOne] = React.useState("");
  const [showDrawer, setShowDrawer] = React.useState(false);

  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle} // Modalens "ruta"
          style={styles.modalOverlay} // Overlay-stil
        >
          <Button
            onPress={() => {
              setShowDrawer(!showDrawer);
            }}
            style={styles.openBtn}
          >
            <Text>Öppna drawer</Text>
          </Button>

          {showDrawer && (
            <>
              <Drawer.Section title="Alternativ 1" style={styles.drawerSection}>
                <Drawer.Item
                  label="First Item"
                  icon={"bird"}
                  active={activeOne === "first"}
                  onPress={() => setActiveOne("first")}
                />
                <Drawer.Item
                  icon={"bomb"}
                  label="Second Item"
                  active={activeOne === "second"}
                  onPress={() => setActiveOne("second")}
                />
              </Drawer.Section>
              <Drawer.Section title="Alternativ 2" style={styles.drawerSection}>
                <Drawer.Item
                  label="Third Item"
                  icon={"car"}
                  active={activeOne === "third"}
                  onPress={() => setActiveOne("third")}
                />
                <Drawer.Item
                  icon={"chat-sleep"}
                  label="Fourth Item"
                  active={activeOne === "fourth"}
                  onPress={() => setActiveOne("fourth")}
                />
              </Drawer.Section>
            </>
          )}
        </Modal>
      </Portal>
      <Button style={{ marginTop: 10 }} onPress={showModal} mode="contained">
        Visa DrawerModal
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
  openBtn: {},
  drawerSection: {
    backgroundColor: "lightgrey",
  },
});

export default DrawerModal;
