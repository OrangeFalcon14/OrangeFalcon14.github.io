<script>
import { onMount } from "svelte";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

onMount(() => {
  const canvas = document.querySelector("#rotating-obj");
  // @ts-ignore
  canvas.style.height = "600px";
  // @ts-ignore
  canvas.style.width = "600px";

  const renderer = new THREE.WebGLRenderer({ canvas, alpha:true });

  const scene = new THREE.Scene();


  const fov = 75;
  // @ts-ignore
  const aspect = canvas.width / canvas.height;
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // @ts-ignore
  camera.position.z = 4;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minPolarAngle = controls.maxPolarAngle = Math.PI / 2;
  controls.autoRotate = controls.enableDamping = true;
  controls.autoRotateSpeed = 5;
  controls.enablePan = controls.enableZoom = false;
  controls.update();

  let gem;
  const loader = new GLTFLoader();
  loader.load("/polygon.glb", (gltf) => {
    gem = gltf.scene.children.find(child => child.name === "Cube");
    gem.position.set(0,0,0)
    scene.add(gem);
  }, undefined, (error) => {
    console.log(error);
  })

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const light1 = new THREE.PointLight(0xffffff, 0.7);
  // @ts-ignore
  light1.position.set(20, 20, 22);
  scene.add(light1);

  const light2= new THREE.PointLight(0xffffff, 0.7);
  // @ts-ignore
  light2.position.set(-20, 20, -22);
  scene.add(light2);

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  const render = () => {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    renderer.render(scene, camera);

    controls.update();

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
});
</script>

<canvas id="rotating-obj"></canvas>

<style>
canvas{
  margin-right: 10rem;
}
</style>
