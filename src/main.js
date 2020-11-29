import * as THREE from '../libs/three'
import Game from '././game/index'
window.THREE = THREE

export default class Main {
  static init() {
    Game.init()
  }//静态方法，只能通过类本身调用
}