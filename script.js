//creating a emoji dict of your own
const emojiDict = {
    love: "❤️",
    pizza: "🍕",
    coffee: "☕",
    happy: "😊",
    sad: "😢",
    cat: "🐱",
    dog: "🐶"
};

function translateText() {
    //taking input from the user 
    let sentence = document.getElementById('userInput').value;

    //split means seperating each word from the sentence.
    let words = sentence.split(' ');

    //here we translate the word to emoji part.
    let translated = words.map(word => {
        //we have to make the words taken from the user to lowerCase so as to match it with the dict we created.
        let lowerWord = word.toLowerCase();
        // here the logic is that if the word matches with the lowerCase word in the dict than it will give the output with the emoji or else it will return the same word.
        return emojiDict[lowerWord] || word;
    });

    //here we join the emoji + word sentence with the join function.
    document.getElementById('result').innerText = translated.join(' ');
}

//this is the function use to clear out the user input and the result.
function clearText() {
    document.getElementById('userInput').value = '';
    document.getElementById('result').innerText = '';
}
