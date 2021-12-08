import cardColor from "./modules/cardColor";
import dotsOnSmallWidth from "./modules/dotsOnSmallWidth";

window.addEventListener("DOMContentLoaded", () => {
    cardColor(".cards__card"); // установка цвета карточки в зависимости от ее класса
    dotsOnSmallWidth(".cards__descr"); // обрезка описания карточки и подстановка ... при ширине экрана менее 1200px
});
