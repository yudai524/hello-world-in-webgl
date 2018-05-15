import * as THREE from 'three'

export default class AmbientLight extends THREE.AmbientLight {

  constructor() {
    const brandColor = 0x3e4a60
    super(brandColor)

    this.intensity = 10
  }
}
