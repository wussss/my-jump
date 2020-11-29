// 带圆角的矩形
export function createRoundRect(ctx, color, x, y, r, w, h) {
    /*
    @param ctx:画笔
    @param x:矩形的起点
    @param y:矩形的起点
    @param r:圆弧半径
    @param w:矩形的宽度
    @param h:矩形的高度
    */
    ctx.beginPath()
    ctx.fillStyle = color

    // 左上角
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5)
    //上
    ctx.lineTo(x + w, y)

    // 右上角
    ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2)
    // 右
    ctx.lineTo(x + w, y + h)

    // 右下角
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5)
    // 下
    ctx.lineTo(x, y + h)

    // 左下角
    ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI)
    // 左
    ctx.lineTo(x, y)

    ctx.fill()
    ctx.closePath()
}
