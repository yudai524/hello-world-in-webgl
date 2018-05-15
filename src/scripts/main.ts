import * as THREE from 'three'
import Earth from './earth'
import Stars from "./stars";
import Sun from "./sun";
import AmbientLight from "./ambient-light";
import Camera from "./camera";
import Renderer from "./renderer";

window.addEventListener('load', init)

function init() {
  const scene = new THREE.Scene()
  const renderer = new Renderer('.js-canvas')
  const camera = new Camera()

  const earth = new Earth()
  scene.add(earth)

  const stars = new Stars()
  scene.add(stars);

  const sun = new Sun()
  scene.add(sun)

  const ambientLight = new AmbientLight()
  scene.add(ambientLight)

  tick()

  function tick() {
    requestAnimationFrame(tick)

    earth.update()

    renderer.render(scene, camera);
  }
}
