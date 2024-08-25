import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const zCamera = window.matchMedia('(max-width: 600px)').matches ? 10 : 8;

camera.position.set(2.15, 1.2, zCamera);

let redPuzzle;
let orangePuzzle;
let greenPuzzle;
let bluePuzzle;

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(1280, 720);

const mainContainer = document.getElementById('container3D');
mainContainer.appendChild(renderer.domElement);
const loader = new GLTFLoader();
loader.load(`models/red-puzzle.glb`, async function (gltf) {
    redPuzzle = gltf.scene;
    await scene.add(redPuzzle);
    transform();
});
loader.load(`models/orange-puzzle.glb`, async function (gltf) {
    orangePuzzle = gltf.scene;
    await scene.add(orangePuzzle);
    transform();
});
loader.load(`models/green-puzzle.glb`, async function (gltf) {
    greenPuzzle = gltf.scene;
    await scene.add(greenPuzzle);
    transform();
});
loader.load(`models/blue-puzzle.glb`, async function (gltf) {
    bluePuzzle = gltf.scene;
    await scene.add(bluePuzzle);
    transform();
});

// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
scene.add(light);

const dl = new THREE.DirectionalLight(0xffffff, 0.6);
dl.position.set(0, 0, 1);
scene.add(dl);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

function transform() {
    let percentage = 100 - (window.scrollY / window.innerHeight) * 55 - 0.0001;

    if (percentage > 0 && percentage < 100) {
        if (
            window.matchMedia('(max-width: 955px)').matches &&
            window.matchMedia('(min-width: 600px)').matches
        ) {
            redPuzzle.position.y = percentage * 0.03;
            redPuzzle.position.x = percentage * 0.05;
            redPuzzle.rotation.z = percentage * 0.003;

            orangePuzzle.position.y = percentage * 0.03;
            orangePuzzle.position.x = -(percentage * 0.035);
            orangePuzzle.rotation.z = percentage * 0.01;

            greenPuzzle.position.y = -(percentage * 0.005);
            greenPuzzle.position.x = -(percentage * 0.04);
            greenPuzzle.rotation.z = percentage * 0.001;

            bluePuzzle.position.y = -(percentage * 0.01);
            bluePuzzle.position.x = percentage * 0.04;
            bluePuzzle.rotation.z = percentage * 0.002;
        } else if (window.matchMedia('(max-width: 600px)').matches) {
            redPuzzle.position.y = percentage * 0.03;
            redPuzzle.position.x = percentage * 0.04;
            redPuzzle.rotation.z = percentage * 0.003;

            orangePuzzle.position.y = percentage * 0.025;
            orangePuzzle.position.x = -(percentage * 0.02);
            orangePuzzle.rotation.z = percentage * 0.01;

            greenPuzzle.position.y = -(percentage * 0.01);
            greenPuzzle.position.x = -(percentage * 0.02);
            greenPuzzle.rotation.z = percentage * 0.001;

            bluePuzzle.position.y = -(percentage * 0.01);
            bluePuzzle.position.x = percentage * 0.02;
            bluePuzzle.rotation.z = percentage * 0.002;
        } else {
            redPuzzle.position.y = percentage * 0.025;
            redPuzzle.position.x = percentage * 0.06;
            redPuzzle.rotation.z = -(percentage * 0.003);

            orangePuzzle.position.y = percentage * 0.01;
            orangePuzzle.position.x = -(percentage * 0.06);
            orangePuzzle.rotation.z = percentage * 0.01;

            greenPuzzle.position.y = -(percentage * 0.02);
            greenPuzzle.position.x = -(percentage * 0.06);
            greenPuzzle.rotation.z = percentage * 0.001;

            bluePuzzle.position.y = -(percentage * 0.017);
            bluePuzzle.position.x = percentage * 0.045;
            bluePuzzle.rotation.z = percentage * 0.002;
        }
    }
    if (percentage < 0) {
        for (const puzzle of [
            redPuzzle,
            orangePuzzle,
            greenPuzzle,
            bluePuzzle,
        ]) {
            puzzle.position.y = 0;
            puzzle.position.x = 0;
            puzzle.rotation.z = 0;
        }
    }
}

window.addEventListener('scroll', transform);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// setTimeout(transform, 150);

// animation for text
document.addEventListener('DOMContentLoaded', () => {
    const firstBlock = document.querySelector('.about-us__title-wrapper');
    const secondBlock = document.querySelector('.about-us_descr');

    const onEntry = (entry) => {
        entry.forEach((change) => {
            if (change.isIntersecting) {
                change.target.classList.add('about-us__title-wrapper--shown');
            } else {
                change.target.classList.remove(
                    'about-us__title-wrapper--shown'
                );
            }
        });
    };
    const onEntry2 = (entry) => {
        entry.forEach((change) => {
            if (change.isIntersecting) {
                change.target.classList.add('about-us_descr--shown');
            } else {
                change.target.classList.remove('about-us_descr--shown');
            }
        });
    };
    const options = { threhold: [0.5] };

    let observer = new IntersectionObserver(onEntry, options);
    observer.observe(firstBlock);
    let observer2 = new IntersectionObserver(onEntry2, options);
    observer2.observe(secondBlock);
});
