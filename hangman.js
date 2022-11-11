function displayWordBlanks(word) {
    word_div = document.getElementById('word');
    for (i = 0; i < word.length; i++) {
        span = document.createElement('span');
        word_div.appendChild(span);
    }
}
function checkLetter(event) {
    letters = document.querySelectorAll('#word span');
    if (wordToGuess.includes(event.target.innerHTML)) {
        for (i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] == event.target.innerHTML) {
                letters[i].innerHTML = wordToGuess[i];
                event.target.style.backgroundColor = 'lime';
                event.target.style.color = 'white';
            }
        }
    } else {
        event.target.style.backgroundColor = 'red';
        event.target.style.color = 'white';
        loseLive();
        event.target.removeEventListener('click', checkLetter, false);
    }
    word = [];
    for (letter of letters){
        word.push(letter.innerHTML);
    }
    if (wordToGuess == word.join('')){
        win_text = document.getElementById('lose');
        win_text.style.color = "lime";
        win_text.innerHTML = "Has Ganado :)";
        letters = document.getElementsByClassName('letter');
        for (letter of letters) {
            letter.removeEventListener('click', checkLetter, false);
        }
    }

}
function loseLive() {
    lives--;
    lives_imgs = document.getElementsByTagName('img');
    for (i = lives; i < 10; i++) {
        lives_imgs[i].classList.add('balanceo');
        lives_imgs[i].src = 'img/heart_dead.png';
    }
    if (lives == 0) {
        document.getElementById('lose').innerHTML = "Has Perdido :(";
        letters = document.getElementsByClassName('letter');
        for (letter of letters) {
            letter.removeEventListener('click', checkLetter, false);
        }
        lettersOfWordToGuess = document.querySelectorAll('#word span');
        for (i=0;i<wordToGuess.length;i++){
            lettersOfWordToGuess[i].innerHTML = wordToGuess[i]; 
        }
    }
}



window.onload = () => {
    lives = 10;
    words = ['valencia', 'granada', 'malaga','madrid','paris','londres','roma','milan','venecia','praga','budapest','bucarest','oslo','berlin','munich','manchester']
    rnd = Math.floor(Math.random()*words.length);
    wordToGuess = words[rnd];
    displayWordBlanks(wordToGuess);
    letters = document.getElementsByClassName('letter');
    for (letter of letters) {
        letter.addEventListener('click', checkLetter);
    }
}