
const data = require("./links.json");
console.log(data[0]);

// Function to handle button clicks
function handleClick(action, iframeId) {
    const iframe = document.getElementById(iframeId);
    console.log(action);
}

// Function to handle reset all button click
function handleResetAll() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
        iframe.contentWindow.postMessage('reset', '*');
    });
}

document.addEventListener('onload' () => main());

function main() {
        
}

// Add event listeners to buttons
document.getElementById('hallLightsOn').addEventListener('click', () => handleClick('on', 'hall-lights'));
document.getElementById('hallLightsOff').addEventListener('click', () => handleClick('off', 'hall-lights'));
document.getElementById('shoeboxOn').addEventListener('click', () => handleClick('on', 'shoebox'));
document.getElementById('shoeboxOff').addEventListener('click', () => handleClick('off', 'shoebox'));
document.getElementById('knockKnockOn').addEventListener('click', () => handleClick('on', 'knock-knock'));
document.getElementById('knockKnockOff').addEventListener('click', () => handleClick('off', 'knock-knock'));
document.getElementById('redLightOn').addEventListener('click', () => handleClick('on', 'red-light'));
document.getElementById('redLightOff').addEventListener('click', () => handleClick('off', 'red-light'));
document.getElementById('discoLightsOn').addEventListener('click', () => handleClick('on', 'disco-lights'));
document.getElementById('discoLightsOff').addEventListener('click', () => handleClick('off', 'disco-lights'));
document.getElementById('resetAll').addEventListener('click', handleResetAll);
