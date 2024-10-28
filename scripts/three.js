import * as THREE from 'three';
// Import addons
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
import  { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';

//Scene config
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer
({
	alpha: true,
	antialias: true,
});
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

// Light imports
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const light_1 = new THREE.DirectionalLight(0xffffff, 1);
const light_2 = new THREE.DirectionalLight(0xffffff, 1);
light_1.position.set(0, 5, 5);
light_2.position.set(0,5,-5);
scene.add(
	light_1,
	light_2, 
	ambientLight
);

// Orbit Control Settings
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; //Don't enable zoom
controls.enablePan = false; //Don't enable camera axis move
controls.enableDamping = true; //Give smoothing 
    controls.dampingFactor = 0.05;
controls.maxDistance = 2;
camera.position.z = 5;

// Loader
const loader = new GLTFLoader();
loader.load(
	'../source/models/Trainer.glb',
	function(gltf){
		scene.add(gltf.scene);
		gltf.scene.scale.set(.2,.2,.2);
	}
)

function animate() {

    controls.update();
	renderer.render( scene, camera );

}