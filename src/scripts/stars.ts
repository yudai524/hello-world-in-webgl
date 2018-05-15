import * as THREE from 'three'

export default class Stars extends THREE.Points {
  constructor() {
    const geometry = new THREE.Geometry();
    for (let i = 0; i < 1000; i++) {
      geometry.vertices.push(new THREE.Vector3(
        3000 * (Math.random() - 0.5),
        3000 * (Math.random() - 0.5),
        3000 * (Math.random() - 0.5),
      ));
    }

    const material = new THREE.PointsMaterial({
      size: 1,
      color: 0xFFFFFF,
    });

    super(geometry, material)
  }
}
