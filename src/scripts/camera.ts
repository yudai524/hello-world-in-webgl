import * as THREE from 'three'
import { OrbitControls } from 'three-orbitcontrols-ts'

export default class Camera extends THREE.PerspectiveCamera {
  // 必要に応じてメソッド生やして protected にする
  public controls: OrbitControls;

  constructor() {
    const width = window.innerWidth
    const height = window.innerHeight
    super(90, width / height, 1, 10000)

    this.position.set(0, 0, +1000);
    this.controls = new OrbitControls(this)

    window.addEventListener('resize', this.onResize.bind(this))
  }

  private onResize() {
    const width = window.innerWidth
    const height = window.innerHeight

    // カメラのアスペクト比を正す
    this.aspect = width / height;
    this.updateProjectionMatrix();
  }
}
