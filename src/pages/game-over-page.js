import sceneConf from '../../confs/scene-conf'
import { GameOver, canvasToMesh } from '../view2d/GameOver'

export default class GameOverPage {
  constructor(callback) {
    this.cb = callback
    this.camera = null
    this.mesh = null
  }

  show() {
    this.mesh.visible = true
    this.bindTouchEvent()
  }

  hide() {
    this.mesh.visible = false
    this.removeTouchEvent()
  }

  init(options) {
    this.initGameoverCanvas(options)
    this.mesh.visible = false
  }

  initGameoverCanvas = (options) => {
    const gameOverCanvas = GameOver()
    this.mesh = canvasToMesh(gameOverCanvas, 60)
    this.camera = options.camera
    this.camera.add(this.mesh)
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