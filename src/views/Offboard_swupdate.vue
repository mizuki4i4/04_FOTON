<template>
    <v-app>
        <Usernav/>
		<div id="container"></div>
		<div id="menu">
			<button id="helix">Updateable SW</button>
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
				"IVI", "back_ground_skin1", "jpg", 1, 1,
				"IVI", "back_ground_skin2", "jpg", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"IVI", "os_update", "iso", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"IVI", "back_ground_skin3", "jpg", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"Meter", "SecurityPatch", "iso", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
				"none", "comming soon!", "-", 1, 1,
			];

			var camera, scene, renderer;
			var controls;

			var objects = [];
			var targets = { table: [], helix: [] };

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 4000;

				scene = new THREE.Scene();

				// table

				for ( var i = 0; i < table.length; i += 5 ) {

					var element = document.createElement( 'div' );
					element.className = 'element';
					if (i / 5 < 2) {
						element.style.backgroundColor = 'rgba(255, 200, 0, 0.9)';
					} else if (i / 5 == 4) {
						element.style.backgroundColor = 'rgba(255, 200, 0, 0.9)';
					} else if (i / 5 == 7 ) {
						element.style.backgroundColor = 'rgba(255, 200, 0, 0.9)';
					} else if (i / 5 == 10 ) {
						element.style.backgroundColor = 'rgba(255, 200, 0, 0.9)';
					} else {
						element.style.backgroundColor = 'white';
					}
					element.style.width = '150px';
					element.style.height = '220px';
					element.style.textAlign = 'center';
					element.style.opacity = '0.6';

					var number = document.createElement( 'div' );
					number.className = 'number';
					number.textContent = ( i / 5 ) + 1;
					element.appendChild( number );

					var symbol = document.createElement( 'div' );
					symbol.className = 'symbol';
					symbol.textContent = table[ i ];
					element.appendChild( symbol );

					var details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
					element.appendChild( details );

					var images = document.createElement( 'img' );
					images.className = 'images';
					if (i / 5 < 2) {
					  images.src = 'https://source.unsplash.com/featured/?GTR';
					} else if(i / 5 == 4 ) {
					  images.src = 'https://source.unsplash.com/featured/?car';
					} else if (i / 5 == 7 ) {
					  images.src = 'https://source.unsplash.com/featured/?nissan';
					} else if (i / 5 == 10 ) {
					  images.src = 'https://source.unsplash.com/featured/?navi';
					} else {
					  images.src = 'https://source.unsplash.com/BtbjCFUvBXs';
					}
					images.style.width = '80px';
					images.style.height = '80px';
					element.appendChild( images );

					var btn = document.createElement( 'button' );
					btn.type = 'button';
					btn.className = 'replace_btn';
					btn.style.width = '100px';
					btn.style.height = '30px';
					btn.style.fontWeight = 'bold';
					btn.style.border = 'solid 1px';
					btn.style.borderRadius = '10px';
					btn.innerText = 'Update!';
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

				// helix

				var vector = new THREE.Vector3();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var theta = i * 0.175 + Math.PI;
					var y = - ( i * 8 ) + 450;

					var object = new THREE.Object3D();

					object.position.setFromCylindricalCoords( 900, theta, y );

					vector.x = object.position.x * 2;
					vector.y = object.position.y;
					vector.z = object.position.z * 2;

					object.lookAt( vector );

					targets.helix.push( object );

				}


				// rendering

				renderer = new CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				controls = new TrackballControls( camera, renderer.domElement );
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );


				var button = document.getElementById( 'helix' );
				button.addEventListener( 'click', function () {

					transform( targets.helix, 2000 );

				}, false );

				transform( targets.helix, 2000 );

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
    color: rgba(255, 165, 0, 0.75);
    background: transparent;
    outline: 1px solid rgba(255, 165, 0, 0.75);
    border: 0px;
    padding: 5px 10px;
    cursor: pointer;
}

button:hover {
    background-color: rgba(0,255,255,0.75);
}

button:active {
    color: #000000;
    background-color: rgba(0,255,255,0.75);
}

</style>