let knownWords = 0;

function openWord(wordName) {

    let wordContent = document.getElementsByClassName("word-content");
    for (var i = 0; i < wordContent.length; i++) {
        wordContent[i].style.display = "none";
    }
    document.getElementById(wordName).style.display = "block";
}
function searchWord() {
    let valeFromSearchBox = document.getElementById("search-box").value;
    let listOfWords = document.getElementsByClassName("list-of-words")[0];
    let wordsContent = listOfWords.getElementsByClassName("words");
    let wordTitle = document.getElementsByClassName('word-title');

    for (var i = 0; i < wordsContent.length; i++) {
        if (wordsContent[i].innerHTML.indexOf(valeFromSearchBox) > -1) {
            wordTitle[i].style.display = "";
            // wordTitle[i].querySelector('p').style.backgroundColor = "#686868";
            // wordTitle[i].querySelector('.words').style.backgroundColor = "#686868";
        } else {
            wordTitle[i].style.display = "none";
        }
    }

    /* If user erase text it should change color again*/
    // if (valeFromSearchBox.length === 0)
    //     for (var i = 0; i < wordsContent.length; i++){
    //         wordTitle[i].querySelector('p').style.backgroundColor = "#CCCCCC";
    //         wordTitle[i].querySelector('.words').style.backgroundColor = "#CCCCCC";
    //     }
}

    

// document.querySelector('.w2').addEventListener('click', progresBar);
// document.querySelector('.w3').addEventListener('click', progresBar);
// document.querySelector('.w4').addEventListener('click', progresBar);
// document.querySelector('.w5').addEventListener('click', progresBar);
// document.querySelector('.w6').addEventListener('click', progresBar);
// document.querySelector('.w7').addEventListener('click', progresBar);
// document.querySelector('.w8').addEventListener('click', progresBar);
// document.querySelector('.w9').addEventListener('click', progresBar);
// document.querySelector('.w10').addEventListener('click', progresBar);

function progresBar(evt) {
    if (knownWords <= 10 && evt.target.classList[1] === "far") {
        knownWords++;
    }
    else {
        knownWords--;
    }

    document.querySelector('#complete').innerHTML = knownWords * 10 + '%';
    document.querySelector('.progBar').style.width = knownWords * 10 + '%';

    if (evt.target.classList[1] === "far") {
        evt.target.className = evt.target.classList[0] + " fas fa-check-circle";
    }
    else {
        evt.target.className = evt.target.classList[0] + " far fa-circle";
    }
}

document.querySelector('.add-element').addEventListener('click', () => {
    var divElem = document.createElement("div");
    var pFirstElem = document.createElement("p");
    var pSecondElem = document.createElement("p");
    divElem.className = "word-title";
    pFirstElem.className = "w4 far fa-circle";
    pFirstElem.addEventListener('click', progresBar);

    pSecondElem.className = "words";
    if(document.querySelector('.inputName').value === "")
        pSecondElem.innerHTML = "Default name"
    else
        pSecondElem.innerHTML = document.querySelector('.inputName').value

    divElem.appendChild(pFirstElem);
    divElem.appendChild(pSecondElem);
    // var element = document.getElementById("div1");
    document.querySelector('.list-of-words').appendChild(divElem);
    divElem.setAttribute("onmouseover", "openWord('a1')");  
    document.querySelector('.inputName').value = "";
});

document.querySelector('#search-box').addEventListener('keyup', searchWord);
document.querySelectorAll('p[class^="w"]:not(div)').forEach((elem) => {
    elem.addEventListener('click', progresBar);
})