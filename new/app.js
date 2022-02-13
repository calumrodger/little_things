function getRandomWord() {
    let words = ["tiny", "minute", "miniscule", "microscopic", "small", "little", "wee", "remote", "puny", "cute"];
    let word = words[Math.floor(Math.random() * words.length)];
    return word;
  }

function addRandomWord() {
    const word = getRandomWord();
    const text = document.querySelector(".poem");
    text.textContent = `you are a small sailor \n sailing on a boat \n going out to sea \n you are a ${word} sailor`
}
  document.addEventListener('DOMContentLoaded', () => {
    addRandomWord(getRandomWord);
      });