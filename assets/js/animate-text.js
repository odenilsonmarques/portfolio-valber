
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('text-container');
    const textToType = "Valber Brito";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 200); // Velocidade de digitação (em milissegundos)
        }
    }

    typeText();
});
