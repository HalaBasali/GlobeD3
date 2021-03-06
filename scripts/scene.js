define(["three", "d3"], function(THREE, d3) {

	var canvas = d3.select("body").append("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	canvas.node().getContext("webgl");

	var renderer = new THREE.WebGLRenderer({canvas: canvas.node(), antialias: true, alpha: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
	camera.position.z = 1000;

	var scene = new THREE.Scene();
	var light = new THREE.HemisphereLight('#ffffff', '#666666', 1.5);
	light.position.set(0, 1000, 0);
	scene.add(light);

	window.addEventListener('resize', onWindowResize, false);

	function onWindowResize() {
	  camera.aspect = window.innerWidth / window.innerHeight;
	  camera.updateProjectionMatrix();
	  renderer.setSize(window.innerWidth, window.innerHeight);
	}

	var SCENE = {
		canvas: canvas,
		renderer: renderer,
		camera: camera,
		scene: scene
	};

	return SCENE;

});
