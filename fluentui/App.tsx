import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import SegmentedButtonsModal from "./components/SegmentedButtonsModal";
import ListModal from "./components/ListModal";
import AvatarModal from "./components/AvatarModal";
import ButtonModal from "./components/ButtonModal";
import DrawerModal from "./components/DrawerModal";
import ProgressBarModal from "./components/ProgressBarModal";
import ThemeProvider, { useTheme } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <MainAppContent />
    </ThemeProvider>
  );
}

const MainAppContent = () => {
  const { toggleTheme, isDarkTheme } = useTheme();
  const [visibleAvatar, setVisibleAvatar] = React.useState(false);
  const showAvatarModal = () => setVisibleAvatar(true);
  const hideAvatarModal = () => setVisibleAvatar(false);

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20}}>Välkommen till React Native Paper!</Text>
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
      <SegmentedButtonsModal />
      <ListModal />
      <Text style={{ marginTop: 300 }}>
        Använder {isDarkTheme ? "mörkt" : "ljust"} tema
      </Text>
      <Button mode="contained" onPress={toggleTheme}>
        Växla tema
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 100
  },
});
