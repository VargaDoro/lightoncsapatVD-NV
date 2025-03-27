import Lampa from "./Lampa.js";
import Info from "./Info.js";

export default class JatekTer{
    #lista = [];

    constructor(szElem) {
        let infoPanel = document.querySelector("aside")
        this.info = new Info(infoPanel)
        this.info.megjelenit()
        this.szElem = szElem;
        this.listaFeltolt();
        this.megjelenit();
        this.kivalasztEsemenykezelo()
    }

    listaFeltolt(){
        for (let i = 0; i < 9; i++) {
            let elem = Math.floor(Math.random()*2);
            this.#lista.push(elem);
        }
    }

    megjelenit(){
        for (let index = 0; index < this.#lista.length; index++) {
            const element = this.#lista[index];
            const KISELEM = new Lampa(element, index, this.szElem);
        }
    }

    kivalasztEsemenykezelo(){
        window.addEventListener("kivalaszt", (event)=>{
            console.log(event.detail)
            if(this.#lista[event.detail] === 1){
                this.#lista[event.detail]=0;
                this.info.megjelenit()
            }else{
                this.#lista[event.detail]=1;
                this.info.megjelenit()
            }
            this.szElem.innerHTML="";
            this.megjelenit();
        });
    }
}