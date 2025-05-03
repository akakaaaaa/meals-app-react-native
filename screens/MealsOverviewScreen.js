import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data";

import MealsList from "../components/MealsList/MealsList";

export const MealsOverviewScreen = ({ route, navigation }) => {
  const id = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === id
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [id, navigation]);

  return <MealsList items={displayedMeals} />;
};
