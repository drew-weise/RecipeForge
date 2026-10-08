import { useState, useEffect } from 'react';

type Recipe = {
    recipeId: number;
    recipeTitle: string;
    recipeServings: number;
};

function App() {
    const [recipeList, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch('/api/recipes')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRecipes(data);
            });
    }, []);

  return (
      <main>
        <h1>RecipeForge</h1>
        <p>Your personal recipe collection.</p>

          {recipeList.map(recipe => (
              <div key={recipe.recipeId}>
                  <h2>{recipe.recipeTitle}</h2>
                  <p>Servings: {recipe.recipeServings}</p>
              </div>
          ))}

      </main>
  );
}

export default App;