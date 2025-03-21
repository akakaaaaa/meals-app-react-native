import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";

export const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootConatiner}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails selectedMeal={selectedMeal} />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingridients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootConatiner: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24,
    margin: 8,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
