import JatekTer from "./JatekTer.js";
import Info from "./Info.js";

let JatekterElem = document.getElementsByClassName("jatekter")[0];
new JatekTer(JatekterElem);

let InfoELem = document.querySelector("body");
new Info(InfoELem);