/*
Structure of each added element or  gizmo

<div class="iframe-container">
            <h2>Title</h2>
            <iframe src="hall-lights.html" width="100%" height="200"></iframe>
            <div class="button-container">
                <button id="hallLightsOn">ON</button>
                <button id="hallLightsOff">OFF</button>
            </div>
        </div>
*/


//globals
parent = document.getElementById('gizmo-container')

gizmoArray = [];


//Gizmo class
class Gizmo {
    constructor(num=0, title="anon",deflt='none',on='none',off='none') {
        this.num = num;
        this.title = title;
        this.default = deflt;
        this.on = on;
        this.off = off;

        //html constructing
        this.container = document.createElement('div');
        this.container.class = "iframe-container";
        parent.appendChild(this.container);

        //title
        this.label = document.createElement('h2');
        this.label.textContent = this.title;
        this.container.appendChild(this.label);

        //iframe
        this.iframe = document.createElement("iframe");
        this.iframe.width = "75%";
        this.iframe.height = "200";
        this.iframe.src = this.default;
        this.container.appendChild(this.iframe);

        //button container
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.class = 'button-container';
        this.container.appendChild(this.buttonContainer);

        // buttons
        this.onButton = document.createElement("button");
        this.onButton.id = `${this.num}ON`;
        this.onButton.textContent = "TRIGGER";
        this.onButton.addEventListener('click', () => handleClick(this.num, 'ON'));
        this.buttonContainer.appendChild(this.onButton);
        this.offButton = document.createElement("button");
        this.offButton.id = `${this.num}OFF`;
        this.offButton.textContent = "RESET";
        this.offButton.addEventListener('click', () => handleClick(this.num, 'OFF'));
        this.buttonContainer.appendChild(this.offButton);
    }
}

// Function to handle button clicks
function handleClick(ind, action) {
    if (action == 'ON') {
        gizmoArray[ind].iframe.src = gizmoArray[ind].on;
    } else if (action == 'OFF') {
        gizmoArray[ind].iframe.src = gizmoArray[ind].off;  
    } else {
        console.error(`The input ${action} is not recognized for buttons`);
    }
}

// Function to handle reset all button click
function handleResetAll() {
    gizmoArray.forEach(obj => {
        obj.iframe.src = obj.default;
    });
}

document.addEventListener('DOMContentLoaded', main);

function main() {
    jsonData = JSON.parse(document.getElementById("json-data").innerText);

    // Parses the json data into objects, the gizmo object then constructs html elements for each gizmo
    for (let i = 0; i < jsonData.length; i++) {
        obj = new Gizmo(i, jsonData[i].title, jsonData[i].default, jsonData[i].ON, jsonData[i].OFF);
        gizmoArray.push(obj);
    }
    // Reset all button event
    document.getElementById('resetAll').addEventListener('click', handleResetAll);
}


