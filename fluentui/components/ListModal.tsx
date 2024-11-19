import { View } from "react-native";
import GenericModal from "./Modal";
import { Button, List } from "react-native-paper";
import { useState } from "react";

type Item = {
  name: string;
  icon: string;
};

const ListModal = () => {
  const [items, setItems] = useState<Item[]>([
    {
      name: "Item 1",
      icon: "star",
    },
  ]);

  function addItem() {
    const newItem = {
      name: `Item ${items.length + 1}`,
      icon: "star",
    };
    setItems([...items, newItem]);
  }

  return (
    <GenericModal buttonTitle={"Show list component"}>
      <View>
        <List.Section title="List with icons">
          {items.map((i) => (
            <List.Item
              key={i.name}
              title={i.name}
              left={(props) => <List.Icon {...props} icon={i.icon} />}
            />
          ))}
        </List.Section>
        <Button onPress={addItem}>Add item</Button>
      </View>
    </GenericModal>
  );
};

export default ListModal;
