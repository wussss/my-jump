import fontObj from './font'
export default class Score {

	init(options) {
		this.material = new THREE.MeshBasicMaterial({ color: (options && options.fillStyle) ? options.fillStyle : 0xffffff, transparent: true })
		if (options && options.opacity) this.material.opacity = options.opacity
		this.options = options || {}
		const geometry = new THREE.TextGeometry('0', { 'font': fontObj, 'size': 6.0, 'height': 0.1 })
		this.instance = new THREE.Mesh(geometry, this.material)
		this.instance.name = 'scoreText'
	}

	updateScore(score) {
		const scoreStr = score.toString()
		this.instance = new THREE.Mesh(new THREE.TextGeometry(scoreStr, { 'font': fontObj, 'size': 6.0, 'height': 0.1 }), this.material)
	}
}