import * as THREE from 'three'
import Raf from '../Utils/Raf.js'

import WebGL from '../index.js'

export default class MainScene {
  static singleton

  constructor(_options = {}) {
    if (MainScene.singleton) {
      return MainScene.singleton
    }
    MainScene.singleton = this

    this.inView = false
    this.WebGL = new WebGL()
    this.Raf = new Raf()
    this.scene = this.WebGL.scene

    this.init()
  }

  init() {
    this.instance = new THREE.Group()

    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshPhysicalMaterial({
        color: 0x00dc82,
      })
    )

    this.light = new THREE.PointLight(0xffffff, 14, 12, 1)
    this.light.position.copy(this.WebGL.camera.initPosition)

    this.instance.add(...[this.light, this.cube])
    this.scene.add(this.instance)
  }
}
