import * as THREE from 'three'
import Earth from './earth'
import Stars from './stars'
import Sun from './sun'
import AmbientLight from './ambient-light'
import Camera from './camera'
import Renderer from './renderer'

window.addEventListener('load', init)

function init() {
  const scene = new THREE.Scene()
  const renderer = new Renderer('.js-canvas')
  const camera = new Camera()

  const ambientLight = new AmbientLight()
  const sun = new Sun()
  const earth = new Earth()
  const stars = new Stars()

  scene.add(ambientLight)
  scene.add(sun)
  scene.add(earth)
  scene.add(stars)

  tick()

  function tick() {
    earth.update()

    renderer.render(scene, camera)
    requestAnimationFrame(tick)
  }
}
