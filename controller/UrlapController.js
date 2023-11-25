import UrlapView from "../view/UrlapView.js";


class UrlapController {
    constructor() {   
        new UrlapView($(".urlap"))

        $(window).on("ujAdatHozzaAdasa",(event)=>{
            console.log("Az űrlap adatait megkapja a kontroller")
            console.log(event.detail)
             //adatbázisba beilleszteni a kapott adatot
             //dataService.postAxios(apiVegpont, event.detail)
        })

        $(window).on("torol",()=>{
            //adatbázis tábla egy sorának a törlése
        })
    }
}
export default UrlapController;
