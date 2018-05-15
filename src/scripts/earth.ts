import * as THREE from 'three'
import earthTexture from '../images/world.jpg'

export default class Earth extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.SphereGeometry(300, 30, 30)

    const loader = new THREE.TextureLoader()
    const texture = loader.load(earthTexture)
    const material = new THREE.MeshStandardMaterial({ map: texture })

    super(geometry, material)
  }

  public update() {
    this.rotation.x += 0.001
    this.rotation.y += 0.003
  }
}

