/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/js/game.js */ "./src/js/game.js");

window.addEventListener("DOMContentLoaded", function () {
  // debugger
  var game = new _src_js_game_js__WEBPACK_IMPORTED_MODULE_0__["default"](); // this.playButton = document.getElementsByClassName("play-button");
}); // const note = () => {
//   let context = new window.AudioContext();
//     let analyser = context.createAnalyser();
//   // let buffer = new Buffer(context, [
//   //   "./assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3"
//   // ]);
//   // buffer.loadAll();
//   // // debugger
//   // let sound = new Music(context, buffer.getSoundByIndex(0));
//   // // debugger
//   // sound.play();
//   const audio = document.getElementById('audio');
//   audio.src =
//     "./assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3";
//     let src = context.createMediaElementSource(audio);
//     src.connect(analyser);
//     let bufferLength = analyser.frequencyBinCount;
//     let dataArray = new Uint8Array(bufferLength);
//     window.analyser = analyser;
//     window.src = src;
//     window.context = context;
//     window.dataArray = dataArray;
//     audio.play();
//     analyser.getByteFrequencyData(dataArray);
// };
// document.querySelector("button").addEventListener("click", note);

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _visualizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visualizer */ "./src/js/visualizer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game =
/*#__PURE__*/
function () {
  function Game() {
    var _this = this;

    _classCallCheck(this, Game);

    this.canvas = document.getElementById("canvas");
    this.playButton = document.getElementById("play-button");
    this.stopButton = document.getElementById("stop-button");
    this.audio = document.getElementById("audio");

    this.playButton.onclick = function () {
      _this.play(); //   audio.src =
      //     "assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3";

    };

    this.stopButton.onclick = function () {
      return _this.visualizer.mediaElement.pause();
    };

    this.visualInit(); // this.playButton.onclick = () => {
    //   let sound = new THREE.PositionalAudio(this.visualizer.listener);
    //   console.log("onclick");
    //   this.visualizer.audioLoader.load(
    //     "assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3",
    //     function(buffer) {
    //       console.log("playing??");
    //       sound.setBuffer(buffer);
    //       sound.setVolume(0.5);
    //       sound.setRefDistance(20);
    //       sound.play();
    //     }
    //   );
    //   this.visualizer.cube.add(sound);
    // };
  }

  _createClass(Game, [{
    key: "visualInit",
    value: function visualInit() {
      // const context = new AudioContext();
      // let src = context.createMediaElementSource(audio);
      // const analyser = context.createAnalyser();
      // src.connect(analyser);
      // analyser.connect(context.destination);
      // const bufferLength = analyser.frequencyBinCount;
      // const dataArray = new Uint8Array(bufferLength);
      this.visualizer = new _visualizer__WEBPACK_IMPORTED_MODULE_0__["default"](this.canvas);
    }
  }, {
    key: "play",
    value: function play() {
      console.log("playing");
      this.visualizer.mediaElement.play();
      window.visualizer = this.visualizer;
      this.visualizer.renderFrame();
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/js/visualizer.js":
/*!******************************!*\
  !*** ./src/js/visualizer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import { THREE } from '../three';
var Visualizer =
/*#__PURE__*/
function () {
  function Visualizer(canvas) {
    _classCallCheck(this, Visualizer);

    // this.analyser = analyser;
    // this.dataArray = dataArray;
    this.canvas = canvas;
    this.colorTicker = 0;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.animate = this.animate.bind(this);
    this.init();
  }

  _createClass(Visualizer, [{
    key: "animate",
    value: function animate() {
      this.renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(this.animate);
    } // switchAttributes(){
    // }

  }, {
    key: "init",
    value: function init() {
      var degree = Math.PI / 180;
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.size = 1;
      this.geometry = new THREE.SphereGeometry(this.size, 15, 15);
      this.listener = new THREE.AudioListener();
      this.camera.add(this.listener);
      this.audio = new THREE.Audio(this.listener);
      this.mediaElement = new Audio("assets/Feel So Close (Benny Benassi Remix) (Japan Bonus Track).mp3");
      this.mediaElement.autoplay = false;
      this.mediaElement.loop = true;
      this.mediaElement.hasPlaybackControl = true; // this.mediaElement.play();

      this.audio.setMediaElementSource(this.mediaElement);
      var analyser = new THREE.AudioAnalyser(this.audio, 1024); // this.audioLoader = new THREE.AudioLoader();

      this.material = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors
      });
      this.sphere = new THREE.Mesh(this.geometry, this.material);
      this.sphere.rotation.x = 45 * degree;
      this.sphere.rotation.y = 10 * degree;
      this.scene.add(this.sphere);
      this.camera.position.z = 5;
    }
  }, {
    key: "renderFrame",
    value: function renderFrame() {
      var _this = this;

      window.geo = this.geometry;
      var toggleColor = "positive";
      setInterval(function () {
        var numSides = _this.geometry.faces.length;

        for (var i = 0; i < numSides; i++) {
          var vertIndex = _this.geometry.faces[i];
          var color = new THREE.Color(0xffffff);
          color.setRGB(_this.colorTicker, Math.random(1.0), _this.colorTicker);
          vertIndex.color = color;
        }

        _this.geometry.elementsNeedUpdate = true;

        if (toggleColor === "negative") {
          _this.colorTicker -= 0.05;
          if (_this.colorTicker <= 0) toggleColor = "positive";
        } else if (toggleColor === "positive") {
          _this.colorTicker += 0.05;
          if (_this.colorTicker >= 1) toggleColor = "negative";
        }
      }, 100);
      this.animate();
    }
  }]);

  return Visualizer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Visualizer);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy92aXN1YWxpemVyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnYW1lIiwiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5QnV0dG9uIiwic3RvcEJ1dHRvbiIsImF1ZGlvIiwib25jbGljayIsInBsYXkiLCJ2aXN1YWxpemVyIiwibWVkaWFFbGVtZW50IiwicGF1c2UiLCJ2aXN1YWxJbml0IiwiVmlzdWFsaXplciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJGcmFtZSIsImNvbG9yVGlja2VyIiwic2NlbmUiLCJUSFJFRSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhbmltYXRlIiwiYmluZCIsImluaXQiLCJyZW5kZXJlciIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRlZ3JlZSIsIk1hdGgiLCJQSSIsIldlYkdMUmVuZGVyZXIiLCJzZXRTaXplIiwic2l6ZSIsImdlb21ldHJ5IiwiU3BoZXJlR2VvbWV0cnkiLCJsaXN0ZW5lciIsIkF1ZGlvTGlzdGVuZXIiLCJhZGQiLCJBdWRpbyIsImF1dG9wbGF5IiwibG9vcCIsImhhc1BsYXliYWNrQ29udHJvbCIsInNldE1lZGlhRWxlbWVudFNvdXJjZSIsImFuYWx5c2VyIiwiQXVkaW9BbmFseXNlciIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJ2ZXJ0ZXhDb2xvcnMiLCJGYWNlQ29sb3JzIiwic3BoZXJlIiwiTWVzaCIsInJvdGF0aW9uIiwieCIsInkiLCJwb3NpdGlvbiIsInoiLCJnZW8iLCJ0b2dnbGVDb2xvciIsInNldEludGVydmFsIiwibnVtU2lkZXMiLCJmYWNlcyIsImxlbmd0aCIsImkiLCJ2ZXJ0SW5kZXgiLCJjb2xvciIsIkNvbG9yIiwic2V0UkdCIiwicmFuZG9tIiwiZWxlbWVudHNOZWVkVXBkYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUVBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2xEO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLHVEQUFKLEVBQWIsQ0FGa0QsQ0FJbEQ7QUFDQyxDQUxELEUsQ0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLG9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDQTs7SUFFTUEsSTs7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ZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9zcmMvanMvZ2FtZS5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4vLyBkZWJ1Z2dlclxuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbi8vIHRoaXMucGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwbGF5LWJ1dHRvblwiKTtcbn0pO1xuXG5cbi8vIGNvbnN0IG5vdGUgPSAoKSA9PiB7XG4vLyAgIGxldCBjb250ZXh0ID0gbmV3IHdpbmRvdy5BdWRpb0NvbnRleHQoKTtcbi8vICAgICBsZXQgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4vLyAgIC8vIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKGNvbnRleHQsIFtcbi8vICAgLy8gICBcIi4vYXNzZXRzL0ZlZWwgU28gQ2xvc2UgKEJlbm55IEJlbmFzc2kgUmVtaXgpIChKYXBhbiBCb251cyBUcmFjaykubXAzXCJcbi8vICAgLy8gXSk7XG4vLyAgIC8vIGJ1ZmZlci5sb2FkQWxsKCk7XG4vLyAgIC8vIC8vIGRlYnVnZ2VyXG4vLyAgIC8vIGxldCBzb3VuZCA9IG5ldyBNdXNpYyhjb250ZXh0LCBidWZmZXIuZ2V0U291bmRCeUluZGV4KDApKTtcbi8vICAgLy8gLy8gZGVidWdnZXJcbi8vICAgLy8gc291bmQucGxheSgpO1xuXG4vLyAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1ZGlvJyk7XG4vLyAgIGF1ZGlvLnNyYyA9XG4vLyAgICAgXCIuL2Fzc2V0cy9GZWVsIFNvIENsb3NlIChCZW5ueSBCZW5hc3NpIFJlbWl4KSAoSmFwYW4gQm9udXMgVHJhY2spLm1wM1wiO1xuXG4vLyAgICAgbGV0IHNyYyA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbi8vICAgICBzcmMuY29ubmVjdChhbmFseXNlcik7XG4vLyAgICAgbGV0IGJ1ZmZlckxlbmd0aCA9IGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuLy8gICAgIGxldCBkYXRhQXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXJMZW5ndGgpO1xuLy8gICAgIHdpbmRvdy5hbmFseXNlciA9IGFuYWx5c2VyO1xuLy8gICAgIHdpbmRvdy5zcmMgPSBzcmM7XG4vLyAgICAgd2luZG93LmNvbnRleHQgPSBjb250ZXh0O1xuLy8gICAgIHdpbmRvdy5kYXRhQXJyYXkgPSBkYXRhQXJyYXk7XG4gICAgXG4vLyAgICAgYXVkaW8ucGxheSgpO1xuLy8gICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGRhdGFBcnJheSk7XG4vLyB9O1xuXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBub3RlKTtcbiIsImltcG9ydCBWaXN1YWxpemVyIGZyb20gJy4vdmlzdWFsaXplcic7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgdGhpcy5wbGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5LWJ1dHRvblwiKTtcbiAgICB0aGlzLnN0b3BCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b3AtYnV0dG9uXCIpO1xuICAgIHRoaXMuYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvXCIpO1xuICAgIFxuXG4gICAgdGhpcy5wbGF5QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICAvLyAgIGF1ZGlvLnNyYyA9XG4gICAgLy8gICAgIFwiYXNzZXRzL0ZlZWwgU28gQ2xvc2UgKEJlbm55IEJlbmFzc2kgUmVtaXgpIChKYXBhbiBCb251cyBUcmFjaykubXAzXCI7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHRoaXMuc3RvcEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdGhpcy52aXN1YWxpemVyLm1lZGlhRWxlbWVudC5wYXVzZSgpO1xuICAgIHRoaXMudmlzdWFsSW5pdCgpO1xuXG4gICAgICAgIC8vIHRoaXMucGxheUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAvLyAgIGxldCBzb3VuZCA9IG5ldyBUSFJFRS5Qb3NpdGlvbmFsQXVkaW8odGhpcy52aXN1YWxpemVyLmxpc3RlbmVyKTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIm9uY2xpY2tcIik7XG4gICAgICAgIC8vICAgdGhpcy52aXN1YWxpemVyLmF1ZGlvTG9hZGVyLmxvYWQoXG4gICAgICAgIC8vICAgICBcImFzc2V0cy9GZWVsIFNvIENsb3NlIChCZW5ueSBCZW5hc3NpIFJlbWl4KSAoSmFwYW4gQm9udXMgVHJhY2spLm1wM1wiLFxuICAgICAgICAvLyAgICAgZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwicGxheWluZz8/XCIpO1xuICAgICAgICAvLyAgICAgICBzb3VuZC5zZXRCdWZmZXIoYnVmZmVyKTtcbiAgICAgICAgLy8gICAgICAgc291bmQuc2V0Vm9sdW1lKDAuNSk7XG4gICAgICAgIC8vICAgICAgIHNvdW5kLnNldFJlZkRpc3RhbmNlKDIwKTtcbiAgICAgICAgLy8gICAgICAgc291bmQucGxheSgpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICk7XG4gICAgICAgIC8vICAgdGhpcy52aXN1YWxpemVyLmN1YmUuYWRkKHNvdW5kKTtcbiAgICAgICAgLy8gfTtcbiAgfVxuXG4gIHZpc3VhbEluaXQoKXtcbiAgICAvLyBjb25zdCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIC8vIGxldCBzcmMgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgLy8gY29uc3QgYW5hbHlzZXIgPSBjb250ZXh0LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgLy8gc3JjLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgIC8vIGFuYWx5c2VyLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgLy8gY29uc3QgYnVmZmVyTGVuZ3RoID0gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgLy8gY29uc3QgZGF0YUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyTGVuZ3RoKTtcbiAgICBcbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSBuZXcgVmlzdWFsaXplcih0aGlzLmNhbnZhcyk7XG4gICAgXG4gICAgXG5cblxuICB9XG5cbiAgcGxheSgpe1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwicGxheWluZ1wiKVxuXG5cbiAgICBcbiAgICBcbiAgICB0aGlzLnZpc3VhbGl6ZXIubWVkaWFFbGVtZW50LnBsYXkoKTtcbiAgICB3aW5kb3cudmlzdWFsaXplciA9IHRoaXMudmlzdWFsaXplcjtcbiAgICB0aGlzLnZpc3VhbGl6ZXIucmVuZGVyRnJhbWUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyIsIi8vIGltcG9ydCB7IFRIUkVFIH0gZnJvbSAnLi4vdGhyZWUnO1xuXG5jbGFzcyBWaXN1YWxpemVyIHtcbiAgY29uc3RydWN0b3IoY2FudmFzKXtcbiAgICAvLyB0aGlzLmFuYWx5c2VyID0gYW5hbHlzZXI7XG4gICAgLy8gdGhpcy5kYXRhQXJyYXkgPSBkYXRhQXJyYXk7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5jb2xvclRpY2tlciA9IDA7XG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICA2NSxcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgMC4xLFxuICAgICAgMTAwMFxuICAgICk7XG4gICAgXG4gICAgdGhpcy5hbmltYXRlID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcylcblxuICAgIFxuICAgIHRoaXMuaW5pdCgpO1xuXG5cblxuICB9XG5cbiAgYW5pbWF0ZSgpeyAgICBcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggdGhpcy5hbmltYXRlICk7XG4gIH1cblxuICAvLyBzd2l0Y2hBdHRyaWJ1dGVzKCl7XG5cbiAgLy8gfVxuICBpbml0KCl7XG4gICAgY29uc3QgZGVncmVlID0gTWF0aC5QSS8xODA7XG4gICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzOiB0aGlzLmNhbnZhcyB9KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICB0aGlzLnNpemUgPSAxO1xuICAgIFxuICAgIFxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkodGhpcy5zaXplLCAxNSwgMTUpO1xuXG4gICAgdGhpcy5saXN0ZW5lciA9IG5ldyBUSFJFRS5BdWRpb0xpc3RlbmVyKCk7XG4gICAgdGhpcy5jYW1lcmEuYWRkKHRoaXMubGlzdGVuZXIpO1xuICAgIHRoaXMuYXVkaW8gPSBuZXcgVEhSRUUuQXVkaW8odGhpcy5saXN0ZW5lcik7XG4gICAgdGhpcy5tZWRpYUVsZW1lbnQgPSBuZXcgQXVkaW8oXG4gICAgICBcImFzc2V0cy9GZWVsIFNvIENsb3NlIChCZW5ueSBCZW5hc3NpIFJlbWl4KSAoSmFwYW4gQm9udXMgVHJhY2spLm1wM1wiXG4gICAgKTtcbiAgICB0aGlzLm1lZGlhRWxlbWVudC5hdXRvcGxheSA9IGZhbHNlO1xuICAgIHRoaXMubWVkaWFFbGVtZW50Lmxvb3AgPSB0cnVlO1xuICAgIHRoaXMubWVkaWFFbGVtZW50Lmhhc1BsYXliYWNrQ29udHJvbCA9IHRydWU7XG4gICAgLy8gdGhpcy5tZWRpYUVsZW1lbnQucGxheSgpO1xuICAgIFxuICAgIHRoaXMuYXVkaW8uc2V0TWVkaWFFbGVtZW50U291cmNlKHRoaXMubWVkaWFFbGVtZW50KTtcblxuICAgIGxldCBhbmFseXNlciA9IG5ldyBUSFJFRS5BdWRpb0FuYWx5c2VyKHRoaXMuYXVkaW8sIDEwMjQpO1xuICAgIC8vIHRoaXMuYXVkaW9Mb2FkZXIgPSBuZXcgVEhSRUUuQXVkaW9Mb2FkZXIoKTtcblxuICAgIFxuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgdmVydGV4Q29sb3JzOiBUSFJFRS5GYWNlQ29sb3JzXG4gICAgfSk7XG4gICAgdGhpcy5zcGhlcmUgPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICB0aGlzLnNwaGVyZS5yb3RhdGlvbi54ID0gNDUgKiBkZWdyZWU7XG4gICAgdGhpcy5zcGhlcmUucm90YXRpb24ueSA9IDEwICogZGVncmVlO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuc3BoZXJlKTtcblxuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuICAgIFxuICAgIFxuICB9XG5cblxuICByZW5kZXJGcmFtZSgpe1xuICAgIHdpbmRvdy5nZW8gPSB0aGlzLmdlb21ldHJ5O1xuICAgIGxldCB0b2dnbGVDb2xvciA9IFwicG9zaXRpdmVcIjtcbiAgXG5cbiAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgbGV0IG51bVNpZGVzID0gdGhpcy5nZW9tZXRyeS5mYWNlcy5sZW5ndGg7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1TaWRlczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgdmVydEluZGV4ID0gdGhpcy5nZW9tZXRyeS5mYWNlc1tpXTtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IG5ldyBUSFJFRS5Db2xvcigweGZmZmZmZik7XG4gICAgICAgICAgICBjb2xvci5zZXRSR0IodGhpcy5jb2xvclRpY2tlciwgTWF0aC5yYW5kb20oMS4wKSwgdGhpcy5jb2xvclRpY2tlcik7XG4gICAgICAgICAgICB2ZXJ0SW5kZXguY29sb3IgPSBjb2xvcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nZW9tZXRyeS5lbGVtZW50c05lZWRVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgaWYodG9nZ2xlQ29sb3IgPT09IFwibmVnYXRpdmVcIil7IFxuICAgICAgICAgICAgdGhpcy5jb2xvclRpY2tlciAtPSAwLjA1XG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvclRpY2tlciA8PSAwKSB0b2dnbGVDb2xvciA9IFwicG9zaXRpdmVcIjtcbiAgICAgICAgICB9ZWxzZSBpZiAodG9nZ2xlQ29sb3IgPT09IFwicG9zaXRpdmVcIikge1xuICAgICAgICAgICAgdGhpcy5jb2xvclRpY2tlciArPSAwLjA1O1xuICAgICAgICAgICAgaWYgKHRoaXMuY29sb3JUaWNrZXIgPj0gMSkgdG9nZ2xlQ29sb3IgPSBcIm5lZ2F0aXZlXCI7XG4gICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgfSwxMDApO1xuICAgICAgICBcbiAgdGhpcy5hbmltYXRlKCk7XG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaXN1YWxpemVyOyJdLCJzb3VyY2VSb290IjoiIn0=