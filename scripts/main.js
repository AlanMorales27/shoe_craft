// Imports
import ButtonManager from "./buttonManager.js";
import ThreeScene from "./three.js";

const button1 = document.getElementById("blue");
const threeScene = new ThreeScene();
const buttonManager = new ButtonManager(button1);
buttonManager.onButtonclicked();
threeScene;