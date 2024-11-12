import * as THREE from 'three';
// Import addons
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
import  { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import { vectorComponents } from 'three/webgpu';

class ThreeScene{
	constructor(){
		// Scene
		this.renderer;
		this.camera;
		this.scene;

		//Raycast
		this.raycast = new THREE.Raycaster;
		this.mause = new THREE.Vector2;
		this.intersect;

		this.controls;
		this.model = null;

		this.chargeScene();
		this.loadModel();
		this.animate();
		this.initRaycast();
	}

	chargeScene(){
		this.initScene();
		this.initLights();
		this.initControls();
	}

	initScene(){
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
			this.camera.position.z = 5;
		this.renderer = new THREE.WebGLRenderer
			({
				alpha: true,
				antialias: true,
			});
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( this.renderer.domElement );
	}
	
	initLights(){
		let ambientLight = new THREE.AmbientLight(0xffffff, 1);
		let light_1 = new THREE.DirectionalLight(0xffffff, 1);
		let light_2 = new THREE.DirectionalLight(0xffffff, 1);
		light_1.position.set(0, 5, 5);
		light_2.position.set(0,5,-5);
		this.scene.add(
			light_1,
			light_2, 
			ambientLight
		);
	}

	initControls(){
		// Orbit Control Settings
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);
		this.controls.enableZoom = false; //Don't enable zoom
		this.controls.enablePan = false; //Don't enable camera axis move
		this.controls.enableDamping = true; //Give smoothing 
			this.controls.dampingFactor = 0.05;
		this.controls.maxDistance = 2;
	}

	loadModel(color){
		const loader = new GLTFLoader();
		loader.load(
				'../source/models/Trainer.glb',
				(gltf) => {
					this.model = gltf.scene;
			
					this.scene.add(this.model);
					this.model.scale.set(.2,.2,.2);
			
					//Access to choe parts
					const node1 = this.model.children[0].children[1];
					node1.material.color.set(color);
				}
			)
	}

	initRaycast(){
			window.addEventListener('mousemove', (event) => {
				this.mause.x = (event.clientX / window.innerWidth)*2 - 1;
				this.mause.y = - (event.clientY / window.innerHeight)*2 + 1;
			});
	}

	animate = () => {
		requestAnimationFrame(this.animate);
		this.renderer.render( this.scene, this.camera );

		this.raycast.setFromCamera(this.mause,this.camera);	
		this.intersect = this.raycast.intersectObjects(this.scene.children);
		console.log(this.intersect);

		if (this.controls) {
			this.controls.update();
		}
	}
}

export default ThreeScene;