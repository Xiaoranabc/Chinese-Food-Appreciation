import { useState } from "react";
import "./MainRecipe.css";

function MainRecipe() {

    const accordionDetails = [
        {title: "Dim Sum",
         ingredients: "1 cup all-purpose flour, 1/2 pound ground pork, 1/4 cup finely chopped green onions, 2 tablespoons soy sauce, 1 tablespoon sesame oil, 1/4 teaspoon ground white pepper, 1/4 cup chicken broth or water.",
         instructions: [
            "1. Mix flour, salt, and water to form a dough. Rest for 30 mins.",
            "2. Combine ground pork, cabbage, green onions, soy sauce, oyster sauce, sesame oil, rice vinegar, cornstarch, sugar, white pepper, and chicken broth in a bowl for the filling.",
            "3. Roll out dough and cut into small circles.",
            "4. Place filling in the center of each circle, pleat edges and seal dumplings, leaving a small opening at the top.",
            "5. Steam dumplings for 10-12 mins.",
            "6. Serve hot with dipping sauce of choice.",
        ],},
        {title: "Braised Pork",
         ingredients: "2 pounds pork shoulder or pork butt, cut into 2-inch cubes, 2 tablespoons vegetable oil, 1 medium onion, chopped, 3 cloves garlic, minced, 1 cup chicken broth, 1/2 cup soy sauce, 1/2 cup rice vinegar, 1/3 cup brown sugar, 1/3 cup hoisin sauce, 2 star anise, 2 cinnamon sticks",
         instructions: [
            "1. Heat a large, oven-safe pot or Dutch oven over medium-high heat. Add the vegetable oil and heat until hot.",
            "2. Season the pork cubes with salt and pepper. Add the pork to the pot and sear on all sides until browned.",
            "3. In the same pot, add the chopped onion and sauté until softened, about 3-4 minutes. Add the minced garlic and sauté for another 1 minute.",
            "4, Add the chicken broth, soy sauce, rice vinegar, brown sugar, hoisin sauce, star anise, cinnamon sticks, and dried red chili peppers (if using) to the pot. Stir to combine.",
            "5, Once boiling, cover the pot with a lid and transfer to a preheated oven at 325°F (160°C). Braise in the oven for 2.5 to 3 hours, until the pork is fork-tender and easily falls apart.",
            "6. Remove the pot from the oven and skim off any excess fat from the surface of the sauce.",
         ],},
         {title: "Chow Mein",
          ingredients: "12 oz boneless skinless chicken breasts, thinly sliced, 1 tbsp soy sauce, 1 tbsp cornstarch, 1 tsp sesame oil, 2 tbsp hoisin sauce, 1/2 cup chicken broth, 2 cloves garlic, minced, 1/2 cup julienned carrots, 1/2 cup sliced bell peppers, 1/2 cup sliced onions, 1/2 cup bean sprouts, 1/2 cup sliced cabbage",
          instructions: [
            "1. Marinate the chicken by combining soy sauce, oyster sauce, cornstarch, and sesame oil in a bowl. Add the chicken and let it marinate for 15 minutes.",
            "2. Whisk together oyster sauce, soy sauce, hoisin sauce, cornstarch, and chicken broth for the sauce. Set aside.",
            "3. Heat a wok or skillet over high heat. Add 1 tbsp of vegetable oil and minced garlic. Stir-fry for 30 seconds.",
            "4. Add the marinated chicken and cook until done. Remove from the wok and set aside.",
            "5. Add another tbsp of vegetable oil to the wok. Add carrots, bell peppers, and onions. Stir-fry for 2-3 minutes.",
            "6. Add bean sprouts and cabbage. Stir-fry for another 1-2 minutes.",
            "7. Return the cooked chicken to the wok. Pour in the sauce and cook for 1-2 minutes until thickened.",
            "8. Season with salt and pepper. Stir in sliced green onions.",
          ],},
    ];

    const [openRecipe, setOpenRecipe] = useState("");
    const [openIngredients, setOpenIngredients] = useState(false);
    const [openInstructions, setOpenInstructions] = useState(false);

    const accordions = accordionDetails.map(item => {

        const isOpen = item.title === openRecipe;
        const isIngreOpen = item.ingredients ===openIngredients;

        return (
            <div className="main-accordion" key={item.title}>
                <button aria-label="open recipe" className="accordion-title-button" onClick={() => setOpenRecipe(item.title === openRecipe ? '' : item.title)}>
                    {item.title}
                    <span className={`accordion-icon ${isOpen ? 'accordion-icon-open' : 'accordion-icon-close'}`}></span>
                </button>
                {item.title === openRecipe && (
                    <div className="accordion-recipe-detial">
                        <div className="accordion-recipe-ingre">
                            <button aria-label="open ingredients" className="accordion-ingre-button" onClick={() => setOpenIngredients(item.title === openIngredients ? '' : item.title)}>
                                Ingredients
                            </button>
                            {item.title === openIngredients && <p className="accordion-text">{item.ingredients}</p>}
                        </div>
                        <div className="accordion-recipe-instr">
                            <button aria-label="open instructions" className="accordion-instr-button" onClick={() => setOpenInstructions(item.title === openInstructions ? '' : item.title)}>
                                Instructions
                            </button>
                            {item.title === openInstructions && (
                                <ul className="accordion-text">
                                    {item.instructions.map(instruction => (
                                        <li key={instruction}>{instruction}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                )}
            </div>
        );
    });

    return (
        <div id="#main-content">
            <h2>Here is the special recipe for you today!</h2>
            <div className="main-accordions">
                {accordions}
            </div>
        </div>
    )
}

export default MainRecipe;