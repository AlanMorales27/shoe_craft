import * as THREE from 'three';
// Import addons
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';

//Scene config
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({alpha: true});
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xfff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Orbit Control Settings
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false; //Don't enable zoom
controls.enablePan = false; //Don't enable camera axis move
controls.enableDamping = true; //Give smoothing 
    controls.dampingFactor = 0.05;
controls.maxDistance = 3;
camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

    controls.update();

	renderer.render( scene, camera );

}