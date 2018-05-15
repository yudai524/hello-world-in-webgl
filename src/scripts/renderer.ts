import * as THREE from 'three'

export default class Renderer extends THREE.WebGLRenderer {
  constructor(selector) {
    const width = window.innerWidth
    const height = window.innerHeight
    super(
      {
        canvas: document.querySelector(selector) as HTMLCanvasElement,
      },
    )

    this.setSize(width, height)
    // スマホでぼやけないようにデバイスピクセル比を設定
    this.setPixelRatio(window.devicePixelRatio)

    window.addEventListener('resize', this.onResize.bind(this))
  }

  private onResize() {
    const width = window.innerWidth
    const height = window.innerHeight

    // レンダラーのサイズを調整する
    this.setSize(width, height)
    this.setPixelRatio(window.devicePixelRatio)
  }
}
