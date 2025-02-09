/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "5089de856a7e39c47fa7.png";
;// CONCATENATED MODULE: ./src/js/GoblinGame.js

class GoblinGame {
  constructor() {
    this.gridSize = 4;
    this.cells = [];
    this.goblin = document.createElement("img");
    this.goblin.src = goblin_namespaceObject;
    this.goblin.classList.add("goblin");
    this.currentPosition = -1;
  }
  init() {
    const grid = document.querySelector(".game-grid");
    for (let i = 0; i < this.gridSize * this.gridSize; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
      this.cells.push(cell);
    }
    this.moveGoblin();
    setInterval(() => this.moveGoblin(), 1000);
  }
  moveGoblin() {
    let newPosition;
    do {
      newPosition = Math.floor(Math.random() * this.cells.length);
    } while (newPosition === this.currentPosition);
    this.cells[newPosition].appendChild(this.goblin);
    this.currentPosition = newPosition;
  }
}
/* harmony default export */ const js_GoblinGame = (GoblinGame);
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const game = new js_GoblinGame();
  game.init();
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;