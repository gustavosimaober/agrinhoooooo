let days = 0;
let growthStage = 0;
let treeSize = 150;
let waterGiven = 0;
let lightGiven = 0;
let waterNeeded = getRandomRequirement();
let lightNeeded = getRandomRequirement();
let playerRanking = [];

const treeImages = [
    "images/semente.png",
    "images/brotinho.png",
    "images/pequena.png",
    "images/media.png",
    "images/grande.png"
];

const growthTexts = [
    "🌱 A semente representa o início da produção agrícola. O campo planta, e a cidade se alimenta!",
    "🌿 O broto começa a crescer! Produtos agropecuários garantem comida na mesa dos cidadãos.",
    "🌳 A árvore pequena mostra a evolução da produção. O agro abastece mercados, feiras e restaurantes.",
    "🌾 A árvore média representa a tecnologia no campo. Máquinas e inovação fazem o agro mais eficiente para suprir as demandas urbanas.",
    "🏙️ A árvore adulta simboliza a integração total entre campo e cidade. O agro sustenta a economia, gera empregos e movimenta a sociedade!"
];

const celebrationTexts = [
    "🎉 A agricultura é a base da sociedade, garantindo sustento e desenvolvimento!",
    "🥳 O agro alimenta a cidade, fortalecendo o ciclo entre produção e consumo!",
    "🚜 O campo e a cidade trabalham juntos, garantindo qualidade de vida para todos!",
    "🔬 A tecnologia une agro e cidade, promovendo inovação e crescimento sustentável!",
    "🌍 A união entre campo e cidade impulsiona a economia e constrói um futuro melhor!"
];

function getRandomRequirement() {
    return Math.floor(Math.random() * 10) + 1;
}

function getRandomGrowth() {
    return Math.floor(Math.random() * 850) + 150;
}

function updateTree() {
    if (growthStage < treeImages.length - 1 && waterGiven >= waterNeeded && lightGiven >= lightNeeded) {
        growthStage++;
        document.getElementById("tree").src = treeImages[growthStage];
        treeSize += getRandomGrowth();
        document.getElementById("tree").style.width = treeSize + "px";

        document.getElementById("growth-message").textContent = growthTexts[growthStage];
        document.getElementById("celebration-message").textContent = celebrationTexts[growthStage];

        if (growthStage === treeImages.length - 1) {
            playerRanking.push(days);
            updateRanking();
        }

        waterGiven = 0;
        lightGiven = 0;
        waterNeeded = getRandomRequirement();
        lightNeeded = getRandomRequirement();
    }
}

function waterTree() {
    waterGiven++;
    document.getElementById("days").textContent = ++days;
    updateTree();
}

function giveSun() {
    lightGiven++;
    updateTree();
}

function resetGame() {
    days = 0;
    growthStage = 0;
    treeSize = 150;
    document.getElementById("tree").src = treeImages[0];
    document.getElementById("days").textContent = days;
}
