import TextUrlapView from "./TextUrlapView.js"
import { adatLeiras } from "./adat.js"
class UrlapView {
    #formAdat = {}
    #inputElemObjektumokLista = [] //itt tároljuk azokat az objektumokat, 
    //amelyek létrehozzák a form elemeket
    constructor(szuloElem) {
        szuloElem.append("<form>")
        this.formElem = szuloElem.find("form")

        this.htmlOsszeallit()
        /** Submit gomb kezelése
         * 1. létrehozom a gombhoz a "kapaszkodót"
         * 2. hozzárendelem az eseményt
         * 3. ebben az eseményben összegyűjtöm a form adatait
         * 4. és felküldöm a kontrollernek
         */


        this.submitElem = this.formElem.find("#submit")
       
       

        this.submitElem.on("click", (event) => {
            event.preventDefault()
            this.#inputElemObjektumokLista.forEach(
                (elem) => {
                    /* console.log(elem)
                    console.log(elem.key)
                    console.log(elem.getValue()) */
                    this.#formAdat[elem.key]=elem.getValue()
                }
            )
            /* this.#formAdat.nev = this.nevElem.val() */
          
            console.log(this.#formAdat)
            this.trigger("ujAdatHozzaAdasa")
        })

    }

    trigger(esemenyNev) {
        const e = new CustomEvent(esemenyNev, { detail: this.#formAdat })
        window.dispatchEvent(e)
    }

    numberUrlapElem(obj, key) {
        let txt = `<div class="mb-3 mt-3">
        <label for="${key}" class="form-label">${obj.megjelenes}</label>
        <input type="${obj.tipus}" class="form-control" 
                id="${key}" 
                placeholder="${obj.placeholder}"
                min="${obj.pattern.min}"
                max="${obj.pattern.max}"
                value="${obj.value}"
                name="${key}">
         </div>`
        return txt
    }
    htmlOsszeallit() {
        let txt = ""
        for (const key in adatLeiras) {
            switch (adatLeiras[key].tipus) {
                case "text":
                    this.#inputElemObjektumokLista.push(new TextUrlapView(this.formElem, adatLeiras[key], key))
                    break;
                case "number":
                    txt += this.numberUrlapElem(adatLeiras[key], key)
                    break;
                default:
                    break;
            }

        }
        //console.log(this.#inputElemObjektumokLista)
        txt += `<div class="mb-3 mt-3">
                    <input type="submit"  
                    id="submit" 
                    value="Küld">
            </div>`
        this.formElem.append(txt)

    }
}
export default UrlapView;