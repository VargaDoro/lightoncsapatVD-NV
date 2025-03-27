export default class Lampa{
    #adat;
    #index;
    constructor(adat, index, szElem){
        this.#adat = adat;
        this.#index = index;
        this.szElem = szElem;
        this.megjelenit();
        this.hozzaad();
    }

    
    megjelenit(){
       
        let html = `<div class = "elem" style="background-color:${this.#adat===0?'green':'orange'}">
                      
                    </div>`;
        this.szElem.insertAdjacentHTML("beforeend", html);
    }

    hozzaad(){
        this.elem = document.querySelector(".elem:last-child");
        this.elem.addEventListener("click", ()=>{

            const e = new CustomEvent("kivalaszt", {detail : this.#index});  
            window.dispatchEvent(e);
        });
    }
}