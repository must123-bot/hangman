//  letters 
const letters = "abcdefghijklmnopqrstuvwxyz";
// Get Array from letters

let lettersArray = Array.from(letters);

// select letters containers
let lettersContainer = document.querySelector(".letters");


// Generate Letters 
lettersArray.forEach(letter => {
    // create span 
    let span = document.createElement("span");

    // create letter Text node 
    let theLetter = document.createTextNode(letter);
    // Appened  the letters to span  
    span.appendChild(theLetter);

    // add class on span 

    span.className = "letter-box";

    // append span to the letters container 

    lettersContainer.appendChild(span);

});



// objcet of words + categories.

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["prestige", "inception", "parasite", "interstallar", "whiplash", "Memento", "coco", "Up"],
    people: ["Albert Einstein", "palestine", "Hitchcock", "Alexander", "cleopatra", "mahatma Ghandi"],
    countries: ["syria", "palestine", "Yeman", "Egypt", "bahrain", "Qater"]

}

// Get random  property 
let allKeys = Object.keys(words);
// random number depend on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// category
let randomPropName = allKeys[randomPropNumber];
// category word
let randomPropValue = words[randomPropName];
//  random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
//  The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

// set category 
document.querySelector(".game-info .category span").innerHTML = randomPropName;
// ..............................................................



// select letters guess Element.
let lettersGuessContainer = document.querySelector(".letters-guess");
//  convert chosen word to array

let lettersAndSpace = Array.from(randomValueValue);


// create spans depend on word 
lettersAndSpace.forEach(letter => {
    // create empty span 
    let emptySpan = document.createElement("span");

    // if letter is space 
    if (letter === " ") {
        // add class to the span
        emptySpan.className = "with-space";
    }
    // Append spans to letters Guess Container
    lettersGuessContainer.appendChild(emptySpan)


});



// Select Guess spans
let guessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attemps
let wrongAttemps = 0;

// set the draw element 
let theDraw = document.querySelector(".hangman-draw");


// handle  clicking on letters 
document.addEventListener("click", (e) => {
    
//  Set The Chose Status
let theStatus = false;

    if(e.target.className == 'letter-box') {
        e.target.classList.add("clicked");


    // Get Clicked Letter

    let theClickedLetter = e.target.innerHTML.toLowerCase();

    ////the chosen word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, wordIndex) => {
        // if clicked letter Equal to one of the chosen word letter.
        if(theClickedLetter === wordLetter) {
            // Set Status To Ccorrect 
            theStatus = true;
            // loop on guess spans
            guessSpans.forEach((span, spanIndex) => {
                if(wordIndex === spanIndex) {
                    span.innerHTML = theClickedLetter;

                }
            })
            
        }
         
    })

    // outside loop
    
    
    //  if letter is wrong
    if(theStatus !== true) {
        // increase the wrong attemps
        wrongAttemps++;

        // add class wrong on the draw element
        theDraw.classList.add(`wrong-${wrongAttemps}`);

        // play fail sound 
        document.getElementById("fail").play()
        if(wrongAttemps === 8) {
            endGame();
            lettersContainer.classList.add("finished")
        }
    } else { 
        // play success sound 
        document.getElementById("success").play();
    }
}
});


// End Game Function
function endGame() {
    // create popup div
    let div = document.createElement("div");

    // create Text
    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

    // append text to div 
    div.appendChild(divText);

    // add class to Div
    div.className = " ";


    // append to the body 

    document.body.appendChild(div);

}
