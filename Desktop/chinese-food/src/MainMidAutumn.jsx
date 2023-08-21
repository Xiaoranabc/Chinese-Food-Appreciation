import "./MainPanel.css";

function MainMidAutumn() {
    const midAutumn = [
        {img: "/panel-mooncake.jpg",
         alt: "white moon cake with Chinese tradistional pattern",
         title: "Mid-Autumn Festival food",
         text: " Mooncakes are the most iconic food of the Mid-Autumn Festival. These round-shaped pastries usually have a sweet filling made of lotus seed paste, red bean paste, or other sweet ingredients, and are often decorated with intricate designs on the top to symbolize the moon. Mooncakes are often given as gifts and shared among family and friends during the festival.Mooncakes have a wide variety of fillings, including lotus seed paste, red bean paste, black sesame paste, and various types of nuts, seeds, and dried fruits. Some mooncakes also contain salted duck egg yolks, which symbolize the full moon during the festival. The crust is typically made from flour, sugar, and oil, and it can be plain or intricately designed with patterns or characters."
        },
         {img: "/panel-moon.jpg",
          alt: "light moon in dark sky",
         title: "Mid-Autumn Festival activity",
         text: "Moon gazing is an important activity during the Mid-Autumn Festival. Families gather outdoors or on rooftops to appreciate the full moon, which is believed to be the brightest and fullest on this night. Lanterns may be lit to create a festive atmosphere, and people often enjoy mooncakes and other festival foods while admiring the moon. History and Cultural Significance: Moon gazing has a long history and cultural significance in many cultures, including Chinese, Japanese, Korean, Vietnamese, and other Asian cultures, as well as in some Western and Indigenous cultures. Moon gazing is often associated with the lunar calendar and is considered a time for celebration, reflection, and connection with nature.",
        },
    ];

    const midAutumnPanels = midAutumn.map(item=> {
        return (
            <div key={item.title}>
                <div className="img-wrapper">
                    <img className="main-panel-img" src={item.img} alt={item.alt}/>
                </div>
                <h3 className="main-panel-title">{item.title}</h3>
                <div className="main-panel-text">{item.text}</div>
            </div>
        )
    });

    return (
        <div className="main-panel" id="#main-content">
            <h2 className="panel-main-title">Mid-Autumn Festival</h2>
            {midAutumnPanels}
        </div>
    )
}

export default MainMidAutumn;