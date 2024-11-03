// Imports
import ButtonManager from "./button_manager.js";
import ThreeScene from "./three.js";

const buttonId = ["blue", "red", "green", "black", "white"];
const threeScene = new ThreeScene();

for(var i = 0; i<buttonId.length; i++){
    let button = document.getElementById(buttonId[i]);
    new ButtonManager(button, (color) => {
        threeScene.loadModel(color);
    });
}




