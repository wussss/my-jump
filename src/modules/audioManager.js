import audioConf from '../../confs/audio-conf'
class AudioManager {
    constructor() {
        this.audioCtxList = []
    }
    init = () => {
        for (let key in audioConf.audioSources) {
            var audioCtx = wx.createInnerAudioContext()
            audioCtx.src = audioConf.audioSources[key]
            audioCtx.volume = 0.8
            this.audioCtxList.push(audioCtx)
        }
    }
    getAudioCtx = (num) => {
        this.init()
        return this.audioCtxList[num]
    }
}
export default new AudioManager()