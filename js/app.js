
/**
 * @file Test capacité avec Three.js <br/>
 * <br/>
 * J'ai trouvé l'utilisation de Three.js très amusante c'est pourquoi j'ai perdu pas mal de temps à essayer d'utiliser une texture. <br/>
 * Je n'ai pas réussi à implanter de texture sur le cube à cause de problèmes de CORS. Apparemment, je n'aurais plus de problèmes si je faisais tourner un serveur node. <br/>
 * Je me suis également amusé à faire le contour d'une face du cube pour me familiariser avec les coordonnées de vecteurs.
 * <br/>
 * Je n'ai jamais eu affaire à générer de la JsDoc de cette manière, j'espère avoir bien fait
 * @author Richard
 */

 /** Initialisation de la scène, de la caméra de son controle<br/>
  * <br/>
  * La caméra tourne en boucle
  * 
  * @namespace*/
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const controls = new THREE.OrbitControls( camera);
controls.rotateSpeed = 0.3
controls.autoRotate = true
controls.zoomSpeed = 0.4
camera.position.set( 200, 0, 0 );
controls.update();

/** Création du cube rouge<br/>
 * <br/>
 * Arête: 50<br/>
 * Couleur: Rouge<br/>
 * Texture: Aucune
 * @namespace*/
const geometry1 = new THREE.BoxGeometry( 50, 50, 50 );
const material1 = new THREE.MeshBasicMaterial( {color: 0xff0000} );
const cube = new THREE.Mesh( geometry1, material1 );
scene.add( cube );

/** Contour Blanc sur une face du cube<br/>
 * <br/>
 * Arête: 50<br/>
 * Couleur: Blanc<br/>
 * Texture: Aucune
 * <br/>
 * Seulement une face du cube possède des contours
 * @namespace*/
const geometry2 = new THREE.Geometry();
geometry2.vertices.push(new THREE.Vector3(25, 25, 25));
geometry2.vertices.push(new THREE.Vector3(25, 25, -25));
geometry2.vertices.push(new THREE.Vector3(25, -25, -25));
geometry2.vertices.push(new THREE.Vector3(25, -25, 25));
geometry2.vertices.push(new THREE.Vector3(25, 25, 25));
const material2 = new THREE.LineBasicMaterial( {color: 0xffffff} );
const cubeContour = new THREE.Line( geometry2, material2 );
scene.add( cubeContour );

/**Rendu Final<br/>
 * <br/>
 * Rendu de la scene sur la page web
 * @namespace*/
const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

/** Fonction qui fait la rotation
 * <br/>
 * @function animate */
function animate() {
    requestAnimationFrame( animate );
    controls.update();
	renderer.render( scene, camera );
}
animate()
