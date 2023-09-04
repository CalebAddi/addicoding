import * as THREE from 'three';
import { Color } from 'three';
import './app.css';

const scene = new THREE.Scene();
scene.background = new Color('#1b1c1e');

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
let renderer; 

//---------- Geometry ----------//
const geometry = new THREE.IcosahedronGeometry(1.7, 1);
const geomMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, wireframe: true} );
const icosahedron = new THREE.Mesh(geometry, geomMaterial);
scene.add(icosahedron);

//---------- Materials ----------//

const particlesGeometry = new THREE.BufferGeometry;
const particleCount = 20000;
const posArray = new Float32Array(particleCount * 3);

for(let i = 0; i < particleCount * 3; i++) 
{
  posArray[i] = (Math.random() - 0.5) * 6;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: .0035,
    blending: THREE.AdditiveBlending,
});

particleMaterial.color = new THREE.Color(0xffffff);

// Mesh
const particleMesh = new THREE.Points(particlesGeometry, particleMaterial);
scene.add(particleMesh);

camera.position.z = 3.3;

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};

function resize()
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

function animate() 
{
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

//---------------------------------------------------------//

document.addEventListener('mousemove', onDocumentMouseMove);

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;
let icosTargetX = 0;
let icosTargetY = 0;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove(e) 
{
    mouseX = (e.clientX - windowHalfX);
    mouseY = (e.clientY - windowHalfY);
}

const clock = new THREE.Clock()

let oldTime = 0;
const sensitivity = 0.000095;
const icosSensitivity = 0.0004;

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - oldTime;
    oldTime = elapsedTime;

    // calculate particle targets
    targetX += (mouseX - targetX) * deltaTime * sensitivity;
    targetY += (mouseY - targetY) * deltaTime * sensitivity;

    //calculate icosahedron targets
    icosTargetX += (mouseX - icosTargetX) * deltaTime * icosSensitivity;
    icosTargetY += (mouseY - icosTargetY) * deltaTime * icosSensitivity;

    // Update objects
    particleMesh.rotation.y = targetY;
    particleMesh.rotation.x = targetX;
    icosahedron.rotation.y = icosTargetY;
    icosahedron.rotation.x = icosTargetX;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

export const createScene = (el) => 
{
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el, alpha: true }); // alpha: true to make the canvas background transparent.
    renderer.setSize(window.innerWidth, window.innerHeight); // this should cover the full window
    renderer.setPixelRatio(window.devicePixelRatio);
    resize();
    animate();
    tick();
}