// function play(){
//     //step-1: hide the home screen . to hide the screen add the class hidden to the home section
//     const homescreen2 = document.getElementById('home-screen');
//     homescreen2.classList.add('hidden');
//     // console.log(homescreen2.classList);
    
//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList); 
// }

function continueGame(){
    //step -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    //set random generated alphabet to the screen (display it or show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundCOlorByID(alphabet);
}
function play(){
    hideElementByID('home-screen');
    showElementById('play-ground');
    continueGame()
}
