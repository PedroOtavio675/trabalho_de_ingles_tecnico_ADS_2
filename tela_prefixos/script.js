

fetch('banco.json')
    .then(response => response.json())
    .then(data => {
        palavrasJson = data;
        carregarPalavras();
    });

function carregarPalavras() {
    const container = document.getElementById("container_cards_id");
    palavrasJson.forEach(palavra => {
        const div = document.createElement("div");
        div.classList.add("card_palavra");
        div.innerHTML = `
        <div onclick="falar('${palavra.palavra}')">
            <h2>${palavra.palavra}</h2>
            <p>${palavra.pronuncia}</p>

            <p style="font-size: 20px; padding: 5px;">Tradução: ${palavra.traducao}</p>
        </div>
            `;
        container.appendChild(div);
    });
}
document.addEventListener("DOMContentLoaded", carregarPalavras);

function falar(palavra) {
    const audio = new SpeechSynthesisUtterance(palavra);
    audio.lang = "en-US";
    audio.rate = 0.8;

    speechSynthesis.speak(audio);
}