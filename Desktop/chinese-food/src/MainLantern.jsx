import "./MainPanel.css";

function MainLantern() {
    const lantern = [
        {img: "/panel-yuanxiao.jpg",
         alt: "white rice ball in a bowl with soup",
         title: "Lantern Festival food",
         text:"Yuanxiao, also known as tangyuan, are small round rice dumplings that are traditionally eaten during the Lantern Festival. They are made from glutinous rice flour mixed with water to form a soft dough, and they are typically filled with sweet fillings such as sesame, peanut, red bean paste, or fruit. Yuanxiao are boiled and served in a sweet syrup or soup, and they are symbolic of family togetherness and harmony.Yuanxiao is considered a symbolic food during the Lantern Festival, representing family togetherness and harmony. The round shape of the dumplings is believed to symbolize reunion and completenes.",
        },
         {img: "/panel-lantern.jpg",
         alt: "red lantern in dark sky",
         title: "Lantern Festival activity",
         text: "A popular activity during the Lantern Festival is solving lantern riddles. Riddles written on small pieces of paper are attached to the lanterns, and people try to guess the answers to the riddles. This adds an element of fun and challenge to the festival, as people gather around the lanterns, exchange riddles, and compete to solve them. Here are some examples of Lantern Riddles: What has a heart that doesn't beat?(Artichoke) Round as a pearl, deep as a well; if you don't break it, you can't eat. What is it?(egg) What is at the end of a rainbow?(The letter w)",
        },
    ];

    const lanternPanels = lantern.map(item=> {
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
            <h2 className="panel-main-title">Lantern Festival</h2>
            {lanternPanels}
        </div>
    )
}

export default MainLantern;