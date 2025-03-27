import Lampa from "./Lampa.js";
import Info from "./Info.js";

export default class JatekTer{
    #lista = [];
    #lekapcsolt=0;

    constructor(szElem) {
        this.listaFeltolt();
        let infoPanel = document.querySelector("aside")
        this.info = new Info(infoPanel)
        this.allapot();
        this.info.megjelenit(this.#lekapcsolt)
        this.szElem = szElem;
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
            if(this.#lista[event.detail] === 1){
                this.#lista[event.detail]=0;
            }else{
                this.#lista[event.detail]=1;
                
            }
            this.szElem.innerHTML="";
            this.megjelenit();
            this.allapot();
            this.info.megjelenit(this.#lekapcsolt)
        });
    }

    allapot(){
        this.#lekapcsolt=0;
        for (let index = 0; index < this.#lista.length; index++) {
            if (this.#lista[index]===0){
                this.#lekapcsolt+=1;
            }
            
        }
    }
}