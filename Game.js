import { diceData } from "./diceData.js";

// const backsound = new Audio("assets/sounds/backsound.mp3");
// backsound.loop = true;
const naikSound = new Audio("assets/sounds/naik.mp3");
const turunSound = new Audio("assets/sounds/turun.mp3");
const correctSound = new Audio("assets/sounds/correct.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");
const finishSound = new Audio("assets/sounds/finish100.mp3");
const diceRollSound = new Audio("assets/sounds/dice-role.mp3");
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
    // backsound.play().catch((error) => {
    //   console.error("Gagal memutar backsound:", error);
    // });
    // console.log("backsound playing");
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
    diceRollSound.play().catch(error => console.error("Gagal memutar suara dadu:", error));

    const player = this.players[this.currentPlayerNumber - 1];

    // const randNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    const weightedNumbers = [1, 2, 3, 4, 5, 6, 6, 6];
    const randIndex = Math.floor(Math.random() * weightedNumbers.length);
    const randNum = weightedNumbers[randIndex];
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
      if (await this.checkWin(player)) {
        backsound.pause();
        backsound.currentTime = 0;
        finishSound.play().catch((error) => {
          console.error("Gagal memutar suara kemenangan:", error);
        });

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
          tileType = snakeOrLadderEnd < player.position ? "ular" : "tangga";
        }

        const correct = await this.askQuestion(player.position, tileType);

        if (correct) {
          // Add score based on tile type
          if (tileType === "ular" || tileType === "tangga") {
            player.score = (player.score || 0) + 10;
          } else {
            player.score = (player.score || 0) + 5;
          }
          this.updatePlayerScores(this.players);
        }

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
          if (correct) {
            correctSound.play().catch((error) => {
              console.error("Gagal memutar suara benar:", error);
            });
          } else {
            wrongSound.play().catch((error) => {
              console.error("Gagal memutar suara salah:", error);
            });
          }
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
      tileInfoEl.textContent = tileType
        ? `Kamu berada di kotak ${tileType}.`
        : "";

      // Pick a random question from board's soalJawabPilihan
      // const questions = this.board.soalJawabPilihan;
      // const questionObj =
      //   questions[Math.floor(Math.random() * questions.length)];

      // questionTextEl.textContent = questionObj.soal;

      // questionObj.pilihan.forEach((option, index) => {
      const questions = this.board.soalJawabPilihan;
      const questionObj =
        questions[Math.floor(Math.random() * questions.length)];

      // Menggunakan innerHTML agar tag <br> dapat dirender
      questionTextEl.innerHTML = questionObj.soal;

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
    const modalContent = feedbackModal.querySelector('.modal-content');
    const feedbackTitle = document.getElementById("feedbackTitle");
    const feedbackExplanation = document.getElementById("feedbackExplanation");
    const closeBtn = document.getElementById("closeFeedback");
    const okBtn = document.getElementById("okFeedbackBtn");

    // Atur teks judul dan penjelasan
    feedbackTitle.textContent = isCorrect ? "Jawaban Benar!" : "Jawaban Salah!";
    feedbackExplanation.textContent = explanation;

    // 1. Hapus kelas warna sebelumnya dari elemen konten modal
    modalContent.classList.remove("correct", "wrong");

    // 2. Tambahkan kelas yang benar berdasarkan jawaban
    if (isCorrect) {
      modalContent.classList.add("correct");
    } else {
      modalContent.classList.add("wrong");
    }

    // Tampilkan modal
    feedbackModal.style.display = "flex";

    // Fungsi untuk menutup modal dan membersihkan event listener
    const closeModal = () => {
      feedbackModal.style.display = "none";
      // Hapus event listener agar tidak menumpuk setiap kali modal muncul
      closeBtn.onclick = null;
      okBtn.onclick = null;
      window.onclick = null;
      resolve();
    };

    // Pasang event listener untuk tombol
    closeBtn.onclick = closeModal;
    okBtn.onclick = closeModal;

    // Pasang event listener untuk klik di luar modal
    window.onclick = (event) => {
      if (event.target === feedbackModal) {
        closeModal();
      }
    };
  });
}
  showFinalScores() {
    return new Promise((resolve) => {
      const finalScoreModal = document.getElementById("finalScoreModal");
      const scoreListEl = document.getElementById("finalScoreList");
      const closeBtn = document.getElementById("closeFinalScore");

      // Clear previous scores
      scoreListEl.innerHTML = "";

      const sortedPlayers = [...this.players].sort((a, b) => b.score - a.score);

      // Populate scores list
      sortedPlayers.forEach((player) => {
        const li = document.createElement("li");
        li.textContent = `${player.name}: ${player.score} point${
          player.score !== 1 ? "s" : ""
        }`;
        scoreListEl.appendChild(li);
      });

      finalScoreModal.style.display = "flex";

      closeBtn.onclick = () => {
        finalScoreModal.style.display = "none";
        resolve();
      };

      window.onclick = (event) => {
        if (event.target === finalScoreModal) {
          finalScoreModal.style.display = "none";
          resolve();
        }
      };
    });
  }

  async checkWin(player) {
    const newPosition = player.position + player.rolledNumber;
    let won = false;

    if (this.level === "E") {
      if (newPosition >= 100) {
        player.position = 100;
        won = true;
      } else {
        player.position = newPosition;
      }
    } else if (this.level === "M") {
      if (newPosition === 100) {
        player.position = 100;
        won = true;
      } else if (newPosition < 100) {
        player.position = newPosition;
      }
    } else {
      if (newPosition === 100) {
        player.position = 100;
        won = true;
      } else if (newPosition > 100) {
        const overflow = newPosition - 100;
        player.position = 100 - overflow;
      } else {
        player.position = newPosition;
      }
    }

    if (won) {
      const finalScoreModal = document.getElementById("finalScoreModal");
      const scoreListEl = document.getElementById("finalScoreList");
      scoreListEl.innerHTML = ""; // Clear previous scores

      this.players.forEach((p) => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.marginBottom = "8px";

        // Create player color indicator (a small circle)
        const colorIndicator = document.createElement("div");
        colorIndicator.style.width = "20px";
        colorIndicator.style.height = "20px";
        colorIndicator.style.borderRadius = "50%";
        colorIndicator.style.backgroundColor = p.color;
        colorIndicator.style.marginRight = "10px";
        li.appendChild(colorIndicator);

        // Create player image element
        const img = document.createElement("img");
        img.src = p.image;
        img.alt = `${p.name} avatar`;
        img.style.width = "30px";
        img.style.height = "30px";
        img.style.borderRadius = "50%";
        img.style.marginRight = "10px";
        li.appendChild(img);

        // Player name and score text
        const textSpan = document.createElement("span");
        textSpan.textContent = `${p.name}: ${p.score} point${
          p.score !== 1 ? "s" : ""
        }`;
        li.appendChild(textSpan);

        if (p.id === player.id) {
          li.style.fontWeight = "bold"; // Highlight winner
          li.style.color = "green";
          textSpan.textContent += " ← Pemenang!";
        }

        scoreListEl.appendChild(li);
      });

      finalScoreModal.style.display = "flex";

      await new Promise((resolve) => {
        const closeBtn = document.getElementById("closeFinalScore");

        function closeHandler() {
          finalScoreModal.style.display = "none";
          closeBtn.removeEventListener("click", closeHandler);
          resolve();
        }

        closeBtn.addEventListener("click", closeHandler);

        window.onclick = (event) => {
          if (event.target === finalScoreModal) {
            finalScoreModal.style.display = "none";
            resolve();
          }
        };
      });

      this.resetPlayers();
    }

    return won;
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

  updatePlayerScores(players) {
    players.forEach((player) => {
      const scoreSpan = document.getElementById(`player-score-${player.id}`);
      if (scoreSpan) {
        scoreSpan.textContent = ` - Score: ${player.score}`;
      }
    });
  }

  resetPlayers() {
    this.players.forEach((player) => {
      player.position = 0;
      player.rolledNumber = 0;
      player.score = 0;
    });

    this.updatePlayerScores(this.players);
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
    document.querySelector(".background_image").src = "./images/boardawal.jpg";
    for (let i = 1; i <= 4; i++) {
      const playerInLobyEl = document.getElementById(`dice-player${i}`);
      playerInLobyEl.classList.add("remove");
    }
  }
}
