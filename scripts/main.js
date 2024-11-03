// Imports
import { color } from "three/webgpu";
import ButtonManager from "./button_manager.js";
import ThreeScene from "./three.js";

const button1 = document.getElementById("blue");
const threeScene = new ThreeScene();

const buttonManager = new ButtonManager(button1, (color) => {
    threeScene.loadModel(color);
});
