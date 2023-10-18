let formEl = document.querySelector("form");
let inputEl = document.querySelector("#triangle");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let a = parseInt(inputEl.value);
    numberOneTriangle(a);
});

function numberOneTriangle(a) {
    if (Number.isInteger(a) && a >= 1 && a <= 10) {
        for (let i = 1; i <= a; i++) {
            console.log("*".repeat(i));
        }
    } else {
        console.log(`Invalid: ${a} is not an integer between 1 and 10`);
    }
}
