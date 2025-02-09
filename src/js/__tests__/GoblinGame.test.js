import GoblinGame from "../GoblinGame";
jest.mock("../../img/goblin.png", () => "goblin_image_mock");

describe("GoblinGame", () => {
  let game;
  let gridContainer;

  beforeEach(() => {
    gridContainer = document.createElement("div");
    gridContainer.classList.add("game-grid");
    document.body.appendChild(gridContainer);
    game = new GoblinGame();
  });

  afterEach(() => {
    document.body.innerHTML = "";
    game = null;
    jest.useRealTimers();
  });

  it("Should create a 4x4 grid with 16 cells", () => {
    game.init();
    expect(game.cells.length).toBe(16);
    expect(document.querySelectorAll(".cell").length).toBe(16);
  });

  it("Should create a goblin image with correct properties", () => {
    game.init();
    expect(game.goblin.tagName).toBe("IMG");
    expect(game.goblin.src).toContain("goblin_image_mock");
    expect(game.goblin.classList.contains("goblin")).toBe(true);
  });

  it("Should move the goblin to a different position", () => {
    game.init();
    const initialPosition = game.currentPosition;
    game.moveGoblin();
    expect(game.currentPosition).not.toBe(initialPosition);
  });

  it("Should append the goblin to a cell in the grid", () => {
    game.init();
    const initialCell = game.cells[game.currentPosition];
    expect(initialCell.contains(game.goblin)).toBe(true);
    game.moveGoblin();
    const newCell = game.cells[game.currentPosition];
    expect(newCell.contains(game.goblin)).toBe(true);
    expect(initialCell.contains(game.goblin)).toBe(false);
  });

  it("Should not move the goblin to the same position consecutively", () => {
    game.init();
    const initialPosition = game.currentPosition;
    game.moveGoblin();
    expect(game.currentPosition).not.toBe(initialPosition);
  });

  it("Should call moveGoblin every second (using setInterval)", () => {
    jest.useFakeTimers();
    game.init();
    const initialPosition = game.currentPosition;
    jest.advanceTimersByTime(1000);
    expect(game.currentPosition).not.toBe(initialPosition);
    jest.advanceTimersByTime(1000);
    expect(game.currentPosition).not.toBe(initialPosition);
    jest.useRealTimers();
  });

  it("Should add cells to the DOM when init is called", () => {
    game.init();
    expect(document.querySelectorAll(".cell").length).toBe(16);
    expect(gridContainer.children.length).toBe(16);
  });
});
