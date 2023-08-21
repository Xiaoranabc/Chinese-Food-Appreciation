import "./MainCuisine.css";

function MainCuisine({setPage}) {
    const cardsDetail = [
        {imgPath: "/cards-dimsum.jpg",
         title: "Dim Sum",
         alt: "white Dim Sum in basket",
         text: "A style of Cantonese cuisine that consists of a variety of small, bite-sized dishes typically served in steamer baskets. Dim sum can include items such as dumplings, steamed buns, rice rolls, and small dishes with various fillings and ingredients. It is very popular among South of China.",
        },

        {imgPath: "/cards-pork.jpg",
         title: "Braised Pork",
         alt: "red braised pork with green onion",
         text: "Chinese Braised Pork, also known as Hong Shao Rou or Red-cooked Pork, is a popular Chinese dish with a rich, sweet, and savory flavor. It's typically made by slow-cooking pork belly in a fragrant sauce until it becomes tender and succulent. Flavor is better with green onion.",
         
        },

        {imgPath: "/cards-chowmein.jpg",
         title: "Chow Mein",
         alt: "chow mein in a big bowl",
         text: "A Chinese stir-fried noodle dish that typically includes meat (such as chicken, beef, or pork), vegetables, and egg noodles. Chow Mein is often seasoned with soy sauce and other flavorful sauces, and it can be found in various styles, such as Cantonese-style and Shanghai-style.",
        },
    ]

    const cards = cardsDetail.map(item=> {
        return (
            <div className="main-card" key={item.title}>
                <div className="card-img-wrapper">
                    <img className="main-card-img" src={item.imgPath} alt={item.alt}/>
                </div>
                <h2 className="main-card-title">{item.title}</h2>
                <p className="main-card-text">{item.text}</p>
                <button aria-label="open recipe page" className="main-card-button" onClick={()=> setPage("MainRecipe")}>View recipe</button>
            </div>
        );
    });

    return (
        <div className="main-cuisine-cards" id="#main-content">
           {cards}
        </div>
    )
}

export default MainCuisine;