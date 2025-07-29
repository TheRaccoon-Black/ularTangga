import { Board, Player } from "./BoardPlayer.js";
import { Game } from "./Game.js";

// --- Elemen DOM ---
const startButton = document.querySelector(".start-button");
// DIKEMBALIKAN: Variabel ini penting untuk alur permainan
const selectModePanel = document.querySelector(".game_selectmode_interface");
const selectModeForm = document.querySelector(".select-mode-form");
const playerDetailsPanel = document.querySelector(".game_username_interface");
const playerDetailsForm = document.querySelector(".player-details-form");
const diceRollBtn = document.querySelector(".dice-roll-btn");
const restartBtn = document.querySelector(".restart-btn");
const homeBtn = document.querySelector(".home-btn");
const threeCircle = document.querySelector(".circle_for_select_options");
const image = document.querySelector(".attachment_image_ani");
const circleFooter = document.querySelectorAll(".circle_footer");
const infoModal = document.getElementById("infoModal");
const openModalBtn = document.querySelector(".circle");
const closeModalBtn = document.querySelector("#infoModal .close-button");

// --- Audio ---
const backsound = new Audio("assets/sounds/backsound.mp3");
backsound.volume = 0.05;
backsound.loop = true;

// --- Variabel Game ---
let game;
let board;
const playerColors = [
  "rgb(40, 255, 2)",
  "rgb(1, 247, 255)",
  "rgb(255, 86, 1)",
  "rgb(0, 103, 229)",
];

// --- Event Listeners ---

// Memulai game
startButton.addEventListener("click", () => {
  backsound
    .play()
    .catch((error) => {
      console.error("Gagal memutar backsound:", error);
    });
  // DIPERBAIKI: Hanya panggil startTheGame() sekali saja
  startTheGame();
});

// Mengirim form mode permainan
selectModeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(selectModeForm);
  const mode = formData.get("mode");
  game.mode = Number(mode);
  getPlayerDetails(game.mode);
});

// Mengirim form detail pemain
playerDetailsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(playerDetailsForm);
  let players = [];
  const playerImages = [
    "https://www.angrybirds.com/wp-content/uploads/2022/05/optimized-ABCOM_202203_CharacterDimensio_Bomb_Movie-300x300.png",
    "https://www.angrybirds.com/wp-content/uploads/2022/05/ABCOM_202203_350x350_CharacterDimensio_Courtney_Movie-300x300.png",
    "https://www.angrybirds.com/wp-content/uploads/2022/05/optimized-ABCOM_202203_1000x1000_CharacterDimensio_Red_Movie-300x300.png",
    "https://www.angrybirds.com/wp-content/uploads/2022/05/ABCOM_202203_1000x1000_CharacterDimensio_Stella_Movie-1-300x300.png",
  ];

  if (game.mode != 1) {
    for (let i = 1; i <= game.mode; i++) {
      const name = formData.get(`player${i}`);
      if (name) {
        players.push(
          new Player(name, playerColors[i - 1], playerImages[i - 1], i)
        );
      } else {
        return;
      }
    }
  } else {
    const name = formData.get("player1");
    if (name) {
      players.push(new Player(name, playerColors[0], playerImages[0], 1));
      players.push(new Player("computer", playerColors[1], playerImages[1], 2));
    } else {
      return;
    }
  }

  game.createPlayers(players);
  
  circleFooter.forEach((footer) => {
    footer.classList.remove("active");
  });
  setupInGameUI();
});

// Mengocok dadu
diceRollBtn.addEventListener("click", () => {
  game.handlePlayerMove();
});

// Me-restart game
restartBtn.addEventListener("click", () => {
  game.restartGame();
});

// Kembali ke halaman utama/keluar dari game
homeBtn.addEventListener("click", () => {
  game.existGame();
});

// --- Logika Modal ---
openModalBtn.addEventListener("click", () => {
  infoModal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  infoModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === infoModal) {
    infoModal.style.display = "none";
  }
});

// --- Fungsi Alur Game ---

function startTheGame() {
  document.querySelector(".background_image").src = "./images/testing.jpg";
  board = new Board();
  circleFooter[0].classList.add("active");

  for (let i = 1; i <= 100; i++) {
    board.handleInsertSquare(i);
  }
  game = new Game(board);
  selectMode();
}

function selectMode() {
  document.querySelector(".game_fisrt_interface").style.display = "none";
  selectModePanel.style.display = "block";
  threeCircle.style.display = "flex";
  if (image) image.style.display = "block";
  document.querySelector(".close-restart-btns").style.display = "none";
}

function getPlayerDetails(mode) {
  circleFooter[1].classList.add("active");
  selectModePanel.style.display = "none";
  playerDetailsPanel.style.display = "block";

  const inputFields = document.querySelectorAll(".player-details-form .user1");
  inputFields.forEach((inputEl) => {
    inputEl.classList.remove("active");
  });

  const fieldsToShow = mode != 1 ? mode : 1;
  for (let i = 0; i < fieldsToShow; i++) {
    inputFields[i].classList.add("active");
  }
}

function setupInGameUI() {
  // Sembunyikan panel input nama pemain
  playerDetailsPanel.style.display = "none";
  threeCircle.style.display = "none";
  if (image) image.style.display = "none";

  // Tampilkan UI dalam game
  document.querySelector(".in-game-container").style.display = "flex";
  document.querySelector(".close-restart-btns").style.display = "flex";

  game.createGameBoard();

  // Buat tampilan info pemain
  const playersDiv = document.querySelector(
    ".player-container .players-in-game"
  );
  playersDiv.innerHTML = ""; // Membersihkan kontainer

  game.players.forEach((player) => {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add("player-in-game");
    playerDiv.style.display = "flex";
    playerDiv.style.alignItems = "center";
    playerDiv.style.marginBottom = "10px";

    playerDiv.innerHTML = `
      <img src="${player.image}" class="playerImage" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; margin-right: 12px; border: 3px solid ${player.color};">
      <div style="display: inline-block;">
          <p style="margin: 0;">
              ${player.name}
              <span class="player-score" id="player-score-${player.id}"> - Score: 0</span>
          </p>
      </div>
    `;
    playersDiv.appendChild(playerDiv);

    const playerInLobbyEl = document.getElementById(`dice-player${player.id}`);
    if (playerInLobbyEl) {
      playerInLobbyEl.classList.remove("remove");
      playerInLobbyEl.style.background = player.color;
    }
  });
}
