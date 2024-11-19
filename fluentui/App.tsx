import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import SegmentedButtonsModal from "./components/SegmentedButtonsModal";
import ListModal from "./components/ListModal";
import AvatarModal from "./components/AvatarModal";
import ButtonModal from "./components/ButtonModal";
import DrawerModal from "./components/DrawerModal";
import ProgressBarModal from "./components/ProgressBarModal";

export default function App() {
  const [visibleAvatar, setVisibleAvatar] = React.useState(false);
  const showAvatarModal = () => setVisibleAvatar(true);
  const hideAvatarModal = () => setVisibleAvatar(false);

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Välkommen till React Native Paper!</Text>
        <SegmentedButtonsModal />
        <ListModal />
        <AvatarModal
          hideAvatarModal={hideAvatarModal}
          visibleAvatar={visibleAvatar}
        />
        <Button mode="contained" onPress={showAvatarModal}>
          Visa Avatar Modal
        </Button>
        <ButtonModal />
        <DrawerModal />
        <ProgressBarModal />
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
