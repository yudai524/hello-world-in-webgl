import * as THREE from 'three'


function init() {
  const renderer = new THREE.WebGLRenderer(
    {
      canvas: document.querySelector('.js-canvas') as HTMLCanvasElement,
    }
  )

  const width = window.innerWidth
  const height = window.innerHeight
  renderer.setSize(width, height)

  // スマホでぼやけないようにデバイスピクセル比も設定
  renderer.setPixelRatio(window.devicePixelRatio)

  const scene = new THREE.Scene()

  // new THREE.PerspectiveCamera(画角, アスペクト比, 描画開始距離, 描画終了距離)
  const camera = new THREE.PerspectiveCamera(90, width / height, 1, 10000)
  camera.position.set(0, 0, +1000);

  // new THREE.BoxGeometry(幅, 高さ, 奥行き)
  const geometry = new THREE.BoxGeometry(500, 500, 500)
  const material = new THREE.MeshStandardMaterial({ color: 0x0000FF })
  const box = new THREE.Mesh(geometry, material)

  scene.add(box)

  // 平行光源は太陽光のように一定方向から差し込む光
  const light = new THREE.DirectionalLight(0xFFFFF)
  // ライトの位置を変更
  light.position.set(1, 1, 1);
  // 光の強さを倍に
  light.intensity = 2

  scene.add(light)

  renderer.render(scene, camera);

  tick()
  function tick() {
    requestAnimationFrame(tick)

    box.rotation.x += 0.01
    box.rotation.y += 0.01

    renderer.render(scene, camera);
  }
}


console.log('Parcel is here!!!')
init()