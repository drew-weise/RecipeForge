package com.drewweise.recipeforge.recipe;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeRepository recipeRepository;

    public RecipeController(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping
    public String getRecipes() {
        return "Hello from RecipeForge!";
    }

    @GetMapping("/count")
    public long countRecipes() {
        return recipeRepository.count();
    }
}