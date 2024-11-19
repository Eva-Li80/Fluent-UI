import * as React from "react";
import { Avatar, Button, Card, IconButton, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import GenericModal from "./Modal";

const CardModal = () => (
  <GenericModal buttonTitle="Show card">
    <Text style={styles.content}>Exampel Card component</Text>
    <Card style={styles.card}>
      <Card.Title
        title="Cats"
        subtitle="Info about cats"
        left={(props) => <Avatar.Icon {...props} icon="paw-outline" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
      />

      <Card.Cover
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
      <Card.Content style={styles.content}>
        <Text variant="bodyMedium">
          Cats are independent, playful, and curious. They often communicate
          with purring, meowing, and body language.
        </Text>
      </Card.Content>
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Read more</Button>
      </Card.Actions>
    </Card>
  </GenericModal>
);

export default CardModal;

const styles = StyleSheet.create({
  card: {
    width: "80%",
  },
  content: {
    marginTop: 5,
    marginBottom: 5,
  },
});
