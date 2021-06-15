import regeneratorRuntime from './runtime';

class RankListRenderer {
    constructor() {
        this.sharedCanvas = wx.getSharedCanvas();
        this.ctx = this.sharedCanvas.getContext('2d')
    }
    updateMaxScore = (currentScore) => {
        return new Promise((resolve, reject) => {
            wx.getUserCloudStorage({
                keyList: ['maxScore'],
                success: (res) => {
                    let maxScore = 0;
                    if (res.KVDataList && res.KVDataList.length > 0) {
                        maxScore = Number(res.KVDataList[0].value)
                        if (currentScore > maxScore) {
                            wx.setUserCloudStorage({
                                KVDataList: [{
                                    key: 'maxScore',
                                    value: String(currentScore)
                                }],
                                success: () => {
                                    resolve(currentScore)
                                },
                                fail: () => {
                                    reject(res)
                                }
                            })
                        }
                        else {
                            resolve(maxScore)
                        }
                    }
                }
            })
        })
    }
    getFriendData = () => {
        return new Promise((resolve, reject) => {
            wx.getFriendCloudStorage({
                keyList: ['maxScore'],
                success: (res) => {
                    resolve(res.data)
                },
                fail: (res) => {
                    reject(res)
                }
            })
        })
    }
    drawRankList = (dataList) => {
        console.log('dataList', dataList)
    }
    drawMaxScore = (maxScore) => {
        this.ctx.fillStyle = '#AF7AC5'
        this.ctx.font = "15px Georgia"
        this.ctx.fillText(`历史最高分为 ${maxScore}`, window.innerWidth / 2 + 20, 120);
    }
    listen = () => {
        wx.onMessage(async msg => {
            const type = msg.type
            const currentScore = msg.score
            if (type === 'updateMaxScore') {
                const maxScore = await this.updateMaxScore(currentScore)
                this.drawMaxScore(maxScore)
                const dataList = await this.getFriendData()
                this.drawRankList(dataList)
            }
        })
    }
}
const rankList = new RankListRenderer()
rankList.listen()//监听主域发送的消息