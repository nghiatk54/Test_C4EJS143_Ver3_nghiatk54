let formEl = document.querySelector("form");
let aEl = document.querySelector("#a");
let bEl = document.querySelector("#b");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    let a = parseInt(aEl.value);
    let b = parseInt(bEl.value);
    if (a >= b) {
        alert("Please enter number a < number b");
        aEl.value = "";
        bEl.value = "";
        return;
    }

    totalPrime(a, b);
});

function totalPrime(a, b) {
    total = 0;
    for (let i = a; i <= b; i++) {
        if (checkPrime(i)) {
            total += i;
        }
    }
    alert(`The sum of prime numbers from ${a} to ${b} is ${total}`);
}

function checkPrime(a) {
    if (a === 1 || a === 2) {
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
