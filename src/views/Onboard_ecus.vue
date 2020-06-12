<template>
    <v-app>
        <Usernav/>
		<div id="container"></div>
		<div id="menu">
			<button id="sphere">Must be Replaced</button>
		</div>
    </v-app>
</template>

<script>
import Usernav from '../components/Usernav.vue'
import * as THREE from 'three';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

export default {
  	name: 'Signup',
	components: {
	Usernav
},
  	mounted() {
	  (() => {
		  var table = [
				"IVI", "normal", "-", 1, 1,
				"HUD", "normal", "-", 1, 3,
				"Meter", "normal", "-", 1, 3,
				"Lider", "normal", "-", 1, 4,
				"Tricamera", "normal", "-", 1, 5,
				"CGW", "normal", "-", 1, 6,
				"BCM", "normal", "-", 1, 7,
				"HD-Map", "normal", "-", 1, 8,
				"SladerLL", "normal", "-", 1, 9,
				"SladerLR", "normal", "-", 1, 10,
				"SladerRL", "normal", "-", 1, 11,
				"SladerRR", "normal", "-", 1, 12,
				"IVI", "normal", "-", 2, 1,
				"HUD", "normal", "-", 2, 2,
				"Meter", "normal", "-", 2, 3,
				"Lider", "normal", "-", 2, 4,
				"Tricamera", "normal", "-", 2, 5,
				"CGW", "normal", "-", 2, 6,
				"BCM", "normal", "-", 2, 7,
				"HD-Map", "normal", "-", 2, 8,
				"SladerLL", "normal", "-", 2, 9,
				"SladerLR", "normal", "-", 2, 10,
				"SladerRL", "normal", "-", 2, 11,
				"SladerRR", "warning!!", "Battery is low", 2, 12,
				"IVI", "normal", "-", 3, 1,
				"HUD", "normal", "-", 3, 2,
				"Meter", "normal", "-", 3, 3,
				"Lider", "normal", "-", 3, 4,
				"Tricamera", "normal", "-", 3, 5,
				"CGW", "normal", "-", 3, 6,
				"BCM", "normal", "-", 3, 7,
				"HD-Map", "normal", "-", 3, 8,
				"SladerLL", "normal", "-", 3, 9,
				"SladerLR", "normal", "-", 3, 10,
				"SladerRL", "normal", "-", 3, 11,
				"SladerRR", "normal", "-", 3, 12,
			];

			var camera, scene, renderer;
			var controls;

			var objects = [];
			var targets = { table: [], sphere: [], helix: [], grid: [] };

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;

				scene = new THREE.Scene();

				// table

				for ( var i = 0; i < table.length; i += 5 ) {

					var element = document.createElement( 'div' );
					let elementname = 'element'
					element.className = elementname;
					if (i / 5 == 23) {
						element.style.backgroundColor = 'rgba(220, 20, 60, 0.70)';
					} else {
					element.style.backgroundColor = '#a8ffde';
					}
					element.style.width = '150px';
					element.style.height = '200px';
					element.style.textAlign = 'center';
					element.style.opacity = '0.6';
					element.style.borderRadius = '50px';

					var number = document.createElement( 'div' );
					number.className = 'number';
					number.textContent = ( i / 5 ) + 1;
					element.appendChild( number );

					var symbol = document.createElement( 'div' );
					symbol.className = 'symbol';
					symbol.textContent = table[ i ];
					symbol.style.fontSize = '30px';
					element.appendChild( symbol );

					var details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
					element.appendChild( details );

					var btn = document.createElement( 'button' );
					btn.type = 'button';
					btn.className = 'replace_btn';
					btn.style.width = '100px';
					btn.style.height = '50px';
					btn.style.fontWeight = 'bold';
					btn.style.border = 'solid 1px';
					btn.style.borderRadius = '20px';
					btn.innerText = 'Replace';
					element.appendChild( btn );

					var object = new CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );

					objects.push( object );

					//

					var object = new THREE.Object3D();
					object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
					object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

					targets.table.push( object );

				}

				// sphere

				var vector = new THREE.Vector3();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = Math.acos( - 1 + ( 2 * i ) / l );
					var theta = Math.sqrt( l * Math.PI ) * phi;

					var object = new THREE.Object3D();

					object.position.setFromSphericalCoords( 800, phi, theta );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.sphere.push( object );

				}

				//

				renderer = new CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				controls = new TrackballControls( camera, renderer.domElement );
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );

				var button = document.getElementById( 'sphere' );
				button.addEventListener( 'click', function () {

					transform( targets.sphere, 2000 );

				}, false );


				transform( targets.sphere, 2000 );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( var i = 0; i < objects.length; i ++ ) {

					var object = objects[ i ];
					var target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();

				controls.update();

			}

			function render() {

				renderer.render( scene, camera );

			}
	  })()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
	background-color: black;
}

a {
    color: #8ff;
}

#menu {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
}

.element {
    width: 120px;
    height: 160px;
    box-shadow: 0px 0px 12px rgba(0,255,255,0.5);
    border: 1px solid rgba(127,255,255,0.25);
    font-family: Helvetica, sans-serif;
    text-align: center;
    line-height: normal;
    cursor: default;
}

.element:hover {
    box-shadow: 0px 0px 12px rgba(0,255,255,0.75);
    border: 1px solid rgba(127,255,255,0.75);
}

.element .number {
	position: absolute;
	top: 20px;
	right: 20px;
	font-size: 12px;
	color: rgba(127,255,255,0.75);
}

.element .symbol {
	position: absolute;
	top: 40px;
	left: 0px;
	right: 0px;
	font-size: 60px;
	font-weight: bold;
	color: rgba(255,255,255,0.75);
	text-shadow: 0 0 10px rgba(0,255,255,0.95);
}

.element .details {
	position: absolute;
	bottom: 15px;
	left: 0px;
	right: 0px;
	font-size: 12px;
	color: rgba(127,255,255,0.75);
}

button {
    color: rgba(220, 20, 60, 0.75);
    background: transparent;
    outline: 1px solid rgba(220, 20, 60, 0.75);
    border: 0px;
    padding: 5px 10px;
    cursor: pointer;
}

button:hover {
    background-color: rgba(220, 20, 60, 0.2);
}

button:active {
    color: #000000;
    background-color: rgba(0,255,255,0.75);
}



</style>