import { Text, View, StyleSheet } from "react-native";

export const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.list} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  list: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#ccc",
  },
  itemText: {
    textAlign: "center",
  },
});
