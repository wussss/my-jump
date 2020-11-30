import { GameOver, canvasToMesh } from '../view2d/GameOver'
import AudioManager from '../modules/audioManager'
export default class GameOverPage {
  constructor(callback) {
    this.cb = callback
    this.camera = null
    this.mesh = new THREE.Object3D()
    this.openDataCtx = wx.getOpenDataContext()
    this.sharedCanvas = this.openDataCtx.canvas
    this.sharedCanvas.width = window.innerWidth
    this.sharedCanvas.height = window.innerHeight
    this.texture = null
  }

  show() {
    this.mesh.visible = true
    const timer = setInterval(() => {
      this.texture.needsUpdate = true
    }, 2000)
    setTimeout(() => {
      clearInterval(timer)
    }, 10000)
    this.bindTouchEvent()
    AudioManager.getAudioCtx(1).play()
  }

  hide() {
    this.mesh.visible = false
    this.removeTouchEvent()
  }

  init(options) {
    this.initGameoverCanvas()
    this.initRankList()
    this.camera = options.camera
    this.camera.add(this.mesh)
    this.mesh.visible = false
  }

  initGameoverCanvas = () => {
    const gameOverCanvas = GameOver()
    const cameraMesh = canvasToMesh(gameOverCanvas, 60)
    this.mesh.add(cameraMesh)
  }
  initRankList = () => {
    const aspect = window.innerHeight / window.innerWidth
    this.texture = new THREE.Texture(this.sharedCanvas)
    const geometry = new THREE.PlaneGeometry(60, 60 * aspect)
    const material = new THREE.MeshBasicMaterial({
      map: this.texture,
      transparent: true,
      side: THREE.DoubleSide
    })
    const rankMesh = new THREE.Mesh(geometry, material)
    rankMesh.name = 'rankMesh'
    this.mesh.add(rankMesh)
  }
  onTouchEnd = (e) => {
    const X = e.changedTouches[0].clientX
    const Y = e.changedTouches[0].clientY
    if (X >= 100 && X <= 200 && Y >= 180 && Y <= 210) {
      this.cb()
    }
  }//点击'再来一局'重新开始

  bindTouchEvent() {
    canvas.addEventListener('touchend', this.onTouchEnd)
  }

  removeTouchEvent() {
    canvas.removeEventListener('touchend', this.onTouchEnd)
  }
}