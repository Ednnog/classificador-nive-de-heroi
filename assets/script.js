
function classificar() {
    const nome = document.getElementById('nome').value;
    const xp = parseInt(document.getElementById('xp').value);
    const resultadoElement = document.getElementById('resultado');

    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp < 2000) {
        nivel = "Bronze";
    } else if (xp < 5000) {
        nivel = "Prata";
    } else if (xp < 7000) {
        nivel = "Ouro";
    } else if (xp < 8000) {
        nivel = "Platina";
    } else if (xp < 9000) {
        nivel = "Ascendente";
    } else if (xp < 10000) {
        nivel = "Imortal";
    }  else if (xp >= 10001) {
            nivel = "Radiante";
    } else {
        nivel = "0 de XP";
    }

    resultadoElement.textContent = `O personagem ${nome} é de nível ${nivel}.`;
}
