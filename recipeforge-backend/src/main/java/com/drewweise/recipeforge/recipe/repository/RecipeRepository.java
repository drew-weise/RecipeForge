package com.drewweise.recipeforge.recipe.repository;

import com.drewweise.recipeforge.recipe.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {

}