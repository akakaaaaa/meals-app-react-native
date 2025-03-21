import { View, Text, StyleSheet } from "react-native";

export const Subtitle = ({ children }) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    textAlign: "center",
    padding: 6,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 12,
  },
});
