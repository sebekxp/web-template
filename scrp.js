function openWord(wordName) {

    let wordContent = document.getElementsByClassName("word-content");
    for (var i = 0; i < wordContent.length; i++) {
        wordContent[i].style.display = "none";
    }
    document.getElementById(wordName).style.display = "block";
}
function searchWord() {
    let filter = document.getElementById("search-box").value;
    let listOfWords = document.getElementsByClassName("list-of-words")[0];
    let wordsContent = listOfWords.getElementsByClassName("words");
    let wordTile = document.getElementsByClassName('word-title');

    for (var i = 0; i < wordsContent.length; i++) {
        if (wordsContent[i].innerHTML.indexOf(filter) > -1) {
            wordTile[i].style.display = "";
        } else {
            wordTile[i].style.display = "none";
        }
    }
}
let knownWords = 0;

document.querySelector('#search-box').addEventListener('keyup', searchWord);
document.querySelector('.w1').addEventListener('click', progresBar);
document.querySelector('.w2').addEventListener('click', progresBar);
document.querySelector('.w3').addEventListener('click', progresBar);
document.querySelector('.w4').addEventListener('click', progresBar);
document.querySelector('.w5').addEventListener('click', progresBar);
document.querySelector('.w6').addEventListener('click', progresBar);
document.querySelector('.w7').addEventListener('click', progresBar);
document.querySelector('.w8').addEventListener('click', progresBar);
document.querySelector('.w9').addEventListener('click', progresBar);
document.querySelector('.w10').addEventListener('click', progresBar);


function progresBar(evt) {

    if(knownWords <= 10)
        document.querySelector('.progBar').style.width = knownWords * 10 + '%';
    if(evt.target.classList[1] === "far") {
        evt.target.className = evt.target.classList[0] + " fas fa-check-circle";
        // evt.target.style.backgroundColor = "#F8F8F8";
    }
    else {
        evt.target.className = evt.target.classList[0] + " far fa-circle";
    }

    knownWords++;
    console.log(knownWords);
}
