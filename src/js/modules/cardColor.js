export default function cardColor(cardsSelector) {
    const cards = document.querySelectorAll(cardsSelector);

    cards.forEach((card) => {
        if (card.classList.contains("light-blue")) {
            card.querySelector(".cards__label").classList.add("light-blue-bg");
            card.querySelector(".cards__autor").classList.add(
                "light-blue-text"
            );
            card.querySelector(".cards__btn").classList.add("light-blue-bg");
        } else if (card.classList.contains("dark-blue")) {
            card.querySelector(".cards__label").classList.add("dark-blue-bg");
            card.querySelector(".cards__autor").classList.add("dark-blue-text");
            card.querySelector(".cards__btn").classList.add("dark-blue-bg");
        }
    });
}
