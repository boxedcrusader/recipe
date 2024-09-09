import { useEffect, useState } from 'react';
import Button from '../components/Button'
import 'ldrs/spiral'

const RandomRecipeIngredients = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const numberOfRecipes = 15;

    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=${numberOfRecipes}&apiKey=${apiKey}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }

        const data = await response.json();

        const recipesWithIngredients = data.recipes.map(recipe => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
          ingredients: recipe.extendedIngredients.map(ingredient => ingredient.original).join(', '),
          href: recipe.sourceUrl
        }));

        setRecipes(recipesWithIngredients);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <center>
        <l-spiral
        size="100"
        speed="0.9"
        color="white" 
        ></l-spiral>
      </center>);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='container'>
      <ul id='recipe-list' className='recipe-list'>
        {recipes.map((recipe) => (
          <li key={recipe.id} className='recipe-item'>
            <img src={recipe.image} alt={recipe.title} width="200" />
            <h2>{recipe.title}</h2>
            <p>
              <strong>Ingredients:</strong> {recipe.ingredients}
            </p>
            <Button 
                source={recipe.href}
              />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomRecipeIngredients;
