export class Player {
  constructor(name, color, image, id) {
    this.name = name;
    this.position = 0;
    this.rolledNumber = 0;
    this.color = color;
    this.image = image;
    this.id = id;
  }
}

class SnakesladdersLink {
  constructor(square, endSquare) {
    this.square = square;
    this.endSquare = endSquare;
    this.next = null;
    this.previous = null;
    this.players = [];
  }
}

export class Board {
  constructor() {
    this.first = null;
    this.last = null;
    this.snakesarray = [
      [38, 19],
      [51, 33],
      [66, 58],
      [95, 73],
    ];
    this.laddersArray = [
      [5, 16],
      [12, 31],
      [25, 44],
      [48, 69],
      [59, 83],
      [70, 92],
      [76, 97],
    ];
    this.soalJawabPilihan = [
      {
        soal: "Apa ibukota Indonesia?",
        pilihan: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        jawaban: 0,
        penjelasan:
          "Jakarta adalah ibukota Indonesia dan merupakan kota terbesar di negara ini.",
      },
      // 2
      {
        soal: "Siapa presiden pertama Indonesia?",
        pilihan: ["Soekarno", "Soeharto", "Jokowi", "Habibie"],
        jawaban: 0,
        penjelasan:
          "Soekarno adalah presiden pertama Indonesia yang menjabat dari tahun 1945 hingga 1967.",
      },
      // 3
      {
        soal: "Apa mata uang Indonesia?",
        pilihan: ["Dollar", "Rupiah", "Yen", "Euro"],
        jawaban: 1,
        penjelasan: "Mata uang Indonesia adalah Rupiah (IDR).",
      },
      // 4
      {
        soal: "Apa nama gunung tertinggi di Indonesia?",
        pilihan: [
          "Gunung Merapi",
          "Gunung Semeru",
          "Gunung Rinjani",
          "Gunung Jayawijaya",
        ],
        jawaban: 3,
        penjelasan:
          "Gunung Jayawijaya (Puncak Jaya) adalah gunung tertinggi di Indonesia dengan ketinggian ± 4.884 mdpl.",
      },
      // 5
      {
        soal: "Apa nama tari tradisional dari Bali?",
        pilihan: ["Tari Kecak", "Tari Saman", "Tari Jaipong", "Tari Piring"],
        jawaban: 0,
        penjelasan:
          "Tari Kecak adalah salah satu tari tradisional paling terkenal dari Bali.",
      },
      // 6
      {
        soal: "Tanggal berapa Indonesia memproklamasikan kemerdekaannya?",
        pilihan: [
          "17 Agustus 1945",
          "1 Juni 1945",
          "28 Oktober 1928",
          "10 November 1945",
        ],
        jawaban: 0,
        penjelasan:
          "Indonesia memproklamasikan kemerdekaannya pada 17 Agustus 1945.",
      },
      // 7
      {
        soal: "Pulau terbesar di Indonesia adalah …",
        pilihan: ["Sumatra", "Sulawesi", "Papua", "Kalimantan"],
        jawaban: 2,
        penjelasan:
          "Pulau Papua (bagian baratnya dikenal sebagai Papua & Papua Barat) merupakan pulau terbesar yang wilayahnya masuk Indonesia.",
      },
      // 8
      {
        soal: "Apa semboyan negara Indonesia?",
        pilihan: [
          "Bersatu Kita Teguh",
          "Bhinneka Tunggal Ika",
          "Merah Putih",
          "Gotong Royong",
        ],
        jawaban: 1,
        penjelasan:
          "Semboyan dalam lambang negara Garuda Pancasila adalah “Bhinneka Tunggal Ika”.",
      },
      // 9
      {
        soal: "Hewan komodo secara alami hidup di wilayah …",
        pilihan: ["Bali", "Sumba", "Lombok", "Flores"],
        jawaban: 3,
        penjelasan:
          "Komodo mendiami Kepulauan Komodo yang terletak di wilayah Provinsi Nusa Tenggara Timur dekat Pulau Flores.",
      },
      // 10
      {
        soal: "Siapa pencipta lagu kebangsaan “Indonesia Raya”?",
        pilihan: [
          "W. R. Supratman",
          "Ismail Marzuki",
          "Sudharnoto",
          "H. Mutahar",
        ],
        jawaban: 0,
        penjelasan:
          "Wage Rudolf Supratman menggubah lagu “Indonesia Raya” yang diperdengarkan pertama kali pada 28 Oktober 1928.",
      },
      // 11
      {
        soal: "Nama bandara internasional utama di Jakarta adalah …",
        pilihan: ["Juanda", "Kualanamu", "Soekarno‑Hatta", "Ngurah Rai"],
        jawaban: 2,
        penjelasan:
          "Bandara Soekarno‑Hatta (CGK) di Tangerang melayani wilayah metropolitan Jakarta sebagai bandara internasional utama.",
      },
    ];
  }

  isQuestionTile(tile) {
    return tile >= 2 && tile <= 99;
  }

  getSnakeOrLadderEnd(tile) {
    for (const [start, end] of this.snakesarray) {
      if (start === tile) return end;
    }
    for (const [start, end] of this.laddersArray) {
      if (start === tile) return end;
    }
    return null;
  }

  insertSquare(Square, endSquare) {
    const newSquare = new SnakesladdersLink(Square, endSquare);
    if (this.first == null) {
      this.first = newSquare;
      this.last = newSquare;
    } else {
      this.last.next = newSquare;
      newSquare.previous = this.last;
      this.last = newSquare;
    }
  }

  handleInsertSquare(index) {
    for (let i = 0; i < 4; i++) {
      if (index == this.snakesarray[i][0]) {
        this.insertSquare(index, this.snakesarray[i][1]);
        return;
      }
    }

    for (let i = 0; i < 7; i++) {
      if (index == this.laddersArray[i][0]) {
        this.insertSquare(index, this.laddersArray[i][1]);
        return;
      }
    }

    this.insertSquare(index, index);
  }

  findSquare(Squareid) {
    let findlink = this.first;
    while (findlink != null) {
      if (findlink.square == Squareid) {
        return findlink;
      }
      findlink = findlink.next;
    }
    return null;
  }

  deleteNodePlayer(Squareid, currentPlayerNumber) {
    let current = this.first;
    while (current != null) {
      if (current.square == Squareid) {
        current.players = current.players.filter(
          (player) => player.id !== currentPlayerNumber
        );
        console.log("after delete from previous node " + current.square);
        console.log(current.players);
        return;
      }
      current = current.next;
    }
  }

  addPlayers(player, currentPlayerNumber, previousPosition) {
    let startSquare = this.findSquare(player.position);
    if (startSquare != null) {
      startSquare.players.push(player);
      console.log("after adding to the node of " + startSquare.square);
      console.log(startSquare.players);
    }

    if (previousPosition > 0) {
      this.deleteNodePlayer(previousPosition, currentPlayerNumber);
    }
  }
}
