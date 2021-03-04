let element = document.body;
element.classList.toggle("dark-mode");

function displayPhrase() {
    let phrase = document.querySelector("#phrase");
    phrase.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}

function displayCatsUpper() {
    let cats = document.querySelector("#catsUpper");
    cats.setAttribute('style', 'white-space: pre;')
    cats.textContent = catsUpper;
}

function displayCatsMid() {
    let cats = document.querySelector("#catsMid");
    cats.setAttribute('style', 'white-space: pre;')
    cats.textContent = catsMid[Math.floor(Math.random() * catsMid.length)];
}

function displayCatsLower() {
    let cats = document.querySelector("#catsLower");
    cats.setAttribute('style', 'white-space: pre;')
    cats.textContent = catsLower;
}

displayPhrase();
displayCatsUpper();
displayCatsMid();
displayCatsLower();

setInterval(displayPhrase, 3000);
setInterval(displayCatsMid, 1000);
