import { View, Text, StyleSheet } from "react-native";

export const MealDetails = ({ selectedMeal }) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
      <Text style={styles.detailItem}>
        {selectedMeal.complexity.toUpperCase()}
      </Text>
      <Text style={styles.detailItem}>
        {selectedMeal.affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
