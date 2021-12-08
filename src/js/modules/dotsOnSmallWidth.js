export default function dotsOnSmallWidth(descriptionSelector) {
    function dots() {
        if (document.body.clientWidth <= 1200) {
            const descr = document.querySelectorAll(descriptionSelector);

            descr.forEach((text) => {
                if (text.innerText.length >= 84) {
                    const str = text.innerText.slice(0, 84) + "...";
                    text.innerHTML = str;
                }
            });
        } else {
            const descr = document.querySelectorAll(descriptionSelector);

            descr.forEach((text) => {
                const str = text.innerText.slice(0, 84);
                text.innerHTML = str;
            });
        }
    }

    dots();

    window.addEventListener("resize", () => {
        dots();
    });
}
