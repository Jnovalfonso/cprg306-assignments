"use client";

import {useState, useEffect} from "react";

export default function MealIdeas({itemName}) {
    const [mealId, setMealId] = useState('');
    const [meals, setMeals] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        if (itemName) {
            fetchMealIdeas(itemName); 
        }
    }, [itemName]);

    useEffect(() => {
        if (mealId) {
            fetchIngredients(mealId); 
        }
    }, [mealId]);

    const fetchMealIdeas = async (ingredient) => {
        try {
            setMeals([]); 
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            
            if (data.meals) {
                setMeals(data.meals);
            } else {
                alert("No meals found for this ingredient.");
            }
        } catch (error) {
            alert(`Error fetching data: ${error}`);
        }
    };

    const fetchIngredients = async (id) => {
        try {
            setIngredients([]); 
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const data = await response.json();
            if (data.meals) {
                const meal = data.meals[0];
                const ingredients = [];
    
                for (let i = 1; i <= 20; i++) {
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];
    
                    if (ingredient) {
                        ingredients.push({
                            name: ingredient,
                            measure: measure || "", 
                        });
                    }
                }
    
                setIngredients(ingredients);
            } else {
                alert("No ingredients found.");
            }
        } catch (error) {
            alert(`Error fetching data: ${error}`);
        }
    };

    return (
        <div>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="my-2 ">
                        <button key={meal.idMeal} className="text-left border-2 p-2 hover:bg-slate-300 transition-colors duration-200" onClick={() => setMealId(meal.idMeal)}>{meal.strMeal}</button>
                        {mealId === meal.idMeal && ingredients.length > 0 && (
                            <div>
                                <ul>
                                    {ingredients.map((ingredient) => (
                                        <li key={ingredient.name} className="text-left">
                                            {ingredient.name} - {ingredient.measure}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );

}
