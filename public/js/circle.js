'use strict';
// /**
//	* @module Circle module
//	*/
// (function() {

// Test object for level first look at game
// MAX colorSlice for Objects is 170 deg!
let testLevelObj = {
	'name': '1',
	'colorCount': 5,
	'colorSlice': [45, 45, 90, 150, 30],
	'colors': ['#26C6DA', '#D4E157', '#FF7043', '#7E57C2', '#B2DFDB'],
	'circleSpeed': 1,
	'bulletSpeed': 1
};

/**
 * @class Circle class
 */
class Circle {
	constructor(level) {
		this.level = level;
		this.el = document.querySelector('.js-circle');
	}

	_getRotationDegs() {
		this._rotationDegs = [0];
		this._rotationDeg = 0;
		for (let i = 0; i < this.level.colorCount; i++) {
			this._rotationDeg += +this.level.colorSlice[i];
			this._rotationDegs.push(this._rotationDeg);
		}
	}

	_getScaleMetric() {
		this._scaleMetrics = [];
		for (let i = 0; i < this.level.colorCount; i++) {
			this._scale = this.level.colorSlice[i] <= 90 ? 1 : 10;
			this._scaleMetrics.push(this._scale);
		}
	}

	_renderSlices() {
		this._getRotationDegs();
		this._getScaleMetric();
		for (let i = 0; i < this.level.colorCount; i++) {
			let newSector = document.createElement('li');
			newSector.classList.add('circle__part');
			newSector.style.background = this.level.colors[i];
			newSector.style.transform = `rotate(${this._rotationDegs[i]}deg) skew(${90 - this.level.colorSlice[i]}deg) scale(${this._scaleMetrics[i]})`;
			this.el.appendChild(newSector);
		}
	}

	_spin() {

	}

}

let myCircle = new Circle(testLevelObj);

myCircle._renderSlices();

// })();