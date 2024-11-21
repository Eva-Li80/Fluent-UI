import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar, Modal, Portal } from "react-native-paper";

type AvatarModal = {
  visibleAvatar: boolean;
  hideAvatarModal: () => void;
};

const AvatarModal = ({ visibleAvatar, hideAvatarModal }: AvatarModal) => {
  return (
    <Portal>
      <Modal
        visible={visibleAvatar}
        onDismiss={hideAvatarModal}
        contentContainerStyle={styles.modal}
      >
        <View style={styles.container}>
          <Text style={styles.txt}>Avatar components.</Text>
          <Text style={{marginTop: 20, fontSize: 17}}>Avatar icons</Text>
          <View style={styles.avatar}>
            <Avatar.Icon size={32} icon="mail" />
            <Avatar.Icon size={48} icon="phone" style={{margin: 20, backgroundColor: "pink"}}/>
            <Avatar.Icon size={64} icon="folder" />
          </View>
          <Text style={{marginTop: 20, fontSize: 17}}>Avatar Images</Text>
          <View style={styles.avatar}>
          <Avatar.Image size={32} source={require("../assets/profile.png")} />
          <Avatar.Image size={48} source={require("../assets/icin.png")} style={{margin: 20}}/>
          <Avatar.Image size={64} source={require("../assets/profiles.png")} />
          </View>
          <Text style={{marginTop: 20, fontSize: 17}}>Avatar Text</Text>
          <View style={styles.avatar}>
          <Avatar.Text size={64} label="E" color="pink" />
          <Avatar.Text size={64} label="I" color="pink" style={{margin: 20}}/>
          <Avatar.Text size={64} label="N" color="pink" />
          </View>
     
        </View>
      </Modal>
    </Portal>
  );
};

export default AvatarModal;

const styles = StyleSheet.create({
  modal: {
    alignSelf: "center",
    height: 500,
    width: 300,
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  txt: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 20
  },
  avatar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  }
});
