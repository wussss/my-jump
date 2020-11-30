import * as THREE from '../../libs/three'
import { createRoundRect } from './createRoundRect'

export const create2dCanvas = () => {
    const myCanvas = document.createElement('canvas')
    myCanvas.width = window.innerWidth
    myCanvas.height = window.innerHeight
    const ctx = myCanvas.getContext('2d')
    return { myCanvas, ctx }
}

//2d的canvas平面-> texture -> material -> mesh
// 将画出的图形作为纹理material去画一个平面几何体
export const canvasToMesh = (canvas, width) => {
    const aspect = window.innerHeight / window.innerWidth
    const texture = new THREE.Texture(canvas)
    texture.needsUpdate = true //在下次使用纹理时触发一次更新

    const geometry = new THREE.PlaneGeometry(width, width * aspect)
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide
    })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.name = '2d canvas'
    return mesh
}
//游戏结束
export const GameOver = () => {

    const { myCanvas, ctx } = create2dCanvas()

    const color = 'rgba(97, 106, 107, 0.3)'
    createRoundRect(ctx, color, window.innerWidth / 2 - 150, 100, 8, 300, 150)

    ctx.fillStyle = 'white'
    ctx.font = "30px Georgia"
    ctx.fillText("Game Over", window.innerWidth / 2 - 60, 160);

    // createRoundRect(ctx, 'white', window.innerWidth / 2 - 50, 180, 8, 100, 30)

    // ctx.fillStyle = '#58D68D'
    // ctx.font = '15px Georgia'
    // ctx.fillText("再来一局", window.innerWidth / 2 - 30, 200)

    const image = wx.createImage()
    image.src = 'res/images/again.png'
    image.onload = () => {
        ctx.drawImage(image,window.innerWidth / 2 - 50, 180,100,40)
    }
    return myCanvas
}