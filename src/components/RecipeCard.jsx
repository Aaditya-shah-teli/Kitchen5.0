import React from "react";
const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        strYoutube

    } = recipe;
    console.log(recipe);
    
    return (
        <div className="card">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
            </div>
            <a id="yt" href={strYoutube} style={{ margin: "10px 0"}}>Watch on youtube</a>
        </div>
    )
};

export default RecipeCard;