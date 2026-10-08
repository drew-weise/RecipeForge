import { useState, useEffect } from 'react';

function App() {
  const [recipeCount, setRecipeCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/recipes/count')
        .then(response => response.json())
        .then(data => setRecipeCount(data));
  }, []);

  return (
      <main>
        <h1>RecipeForge</h1>
        <p>Your personal recipe collection.</p>

        <p>
          {recipeCount === null
              ? 'Loading recipes...'
              : `You have ${recipeCount} recipes!`}
        </p>
      </main>
  );
}

export default App;