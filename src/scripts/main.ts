import * as THREE from 'three'
import earthTexture from '../images/world.jpg'

window.addEventListener('load', init)

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
  // const geometry = new THREE.BoxGeometry(500, 500, 500)
  const geometry = new THREE.SphereGeometry(300, 30, 30)
  const loader = new THREE.TextureLoader()
  const texture = loader.load(earthTexture)
  // const material = new THREE.MeshStandardMaterial({ color: 0xFF0000 })
  const material = new THREE.MeshStandardMaterial({ map: texture })
  const box = new THREE.Mesh(geometry, material)

  scene.add(box)

  // 平行光源は太陽光のように一定方向から差し込む光
  const light = new THREE.DirectionalLight(0xFFFFFF)
  // const light = new THREE.AmbientLight(0xFFFFFF)
  // ライトの位置を変更
  light.position.set(1, 1, 1);
  // 光の強さを倍に
  light.intensity = 2

  scene.add(light)

  const light2 = new THREE.AmbientLight(0x3e4a60)
  light2.intensity = 10
  scene.add(light2)

  // 星屑を作成します (カメラの動きをわかりやすくするため)
  createStarField();

  function createStarField() {
    // 形状データを作成
    const geometry = new THREE.Geometry();
    for (let i = 0; i < 1000; i++) {
      geometry.vertices.push(new THREE.Vector3(
        3000 * (Math.random() - 0.5),
        3000 * (Math.random() - 0.5),
        3000 * (Math.random() - 0.5),
      ));
    }
    // マテリアルを作成
    const material = new THREE.PointsMaterial({
      size: 1,
      color: 0xFFFFFF,
    });
    // 物体を作成
    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);
  }

  // renderer.render(scene, camera);

  tick()

  function tick() {
    requestAnimationFrame(tick)

    box.rotation.x += 0.001
    box.rotation.y += 0.005

    renderer.render(scene, camera);
  }
}
