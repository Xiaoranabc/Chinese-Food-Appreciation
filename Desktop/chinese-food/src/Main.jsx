import MainHome from "./MainHome";
import MainCuisine from "./MainCuisine";
import MainRecipe from "./MainRecipe";
import MainMidAutumn from "./MainMidAutumn";
import MainDragonBoat from "./MainDragonBoat";
import MainLantern from "./MainLantern";
import Privacy from "./Privacy";

function Main({page, setPage}) {
    return(
        <div>
            {page=== "MainHome" && <MainHome/>}
            {page=== "MainCuisine" && <MainCuisine setPage={setPage} />}
            {page=== "MainRecipe" && <MainRecipe/>}
            {page=== "MainMidAutumn" && <MainMidAutumn/>}
            {page=== "MainDragonBoat" && <MainDragonBoat/>}
            {page=== "MainLantern" && <MainLantern/>}
            {page=== "Privacy" && <Privacy/>}
        </div>
       
    )
}

export default Main;