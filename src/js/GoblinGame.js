import goblinImage from "../img/goblin.png";

class GoblinGame {
  constructor() {
    this.gridSize = 4;
    this.cells = [];
    this.goblin = document.createElement("img");
    this.goblin.src = goblinImage;
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

export default GoblinGame;
