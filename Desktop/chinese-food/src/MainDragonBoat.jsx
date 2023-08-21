import "./MainPanel.css";

function MainDragonBoat() {
    const dragonBoat = [
        {img: "/panel-zongzi.jpg",
         alt: "zongzi material rice and bean",
         title: "Dragon Boat Festival food",
         text:"Zongzi is the most well-known and traditional food associated with the Dragon Boat Festival. Zongzi are pyramid-shaped or cylindrical rice dumplings made from glutinous rice wrapped in bamboo leaves and secured with twine. They are typically filled with various fillings such as pork, salted egg yolk, mung beans, or chestnuts, and are then boiled or steamed for several hours. Zongzi are often eaten as a symbol of luck, prosperity, and family togetherness during the Dragon Boat Festival.  In addition to savory zongzi, there are also sweet zongzi that are enjoyed during the Dragon Boat Festival. Sweet zongzi are typically made with glutinous rice wrapped in bamboo leaves, but they are filled with sweet ingredients such as red bean paste and jujube paste",
        },
         {img: "/panel-dragon-boat.jpg",
         alt: "people in Dragon Boat race",
         title: "Drangon Boat Festival activity",
         text: "Dragon boat racing is the most popular and iconic activity associated with the Dragon Boat Festival. It involves racing long, narrow boats decorated with dragon heads and tails, with a team of paddlers rowing in unison to the beat of a drum. Dragon boat races are held in rivers, lakes, or other bodies of water, and they are often accompanied by cheering crowds, festive music, and colorful decorations. Dragon boat racing is not only a competitive sport but also a cultural event that brings communities together and promotes team spirit.",
        },
    ];

    const dragonBoatPanels = dragonBoat.map(item=> {
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
            <h2 className="panel-main-title">Dragon Boat Festival</h2>
            {dragonBoatPanels}
        </div>
    )
}

export default MainDragonBoat;