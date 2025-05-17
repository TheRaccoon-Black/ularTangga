import { diceData } from "./diceData.js";

const naikSound = new Audio("assets/sounds/naik.mp3");
const turunSound = new Audio("assets/sounds/turun.mp3");
const correctSound = new Audio("assets/sounds/correct.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");
const finishSound = new Audio("assets/sounds/finish.mp3");
export class Game {
  players = [];

  position = 0;
  mode;
  level;
  constructor(board) {
    this.board = board;
    this.currentPlayerNumber = 1;
    this.mainContainer = document.querySelector(".main-container");
  }

  createGameBoard() {
    const boardImg = document.querySelector(".board-img");
    const boardEl = document.querySelector(".board");

    const squares = boardEl.querySelectorAll(".square");
    squares.forEach((square) => {
      square.remove();
    });

    const [boardWidth, boardHeight] = [
      boardImg.clientWidth,
      boardImg.clientHeight,
    ];
    const squareArea = boardHeight / 10 + boardWidth / 10;
    const boardStyles = {
      width: `${boardWidth}px`,
      height: `${boardHeight}px`,
      background: `transparent`,
    };

    for (const [property, value] of Object.entries(boardStyles)) {
      boardEl.style[property] = value;
    }

    const squareStyles = {
      width: `${squareArea / 2}px`,
      height: `${squareArea / 2}px`,
      background: `transparent`,
    };

    const ids = this.generateBoardSquaresPattern();

    for (const id of ids) {
      const squareDiv = document.createElement("div");
      squareDiv.classList.add("square");
      squareDiv.id = `${id}`;

      for (let i = 1; i <= this.mode; i++) {
        if (this.mode == 1) {
          const playerDisc1 = document.createElement("div");
          playerDisc1.classList.add("playerDisc1");
          squareDiv.appendChild(playerDisc1);

          const playerDisc2 = document.createElement("div");
          playerDisc2.classList.add("playerDisc2");
          squareDiv.appendChild(playerDisc2);
          break;
        }

        const playerDisc = document.createElement("div");
        playerDisc.classList.add(`playerDisc${i}`);
        squareDiv.appendChild(playerDisc);
      }

      for (const [property, value] of Object.entries(squareStyles)) {
        squareDiv.style[property] = value;
      }

      boardEl.appendChild(squareDiv);
    }
  }

  hideGameBoard() {
    document.querySelector(".board").style.display = "none";
    document.querySelector(".dice").style.display = "none";
  }

  displayGameBoard() {
    document.querySelector(".board").style.display = "block";
    document.querySelector(".dice").style.display = "block";
  }

  generateBoardSquaresPattern() {
    const ids = [];
    let start = 100;
    let end = 1;

    for (let row = 0; row < 10; row++) {
      const rowIds = [];
      for (let col = 0; col < 10; col++) {
        if (row % 2 === 0) {
          rowIds.push(start--);
        } else {
          rowIds.push(start--);
        }
      }
      if (row % 2 !== 0) {
        rowIds.reverse();
      }
      ids.push(...rowIds);
    }
    return ids;
  }

  selectLevel() {}

  selectMode() {}

  createPlayers(players) {
    this.players = players;
  }

  async handlePlayerMove() {
    const playerAt100 = this.players.filter(
      (player) => player.position === 100
    );

    if (playerAt100.length !== 0) {
      this.resetPlayers();
      alert("game restart");
    }

    const player = this.players[this.currentPlayerNumber - 1];

    const randNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.querySelector(".dice .dice-img").innerHTML = randNum;
    player.rolledNumber = randNum;

    const diceImg = document.querySelector(".dice-img");
    diceImg.src = diceData[randNum];

    document
      .querySelectorAll(`.playerDisc${this.currentPlayerNumber}`)
      .forEach((square) => {
        square.classList.remove("active");
      });

    let previousPosition = player.position;

    if (player.position == 0 && player.rolledNumber == 6) {
      player.position = 1;
      const playerInLobyEl = document.getElementById(
        `dice-player${this.currentPlayerNumber}`
      );
      playerInLobyEl.classList.add("remove");

      this.board.addPlayers(player, this.currentPlayerNumber);
      const square = document.getElementById("1");
      const playerDisc = square.querySelector(
        `.playerDisc${this.currentPlayerNumber}`
      );
      playerDisc.classList.add("active");
    } else if (player.position != 0) {
      if (this.checkWin(player)) {
        this.board.addPlayers(
          player,
          this.currentPlayerNumber,
          previousPosition
        );
        const square = document.getElementById(`${player.position}`);
        const playerDisc = square.querySelector(
          `.playerDisc${this.currentPlayerNumber}`
        );
        playerDisc.classList.add("active");
        return;
      }

      console.log(`${player.name} is now on tile ${player.position}`);

      if (this.board.isQuestionTile(player.position)) {
        const snakeOrLadderEnd = this.board.getSnakeOrLadderEnd(
          player.position
        );

        let tileType = "";
        if (snakeOrLadderEnd) {
          tileType = snakeOrLadderEnd < player.position ? "snake" : "ladder";
        }

        const correct = await this.askQuestion(player.position, tileType);

        if (snakeOrLadderEnd) {
          const isSnake = snakeOrLadderEnd < player.position;
          const isLadder = snakeOrLadderEnd > player.position;

          if (isSnake) {
            if (!correct) {
              player.position = snakeOrLadderEnd;
              turunSound.play().catch((error) => {
                console.error("Gagal memutar suara:", error);
              });
              console.log(
                `${player.name} answered wrong and slides down snake to tile ${player.position}`
              );
            } else {
              correctSound.play().catch((error) => {
                console.error("Gagal memutar suara:", error);
              });
              console.log(`${player.name} answered right and avoids snake.`);
            }
          } else if (isLadder) {
            if (correct) {
              player.position = snakeOrLadderEnd;
              naikSound.play().catch((error) => {
                console.error("Gagal memutar suara:", error);
              });
              console.log(
                `${player.name} answered right and climbs ladder to tile ${player.position}`
              );
            } else {
              wrongSound.play().catch((error) => {
                console.error("Gagal memutar suara:", error);
              });
              console.log(
                `${player.name} answered wrong and stays on ladder tile.`
              );
            }
          }
        } else {
          console.log(`${player.name} answered question on normal tile.`);
          wrongSound.play().catch((error) => {
            console.error("Gagal memutar suara:", error);
          });
        }
      }

      this.board.addPlayers(player, this.currentPlayerNumber, previousPosition);

      const square = document.getElementById(`${player.position}`);
      const playerDisc = square.querySelector(
        `.playerDisc${this.currentPlayerNumber}`
      );
      playerDisc.classList.add("active");
    }

    if (player.rolledNumber != 6) {
      if (this.mode != 1) {
        this.currentPlayerNumber =
          this.currentPlayerNumber == this.mode
            ? 1
            : this.currentPlayerNumber + 1;
      } else {
        this.currentPlayerNumber = this.currentPlayerNumber == 2 ? 1 : 2;
      }

      const playersInGame = document.querySelectorAll(".player-in-game");
      playersInGame.forEach((currentPlayer) => {
        currentPlayer.classList.remove("current");
      });
      playersInGame[this.currentPlayerNumber - 1].classList.add("current");
    }

    if (this.players[this.currentPlayerNumber - 1].name === "computer") {
      const diceRollBtn = document.querySelector(".dice-roll-btn");
      diceRollBtn.disabled = true;
      diceRollBtn.classList.add("disable");
      setTimeout(() => {
        this.handlePlayerMove();
        diceRollBtn.disabled = false;
        diceRollBtn.classList.remove("disable");
      }, 800);
    }
  }

  askQuestion(tile, tileType = "") {
    return new Promise((resolve) => {
      const modal = document.getElementById("questionModal");
      const questionTextEl = document.getElementById("questionText");
      const questionForm = document.getElementById("questionForm");
      const submitBtn = document.getElementById("submitAnswer");
      const tileInfoEl = document.getElementById("tileInfo");

      // Clear previous content & disable submit
      questionForm.innerHTML = "";
      submitBtn.disabled = true;
      tileInfoEl.textContent = tileType ? `You are on a ${tileType} tile.` : "";

      // Pick a random question from board's soalJawabPilihan
      const questions = this.board.soalJawabPilihan;
      const questionObj =
        questions[Math.floor(Math.random() * questions.length)];

      questionTextEl.textContent = questionObj.soal;

      questionObj.pilihan.forEach((option, index) => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;
        input.id = `answer${index}`;

        const label = document.createElement("label");
        label.htmlFor = input.id;
        label.textContent = option;

        input.addEventListener("change", () => {
          submitBtn.disabled = false;
        });

        questionForm.appendChild(input);
        questionForm.appendChild(label);
      });

      modal.style.display = "flex";
      document.querySelector(".main-container").classList.add("modal-open");

      submitBtn.onclick = () => {
        const selected = questionForm.answer.value;
        const isCorrect = parseInt(selected, 10) === questionObj.jawaban;
        modal.style.display = "none";

        this.showFeedbackModal(isCorrect, questionObj.penjelasan).then(() => {
          document
            .querySelector(".main-container")
            .classList.remove("modal-open");
          resolve(isCorrect);
        });
      };
    });
  }
  showFeedbackModal(isCorrect, explanation) {
    return new Promise((resolve) => {
      const feedbackModal = document.getElementById("feedbackModal");
      const feedbackTitle = document.getElementById("feedbackTitle");
      const feedbackExplanation = document.getElementById(
        "feedbackExplanation"
      );
      const closeBtn = document.getElementById("closeFeedback");

      feedbackTitle.textContent = isCorrect
        ? "Jawaban Benar!"
        : "Jawaban Salah!";
      feedbackExplanation.textContent = explanation;

      // Clear previous classes
      feedbackTitle.classList.remove("correct", "incorrect");
      feedbackModal.classList.remove("correct-bg", "incorrect-bg");

      // Add styles based on correctness
      if (isCorrect) {
        feedbackTitle.classList.add("correct");
        feedbackModal.classList.add("correct-bg");
      } else {
        feedbackTitle.classList.add("incorrect");
        feedbackModal.classList.add("incorrect-bg");
      }

      feedbackModal.style.display = "flex";

      closeBtn.onclick = () => {
        feedbackModal.style.display = "none";
        resolve();
      };

      window.onclick = (event) => {
        if (event.target === feedbackModal) {
          feedbackModal.style.display = "none";
          resolve();
        }
      };
    });
  }

  checkWin(player) {
    const newPosition = player.position + player.rolledNumber;
    if (this.level === "E") {
      if (newPosition === 100 || newPosition > 100) {
        player.position = 100;
        alert(`${player.name} won the game!!`);
        return true;
      } else {
        player.position = newPosition;
        return false;
      }
    } else if (this.level === "M") {
      if (newPosition === 100) {
        player.position = 100;
        alert(`${player.name} won the game!!`);
        return true;
      } else if (newPosition < 100) {
        player.position = newPosition;
      }
      return false;
    } else {
      if (newPosition === 100) {
        player.position = 100;
        alert(`${player.name} won the game!!`);
        return true;
      } else if (newPosition > 100) {
        const owerflow = newPosition - 100;
        player.position = 100 - owerflow;
        return false;
      } else {
        player.position = newPosition;
        return false;
      }
    }
  }

  checkForLaddersOrSnakes(player) {
    let currentPositionNode = this.board.findSquare(player.position);
    let current = currentPositionNode;

    if (current != null) {
      if (currentPositionNode.endSquare < currentPositionNode.square) {
        while (true) {
          if (current.square == currentPositionNode.endSquare) {
            player.position = current.square;
            return;
          }
          current = current.previous;
        }
      } else if (currentPositionNode.endSquare > currentPositionNode.square) {
        while (true) {
          if (current.square == currentPositionNode.endSquare) {
            player.position = current.square;
            return;
          }
          current = current.next;
        }
      }
    }
  }

  resetPlayers() {
    this.players.forEach((player) => {
      player.position = 0;
      player.rolledNumber = 0;
    });
    this.currentPlayerNumber = 1;
    const imgDice = document.querySelector(".dice-img");
    imgDice.src = diceData[1];

    document.querySelectorAll(".square div").forEach((disk) => {
      disk.classList.remove("active");
    });

    for (let i = 1; i <= 4; i++) {
      const playerInLobyEl = document.getElementById(`dice-player${i}`);
      playerInLobyEl.classList.add("remove");
    }

    this.players.forEach((player) => {
      const playerInLobyEl = document.getElementById(`dice-player${player.id}`);
      playerInLobyEl.classList.remove("remove");
    });

    const inGamePlayers = document.querySelectorAll(".player-in-game");
    inGamePlayers.forEach((player) => player.classList.remove("current"));
    inGamePlayers[0].classList.add("current");

    for (let i = 1; i <= 100; i++) {
      for (let j = 1; j <= 4; j++) {
        this.board.deleteNodePlayer(i, j);
      }
    }
  }

  restartGame() {
    this.resetPlayers();
  }

  existGame() {
    document.querySelector(".in-game-container").style.display = "none";
    document.querySelector(".game_fisrt_interface").style.display = "block";
    document.querySelector(".close-restart-btns").style.display = "none";
    for (let i = 1; i <= 4; i++) {
      const playerInLobyEl = document.getElementById(`dice-player${i}`);
      playerInLobyEl.classList.add("remove");
    }
  }
}
