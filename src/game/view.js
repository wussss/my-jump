import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'
import Event from '../utils/event'

class GameView {
  constructor() {
    this.restartButtonClicked = new Event(this)
  }

  showGameOverPage() {
    this.gameOverPage.show()
  }

  showGamePage() {
    this.gameOverPage.hide()
    this.gamePage.restart()
    this.gamePage.show()
  }

  initGamePage(callback) {
    this.gamePage = new GamePage(callback)
    this.gamePage.init()
  }

  initGameOverPage(callback) {
    this.gameOverPage = new GameOverPage(callback)
    this.gameOverPage.init({
      camera: this.gamePage.scene.camera.instance
    })
  }
}

export default new GameView()