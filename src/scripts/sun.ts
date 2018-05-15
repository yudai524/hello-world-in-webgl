import * as THREE from 'three'

export default class Sun extends THREE.DirectionalLight {

  constructor() {
    const white = 0xFFFFFF
    super(white)

    // ライトの位置を変更
    this.position.set(1, 1, 1);

    // 光の強さを倍に
    this.intensity = 2
  }
}
