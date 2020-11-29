import gameView from './view'
import gameModel from './model'
//控制model和view的改变，实现页面跳转

class GameController {
  constructor() {
    this.gameView = gameView
    this.gameModel = gameModel
    this.gameModel.stageChanged.attach((args) => {
      const stageName = args.stage
      switch (stageName) {
        case 'game-over':
          this.gameView.showGameOverPage()
          break
        case 'game':
          this.gameView.showGamePage()
          break
        default:
      }
    })
  }

  initPages() {
    const gamePageCallback = () => {
      this.gameModel.setStage('game-over')
    }
    const gameOverPagesCallback = () => {
      this.gameModel.setStage('game')
    }
    this.gameView.initGamePage(gamePageCallback)
    this.gameView.initGameOverPage(gameOverPagesCallback)
    this.gameModel.setStage('game')
  }
}

export default new GameController()