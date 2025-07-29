
export class Player {
  constructor(name, color, image, id) {
    this.name = name;
    this.position = 0;
    this.rolledNumber = 0;
    this.color = color;
    this.image = image;
    this.id = id;
    this.score = 0;
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
    "soal": "<em>Eh, kamu tahu nggak sih?Ternyata kalau ada reaksi kimia kayak pembakaran lilin di dalam toples tertutup, massa semua zat di dalamnya itu bakal tetap, lho! Jadi, meskipun bentuknya berubah, total massanya nggak ke mana-mana alias total massanya itu sama aja. Nah, ini yang disebut Hukum Kekekalan Massa. Apa bunyi dari hukum kekekalan massa?",
    "pilihan": [
      "Massa zat berkurang dalam reaksi",
      "Massa zat bertambah selama reaksi",
      "Massa zat sebelum reaksi sama dengan setelah reaksi",
      "Massa gas tidak ikut dihitung"
    ],
    "jawaban": 2,
    "penjelasan": "Hukum Kekekalan Massa menyatakan bahwa massa zat sebelum dan sesudah reaksi tetap sama, selama reaksi berlangsung dalam sistem tertutup. (Sukardjo, 2016)"
  },
  {
    "soal": "<em>Kamu pernah dengar nama Antoine Lavoisier?Nah, dia itu ilmuwan keren yang pertama kali bilang kalau massa zat sebelum dan sesudah reaksi itu selalu sama, asal reaksinya di ruang tertutup. Jadi walau bentuknya berubah, beratnya tetap. Keren kan?Siapa ilmuwan yang pertama kali merumuskan hukum kekekalan massa?",
    "pilihan": ["Dalton", "Lavoisier", "Proust", "Gay-Lussac"],
    "jawaban": 1,
    "penjelasan": "Antoine Lavoisier adalah ilmuwan pertama yang menyatakan bahwa massa zat sebelum dan sesudah reaksi tetap sama dalam sistem tertutup. (Modul Kimia Kemdikbud, 2021)"
  },
  {
    "soal": "Coba bayangin kamu lagi bakar kertas di dalam toples yang rapat banget. Semua asap, gas, dan sisa abunya tetap di situ, nggak ada yang keluar. Nah, kondisi kayak gini namanya sistem tertutup. Di sinilah massa zat sebelum dan sesudah reaksi tetap sama, karena nggak ada yang kabur ke luar.Sistem seperti apa yang digunakan dalam eksperimen hukum kekekalan massa?",
    "pilihan": ["Terbuka", "Tertutup", "Vakum", "Tekanan tinggi"],
    "jawaban": 1,
    "penjelasan": "Sistem tertutup memastikan tidak ada zat yang keluar atau masuk, sehingga massa total tetap. (Modul Kimia Kelas X Kemendikbud, 2021)"
  },
  {
    "soal": "<em>Pernah denger tentang Hukum Kekekalan Massa gak?Sederhananya gini: dalam setiap reaksi kimia, massa zat yang ada sebelum dan sesudah reaksi itu tetep. Jadi, nggak ada yang hilang atau bertambah. Hukum kekekalan massa berlaku jika...",
    "pilihan": [
      "Ada gas yang dilepas",
      "Sistem terbuka",
      "Reaksi eksoterm",
      "Tidak ada zat keluar dari sistem"
    ],
    "jawaban": 3,
    "penjelasan": "Hukum kekekalan massa hanya berlaku jika tidak ada zat yang keluar dari sistem, artinya reaksi berlangsung dalam sistem tertutup. (Buku Kimia SMA Kelas X Kemendikbud, 2020)"
  },
  {
    "soal": "<em>Hukum Proust bilang apa sih?Jadi intinya gini, menurut Hukum Proust, dalam senyawa itu perbandingan massa unsur-unsurnya selalu tetap, nggak berubah-ubah, meskipun kita bikin senyawa yang sama di tempat yang berbeda. Contohnya kayak air (H₂O). Di mana-mana, massa hidrogennya bakal banding oksigennya itu tetep. Bunyi hukum perbandingan tetap adalah...",
    "pilihan": [
      "Unsur dalam senyawa bergabung dalam massa sebarang",
      "Perbandingan massa selalu berubah",
      "Perbandingan massa unsur selalu tetap",
      "Senyawa tidak memiliki massa tetap"
    ],
    "jawaban": 2,
    "penjelasan": "Hukum Proust menyatakan bahwa dalam suatu senyawa, perbandingan massa unsur-unsurnya selalu tetap. (Buku Kimia SMA Pusat Perbukuan Depdiknas)"
  },
  {
    "soal": "<em>Ngomongin Hukum Proust nih…</em> Hukum ini intinya ngomong kalau di dalam senyawa, perbandingan massa unsur-unsurnya itu selalu tetap. Misalnya air, di manapun kamu cari — di laut, di pegunungan, atau di kulkas rumah kamu — air itu isinya 2 atom hidrogen dan 1 atom oksigen. Gak bisa tiba-tiba berubah jadi 3 hidrogen 1 oksigen ya! Contoh hukum perbandingan tetap adalah...",
    "pilihan": [
      "Massa H₂O berbeda tiap tempat",
      "H₂O selalu terdiri dari 2H dan 1O",
      "Air dapat berubah jadi uap",
      "Air dapat mengandung berbagai zat"
    ],
    "jawaban": 1,
    "penjelasan": "Air (H₂O) selalu terdiri dari 2 atom hidrogen dan 1 atom oksigen, menunjukkan perbandingan massa tetap. (Modul Kimia SMA Kemdikbud, 2021)"
  },
  {
    "soal": "<em>Kamu pernah dengar nama Joseph Proust belum?</em> Nah, dia itu ilmuwan keren yang pertama kali bilang kalau unsur-unsur di dalam senyawa itu massanya selalu sebanding.Jadi hukum perbandingan tetap ditemukan oleh siapa?",
    "pilihan": ["Lavoisier", "Proust", "Dalton", "Gay-Lussac"],
    "jawaban": 1,
    "penjelasan": "Joseph Proust adalah ilmuwan yang merumuskan hukum perbandingan tetap. (Modul Kimia SMA Kemdikbud, 2021)"
  },
  {
    "soal": "Nah teman-teman, kalian pernah dengar gak tentang Hukum Perbandingan Berganda dari Dalton?Ceritanya gini… Kalau ada dua unsur yang bisa membentuk lebih dari satu jenis senyawa, maka massa salah satu unsur yang bergabung dengan massa tetap unsur yang lain itu bakalan berbanding kelipatan bilangan bulat sederhana.Contohnya tuh kayak nitrogen dan oksigen. Unsur ini bisa bikin beberapa senyawa kayak NO (Nitrogen monoksida) sama NO₂ (Nitrogen dioksida).Di NO itu 1 nitrogen ketemu 1 oksigen, sedangkan di NO₂ itu 1 nitrogen ketemu 2 oksigen. Nah, perbandingan massa oksigennya kan 1:2 tuh — kelipatan bulat sederhana kan? Nah itu dia yang dimaksud Dalton.Pasangan senyawa mana yang sesuai dengan hukum perbandingan berganda Dalton?",
    "pilihan": ["H₂O dan H₂O₂", "NaCl dan KCl", "CO dan CO₂", "CH₄ dan C₂H₆"],
    "jawaban": 2,
    "penjelasan": "CO dan CO₂ adalah contoh hukum perbandingan berganda, karena perbandingan massa oksigen terhadap karbon dalam kedua senyawa adalah 1:2. (Buku Kimia Kemdikbud, 2020)"
  },
  {
    "soal": "Hukum kekekalan massa ditemukan oleh siapa?",
    "pilihan": ["Dalton", "Lavoisier", "Proust"],
    "jawaban": 1,
    "penjelasan": "Antoine Lavoisier merumuskan hukum kekekalan massa, yang menyatakan bahwa massa sebelum dan sesudah reaksi kimia adalah tetap."
  },
  {
    "soal": "Cocokkan pasangan berikut: Lavoisier — ?",
    "pilihan": ["Hukum Kekekalan Massa", "Hukum Proust"],
    "jawaban": 0,
    "penjelasan": "Lavoisier dikenal sebagai penemu hukum kekekalan massa."
  },
  {
    "soal": "Teman-teman, pernah gak ngebayangin pas bikin api unggun?Kayu itu kan isinya banyak karbon. Nah, kalau karbon ketemu oksigen waktu dibakar, dia bisa bikin dua macam gas, lho! Bisa karbon monoksida (CO) atau karbon dioksida (CO₂), tergantung banyaknya oksigen yang dipakai. Misal nih — kalau 12 gram karbon ketemu 16 gram oksigen, hasilnya CO. Tapi kalau 12 gram karbon ketemu 32 gram oksigen, hasilnya CO₂. Nah, di sini kita bisa lihat nih perbandingan massanya. Kan sama-sama 12 gram karbon, tapi oksigennya beda tuh — 16 gram sama 32 gram. Nah, perbandingan massa oksigennya tinggal dibagi aja: 16 : 32 = 1:2 Jadi, sesuai banget sama Hukum Dalton tadi, kalau dua unsur bikin lebih dari satu senyawa, massa salah satu unsur yang bergabung dengan massa tetap unsur lain bakal berbanding kelipatan bilangan bulat sederhana. Jika 4 gram belerang (S) bereaksi dengan 4 gram oksigen membentuk SO, dan 4 gram belerang bereaksi dengan 8 gram oksigen membentuk SO₂, maka perbandingan massa oksigen dalam kedua senyawa tersebut adalah…",
    "pilihan": ["1:1", "1:2", "2:1", "4:8"],
    "jawaban": 1,
    "penjelasan": "Massa belerang tetap, sehingga perbandingan massa oksigen adalah 4:8 = 1:2, sesuai hukum perbandingan berganda."
  },
  {
    "soal": "Eh, teman-teman, kalian pernah gak liat balon gas helium waktu ulang tahun? Nah, balon itu bisa ngembang karena gas di dalamnya punya volume. Serunya, kalau ada beberapa gas yang direaksikan — kayak hidrogen sama oksigen buat bikin air — ternyata volume gas-gas itu bisa dibandingkan lho! Misalnya nih, 2 liter gas hidrogen ketemu 1 liter gas oksigen → hasilnya 2 liter uap air.Nah, volumenya itu berbanding bilangan bulat sederhana: 2 : 1 : 2. Aturan kayak gini pertama kali dijelasin sama Gay-Lussac. Beliau bilang, volume gas-gas yang bereaksi dan hasil reaksinya berbanding bilangan bulat sederhana, asalkan diukur pada suhu dan tekanan yang sama. Jadi, tiap kita ngomong soal perbandingan volume gas dalam reaksi kimia, ya ingetnya ke Gay-Lussac! Hukum perbandingan volume gas ditemukan oleh siapa?",
    "pilihan": ["Dalton", "Gay-Lussac", "Lavoisier", "Proust"],
    "jawaban": 1,
    "penjelasan": "Gay-Lussac menemukan hukum perbandingan volume gas."
  },
  {
    "soal": "Teman-teman, pernah gak main balon terus balonnya ditiup di siang hari, terus dibiarkan di luar sampe malam? Biasanya, pas siang balonnya gede banget, tapi waktu malam kok kayak ngempes. Nah itu karena volume gas di dalam balon bisa berubah-ubah tergantung suhu dan tekanan di sekitarnya. Nah, waktu Gay-Lussac bikin aturan tentang volume gas yang bereaksi, dia ngasih syarat penting nih: volume gas yang dibandingkan harus diukur pada suhu dan tekanan yang sama. Kenapa? Karena kalau suhu atau tekanannya beda, volume gasnya bisa berubah-ubah kayak balon tadi. Biar perbandingan volumnya adil dan akurat, ya harus di kondisi yang sama. Makanya, waktu ngitung perbandingan volume gas di reaksi, pastikan dulu suhu dan tekanannya sama ya!Dalam hukum Gay-Lussac, volume gas yang bereaksi harus diukur pada…",
    "pilihan": ["Tekanan sebarang", "Tekanan berbeda", "Suhu dan tekanan sama", "Suhu sebarang"],
    "jawaban": 2,
    "penjelasan": "Hukum Gay-Lussac hanya berlaku jika suhu dan tekanan gas-gas yang dibandingkan adalah sama."
  },
  {
    "soal": "Hukum Proust dikenal dengan nama lain…",
    "pilihan": ["Hukum Kekekalan Massa", "Hukum Perbandingan Tetap", "Hukum Perbandingan Volume"],
    "jawaban": 1,
    "penjelasan": "Hukum Proust disebut juga hukum perbandingan tetap, menyatakan bahwa perbandingan massa unsur-unsur dalam senyawa selalu tetap."
  },
  {
    "soal": "Dua unsur yang membentuk lebih dari satu senyawa akan memiliki perbandingan massa yang sederhana dan bulat. Ini merupakan isi dari…",
    "pilihan": ["Hukum Dalton", "Hukum Kekekalan Massa", "Hukum Perbandingan Berganda"],
    "jawaban": 2,
    "penjelasan": "Hukum perbandingan berganda menjelaskan bahwa dua unsur yang membentuk lebih dari satu senyawa akan memiliki massa yang berbanding kelipatan bulat sederhana."
  },
  {
    "soal": "Jika 2 liter hidrogen bereaksi dengan 1 liter oksigen membentuk uap air, maka hukum yang berlaku adalah…",
    "pilihan": ["Hukum Kekekalan Massa", "Hukum Proust", "Hukum Gay-Lussac"],
    "jawaban": 2,
    "penjelasan": "Reaksi gas dengan perbandingan volume sederhana mengikuti hukum Gay-Lussac."
  },
  {
    "soal": "Dalam percobaan, ditemukan bahwa massa sebelum dan sesudah reaksi selalu sama. Hukum yang berlaku adalah…",
    "pilihan": ["Hukum Kekekalan Massa", "Hukum Proust", "Hukum Perbandingan Berganda"],
    "jawaban": 0,
    "penjelasan": "Hukum kekekalan massa menyatakan bahwa massa zat sebelum dan sesudah reaksi adalah tetap."
  },
  {
    "soal": "Oke teman-teman, coba bayangin kamu lagi bikin es teh manis di dalam botol yang ditutup rapat. Kamu masukin gula, teh, dan air ke dalam botol, terus ditutup. Nah, meskipun nanti gulanya larut, warna tehnya berubah, bahkan kalau kamu kocok-kocok botolnya, berat totalnya tetap sama kan?Nah, begitulah yang dimaksud sama Hukum Kekekalan Massa. Hukum ini bilang kalau dalam reaksi kimia yang terjadi di sistem tertutup (artinya gak ada zat yang masuk atau keluar), jumlah massa zat sebelum dan sesudah reaksi itu tetap. Walaupun zat-zatnya berubah bentuk atau jadi zat baru, massa totalnya gak kemana-mana selama gak ada yang keluar masuk dari sistem itu.Mengapa massa zat sebelum dan sesudah reaksi dalam sistem tertutup tetap?",
    "pilihan": ["Karena ada zat baru yang terbentuk", "Karena massa zat hilang ke udara", "Karena tidak ada zat yang masuk/keluar system", "Karena gas menguap ke lingkungan"],
    "jawaban": 2,
    "penjelasan": "Karena di sistem tertutup itu, semua zat yang ikut reaksi tetap berada di dalam wadahnya. Gak ada zat yang masuk ataupun keluar, jadi jumlah massanya tetap sama sebelum dan sesudah reaksi. Kalau ada zat yang keluar ke udara atau ke lingkungan, ya berarti bukan sistem tertutup dong!"
  },
  {
    "soal": "Teman-teman, pernah gak kepikiran kalau air di pegunungan, di laut, di laboratorium, atau di gelas kamu di rumah itu sebenarnya susunan unsurnya sama persis?Jadi gini… Air itu kan terdiri dari hidrogen dan oksigen, dengan perbandingan massa 2:16 (karena 1 atom hidrogen massanya 1, dan 1 atom oksigen massanya 16).Nah, dari dulu sampai sekarang, dimanapun kamu temukan air, perbandingan massanya ya tetep segitu. Inilah yang disebut Hukum Proust atau Hukum Perbandingan Tetap. Hukum ini bilang, perbandingan massa unsur-unsur penyusun suatu senyawa itu selalu tetap, gak peduli air itu kamu ambil dari laboratorium, sungai, atau dari air hujan. Kayak resep bakso yang isinya daging sama tepung, kalau resepnya 2:1, ya bakal gitu terus biar rasanya konsisten.Mengapa perbandingan massa unsur dalam senyawa air di laboratorium dan di alam tetap sama?",
    "pilihan": ["Karena suhu pengaruhnya kecil", "Karena hukum kekekalan massa", "Karena perbandingan massa mengikuti hukum Proust", "Karena air mudah menguap"],
    "jawaban": 2,
    "penjelasan": "Karena Hukum Proust menyatakan bahwa perbandingan massa unsur-unsur penyusun suatu senyawa itu tetap, di manapun senyawa itu ditemukan. Jadi, air yang kamu temui di sungai, di laboratorium, atau di botol minum kamu, perbandingan massa hidrogen dan oksigennya pasti sama."
  },
  {
    "soal": "Coba deh bayangin… air yang kamu minum di rumah, air hujan di luar sana, atau air di laboratorium, semuanya punya perbandingan massa hidrogen dan oksigen yang sama, lho! Nah, kenapa bisa gitu?Karena ada yang namanya Hukum Perbandingan Tetap. Hukum ini bilang kalau unsur-unsur dalam suatu senyawa bakal nyatu dengan perbandingan massa yang selalu sama, gak peduli dibuat di laboratorium atau di alam bebas.Contohnya, di air: setiap 1 gram hidrogen akan ketemu sama 8 gram oksigen buat jadi air. Kalau perbandingan ini beda? Ya bukan air namanya!Mengapa air selalu memiliki perbandingan massa H dan O yang sama di manapun ditemukan?",
    "pilihan": ["Karena suhu yang berubah-ubah gak ngaruh ke susunan massanya", "Karena ada aturan alami yang disebut hukum perbandingan tetap", "Karena volume air bisa beda-beda tergantung wadahnya", "Karena hidrogen itu gas paling ringan di alam"],
    "jawaban": 1,
    "penjelasan": "Karena Hukum Perbandingan Tetap menjelaskan kalau unsur-unsur dalam senyawa bakal selalu berikatan dalam perbandingan massa tertentu. Di air, perbandingan massa hidrogen dan oksigen itu harus tetap sama, mau dibuat di laboratorium, diambil dari sungai, atau hasil tetesan hujan sekalipun."
  },
  {
    "soal": "Hukum yang menyatakan massa zat sebelum dan sesudah reaksi adalah…",
    "pilihan": [
      "Proust",
      "Lavoisier"
    ],
    "jawaban": 1,
    "penjelasan": "Hukum Lavoisier (Hukum Kekekalan Massa) menyatakan bahwa massa zat sebelum dan sesudah reaksi adalah sama."
  },
  {
    "soal": "Pernah gak sih kamu mikir, kok karbon bisa aja gabung sama oksigen jadi CO (karbon monoksida) atau jadi CO₂ (karbon dioksida)?Padahal dua-duanya isinya karbon sama oksigen juga. Nah, ini nih yang dijelasin sama Hukum Perbandingan Berganda. Hukum ini bilang, kalau dua unsur bisa bikin lebih dari satu senyawa, maka massa salah satu unsurnya yang bergabung dengan massa tetap unsur lain akan berbanding sebagai bilangan bulat sederhana.Contohnya: Di CO, 12 gram karbon ketemu 16 gram oksigen. Di CO₂, 12 gram karbon ketemu 32 gram oksigen.Perbandingan 16:32 itu 1:2 → bilangan bulat sederhana kan? Makanya contoh hukum ini pas banget.Soal Kenapa sih CO dan CO₂ bisa jadi contoh hukum perbandingan berganda?",
    "pilihan": [
      "Karena unsur-unsurnya sama tapi bisa bikin senyawa yang beda",
      "Karena massanya selalu sama persis",
      "Karena volume gasnya beda-beda",
      "Karena unsur yang dipakai gak sama"
    ],
    "jawaban": 0,
    "penjelasan": "Karena baik CO maupun CO₂ tersusun dari unsur yang sama, yaitu karbon dan oksigen, tapi massanya bergabung dalam perbandingan yang berbeda-beda untuk membentuk senyawa yang berbeda pula. Dan sesuai Hukum Perbandingan Berganda, perbandingan massanya bakal berupa bilangan bulat sederhana."
  },
  {
    "soal": "Pernah lihat balon yang ditiup makin gede?Nah, itu karena gas bisa ngisi ruang alias volumenya bisa berubah-ubah tergantung kondisi. Makanya, kalau kita mau ngukur seberapa banyak gas yang bereaksi sama gas lain, gampang banget — tinggal ukur volumenya!Nah, Hukum Gay-Lussac itu ngomongin soal perbandingan volume gas yang bereaksi dan hasil reaksinya. Tapi syaratnya, harus diukur pada suhu dan tekanan yang sama biar adil, kayak lomba lari yang garis start-nya barengan. Kenapa hukum ini cuma berlaku buat gas? Karena volume zat padat dan cair gak bisa diukur dan dibandingin kayak gas. Gas itu fleksibel, bisa ngembang dan mengecil, jadi gampang dibandingin volumenya waktu bereaksi. Soal Kenapa sih Hukum Gay-Lussac cuma bisa dipakai buat gas?",
    "pilihan": [
      "Karena gas gampang menguap kayak air di siang bolong",
      "Karena volume gas bisa diukur dan dibandingin dengan mudah",
      "Karena gas itu berat kayak beban tugas akhir",
      "Karena gas susah banget buat bereaksi"
    ],
    "jawaban": 1,
    "penjelasan": "Karena volume gas bisa diukur dan dibandingkan dengan mudah waktu bereaksi, jadi perbandingan volume gas-gas yang bereaksi dan hasilnya bisa kelihatan jelas."
  },
  {
    "soal": "Oke teman-teman, coba bayangin nih… kalian punya dua gelas es teh manis. Dua-duanya sama-sama pakai teh dan gula, tapi satu gelas gulanya 1 sendok, satu lagi gulanya 2 sendok. Nah, di sini tehnya tetap sama, gulanya yang beda-beda jumlahnya.Nah, kalau di dunia kimia, hal ini mirip sama Hukum Perbandingan Berganda. Hukum ini bilang, kalau dua unsur bisa membentuk lebih dari satu senyawa, maka massa salah satu unsur yang bergabung dengan massa tetap unsur lain akan berbanding sebagai bilangan bulat sederhana.Contohnya apa? CO dan CO₂. Dua-duanya isinya karbon dan oksigen. Tapi, di CO, 1 atom karbon ketemu sama 1 atom oksigen. Sementara di CO₂, 1 atom karbon ketemu sama 2 atom oksigen. Nah, lihat tuh — perbandingan massanya 1:2. Pas banget sama bunyi hukum ini.Soal Nah sekarang, kenapa sih CO dan CO₂ bisa jadi contoh Hukum Perbandingan Berganda?",
    "pilihan": [
      "Karena massanya karbonnya sama terus",
      "Karena massa oksigennya berbanding 1:2",
      "Karena gasnya mudah terbakar kayak bensin",
      "Karena gasnya gampang larut di air"
    ],
    "jawaban": 1,
    "penjelasan": "Karena di CO dan CO₂, massanya karbon tetap, yang berubah itu jumlah oksigennya. Di CO → 1 karbon : 1 oksigen, Di CO₂ → 1 karbon : 2 oksigen, jadi perbandingan massa oksigennya 1:2. Pas banget sama syarat Hukum Perbandingan Berganda."
  },
  {
    "soal": "Teman-teman pernah makan garam kan?Nah, di mana pun kalian beli garam — mau di Indonesia, Jepang, atau kutub utara — isinya pasti sama, yaitu natrium (Na) dan klorin (Cl). Garam ini contohnya senyawa NaCl. Nah, menurut Hukum Perbandingan Tetap, perbandingan massa unsur-unsur penyusun suatu senyawa itu selalu tetap. Artinya, berapa pun banyaknya atau di mana pun asalnya, jumlah perbandingan massanya nggak bakal berubah.Contohnya gini:Di Indonesia → Na : Cl = 23 : 35,5. Di Amerika → Na : Cl = 23 : 35,5.Di planet Mars (kalau ada) → ya tetap aja 23 : 35,5.Jadi gak ada ceritanya NaCl di luar negeri lebih asin karena perbandingan Na dan Cl-nya beda ya!Soal Kalau begitu, perbandingan massa Na dan Cl dalam senyawa NaCl di Indonesia dan di luar negeri itu…",
    "pilihan": [
      "Berbeda, karena garamnya beda tempat",
      "Sama, karena mengikuti Hukum Perbandingan Tetap",
      "Nggak menentu, bisa berubah-ubah",
      "Dipengaruhi suhu sekitar"
    ],
    "jawaban": 1,
    "penjelasan": "Karena sesuai Hukum Perbandingan Tetap, perbandingan massa unsur-unsur dalam senyawa itu harus sama, di mana pun senyawa itu ditemukan. NaCl di Indonesia, Amerika, atau di kutub utara pun tetap punya perbandingan massa Na dan Cl yang sama, yaitu 23 : 35,5."
  },
  {
    "soal": "Ke teman-teman, jadi kalau kita bereksperimen pakai gas-gas di laboratorium — misalnya gas hidrogen, oksigen, nitrogen — ternyata volume gas yang bereaksi itu punya aturan unik lho.Menurut Hukum Gay-Lussac, kalau gas-gas itu direaksikan di suhu dan tekanan yang sama, volume gas-gas yang bereaksi dan volume hasil reaksinya akan berbanding sebagai bilangan bulat sederhana.Misalnya nih:2 liter hidrogen + 1 liter oksigen → jadi 2 liter uap air.Perbandingannya?2 : 1 : 2→gampang banget kan? Nggak ada tuh perbandingan kayak 1,75 : 0,8 atau 3,6 : 5,2. Semuanya bilangan bulat sederhana.Soal Nah, berdasarkan cerita tadi… perbandingan volume gas-gas yang bereaksi dalam hukum Gay Lussac itu kayak gimana sih?",
    "pilihan": [
      "Acak, tergantung mood gasnya",
      "Bilangan bulat sederhana Seperti 1:2, 2:3",
      "Bilangan pecahan kayak 0,5:1,5",
      "Tidak bisa diukur"
    ],
    "jawaban": 1,
    "penjelasan": "Karena menurut Hukum Gay-Lussac, volume gas-gas yang bereaksi dan hasil reaksinya selalu berbanding sebagai bilangan bulat sederhana saat suhu dan tekanannya sama. Contohnya kayak 2 : 1 : 2 atau 1 : 3 : 2. Nggak pernah acak atau pecahan."
  },
  {
    "soal": "Nah, teman-teman — kalau kita punya beberapa jenis gas dalam satu wadah tertutup, masing-masing gas itu tetap “nyumbang” tekanan ke dalam wadah, meskipun jenisnya beda-beda.Hukum Dalton bilang begini: Tekanan total campuran gas itu tinggal dijumlahin aja semua tekanan masing-masing gasnya. Jadi misalnya: Gas A tekanannya 2 atm, Gas B tekanannya 3 atm. Berarti tekanan totalnya? Ya tinggal 2 + 3 = 5 atm. Gampang banget kan?Soal Kalau ada gas A dengan tekanan 4 atm dan gas B dengan tekanan 2 atm dimasukin ke dalam satu wadah, kira-kira berapa total tekanannya?",
    "pilihan": [
      "1 atm",
      "5 atm",
      "6 atm",
      "3 atm"
    ],
    "jawaban": 2,
    "penjelasan": "Karena sesuai Hukum Dalton, tekanan total campuran gas tinggal ditambahin aja tekanan masing-masing gasnya. Jadi: 4 atm (gas A) + 2 atm (gas B) = 6 atm."
  },
  {
    "soal": "Oke teman-teman, coba bayangin kita punya beberapa balon gas helium, oksigen, sama nitrogen di dalam satu ruangan. Nah, masing-masing gas itu bakal 'nyumbang' tekanan ke udara di ruangan itu.Hukum Dalton bilang begini:Tekanan total campuran gas itu tinggal dijumlahin tekanan masing-masing gasnya.Misalnya nih:Gas X tekanannya 1 atmGas Y tekanannya 4 atm.Berarti totalnya: 1 atm + 4 atm = 5 atm.Nah inget ya, total tekanan itu hasil tambah dari tekanan tiap gasnya.soal Kalau sekarang ada campuran gas:Gas A tekanannya 2 atmGas B tekanannya 3 atm.Berapa nih total tekanan campuran gasnya?",
    "pilihan": [
      "1 atm",
      "3 atm",
      "5 atm",
      "6 atm"
    ],
    "jawaban": 2,
    "penjelasan": "Karena sesuai Hukum Dalton, tekanan total campuran gas itu tinggal dijumlahkan dari masing-masing gas yang ada. Jadi: 2 atm (gas A) + 3 atm (gas B) = 5 atm. Gampang kan? Tinggal tambah-tambah aja kayak beli dua es teh 2 ribu sama 3 ribu, totalnya 5 ribu."
  },
  {
    "soal": "Oke teman-teman, kalian pernah nggak nyampur teh manis sama es batu? Nah, sebelum dicampur, coba timbang deh:Tehnya 150 gram Es batunya 50 gramTotal sebelum dicampur = 200 gram. Pas esnya udah leleh dan tercampur, kira-kira total massanya tetap berapa? Yup, tetap 200 gram. Nah, itulah yang dimaksud sama Hukum Lavoisier atau Hukum Kekekalan Massa. “Massa zat sebelum dan sesudah reaksi (kalau nggak ada zat yang keluar masuk) itu selalu sama.” Soal Kalau ada reaksi kimia nih: Massa zat-zat sebelum reaksi 200 gram. Berapa ya massa hasil reaksinya kalau sesuai hukum Lavoisier?",
    "pilihan": [
      "Lebih kecil dari 200 g",
      "Lebih dari 200 g",
      "200 g",
      "Tidak dapat ditentukan"
    ],
    "jawaban": 2,
    "penjelasan": "Karena sesuai Hukum Kekekalan Massa, selama reaksi terjadi dalam sistem tertutup alias nggak ada zat yang keluar atau masuk, massa total sebelum dan sesudah reaksi itu harus tetap sama. Jadi, kalau awalnya 200 gram, ya hasilnya tetap 200 gram juga."
  },
  {
    "soal": "Hei teman-teman! Udah pernah ikut perkemahan belum?Nah, jadi waktu kita bakar kayu di api unggun atau di tungku, hasil akhirnya bukan cuma abu loh. Ada juga uap air dan gas karbon dioksida yang keluar ke udara. Nah, itulah sebabnya setelah kayu habis terbakar, abunya jauh lebih ringan dibanding berat kayu awalnya. Kenapa? Karena sebagian zatnya berubah jadi gas dan menguap ke udara!Soal: Menurut kamu nih, kenapa sih berat kayu yang dibakar jadi abu itu lebih ringan daripada berat kayu sebelum dibakar?",
    "pilihan": [
      "Karena ada zat gas hasil pembakaran yang lepas ke udara",
      "Karena massa benda bisa hilang tiba-tiba begitu saja",
      "Karena abu menyerap oksigen dari udara",
      "Karena energi panas bikin kayu makin berat"
    ],
    "jawaban": 0,
    "penjelasan": "Kalau benda dibakar, sebagian zatnya bisa berubah jadi gas dan keluar ke udara, seperti gas karbon dioksida dan uap air. Itulah kenapa sisa abunya tinggal sedikit. Massa benda nggak bisa hilang tiba-tiba ya, sesuai Hukum Lavoisier, cuma berubah bentuk dan wujud aja."
  },
  {
    "soal": "Pernah nggak kamu buka botol soda terus bunyi “psstt!”?Nah, itu karena di dalam botol soda ada gas CO₂ (karbon dioksida) yang ditekan kuat saat ditutup rapat. Begitu tutupnya dibuka, tekanan di dalam botol langsung turun dan gas CO₂ keluar dengan cepat. Makanya terdengar suara itu. Menurut kamu, kenapa sih botol soda bisa berbunyi “<em>psstt!</em>” waktu dibuka?",
    "pilihan": [
      "Karena volume gas di dalam botol lebih besar dari volumenya",
      "Karena tekanan gas menurun saat tutup dibuka",
      "Karena gas CO₂ larut ke dalam air",
      "Karena tekanan gas di dalam botol malah naik saat dibuka"
    ],
    "jawaban": 1,
    "penjelasan": "Saat botol soda masih tertutup, tekanan di dalam lebih tinggi karena gas CO₂ ditekan ke dalam minuman. Begitu tutupnya dibuka, tekanan langsung turun dan gas keluar cepat sambil berbunyi “psstt!”. Inilah contoh sederhana konsep tekanan gas dalam kehidupan sehari-hari."
  },
  {
    "soal": "Coba kamu perhatikan deh, es batu di kulkas kalau mencair jadi air, rasanya tetap sama aja kan? Nah, itu karena air — baik dalam bentuk es ataupun cair — selalu terdiri dari unsur yang sama, yaitu hidrogen (H) dan oksigen (O) dengan perbandingan tetap. Inilah yang dijelaskan dalam Hukum Proust, bahwa perbandingan massa unsur penyusun suatu senyawa selalu tetap, nggak peduli wujudnya.Kenapa ya semua es batu murni kalau mencair jadi air tetap punya komposisi yang sama?",
    "pilihan": [
      "Karena perbandingan unsur hidrogen dan oksigen di dalamnya selalu tetap",
      "Karena es batu itu biasanya dibuat dari air mineral",
      "Karena wujud padat lebih berat dari cair",
      "Karena air gampang menguap kalau dibiarkan"
    ],
    "jawaban": 0,
    "penjelasan": "Menurut Hukum Proust, perbandingan massa unsur penyusun senyawa itu selalu tetap. Jadi meskipun es mencair jadi air, jumlah hidrogen dan oksigennya tetap 2 banding 1, nggak berubah."
  },
  {
    "soal": "Massa zat sebelum dan sesudah reaksi tetap, ini hukum apa ya?",
    "pilihan": [
      "Hukum Lavoisier",
      "Hukum Dalton"
    ],
    "jawaban": 0,
    "penjelasan": "Hukum Lavoisier menyatakan bahwa massa zat sebelum dan sesudah reaksi adalah sama selama tidak ada zat yang keluar atau masuk dari sistem."
  },
  {
    "soal": "Hukum Boyle mengungkapkan bahwa volume gas berbanding terbalik dengan tekanan, jika suhu tetap. Rumus: P1 x V1 = P2 x V2. Dengan: P1= tekanan awalV1= volume awalP2= tekanan akhirV2= volume akhir. Jika tekanan gas pada volume 4 L adalah 2 atm, berapa volume gas tersebut jika tekanan berubah menjadi 4 atm dengan suhu tetap?",
    "pilihan": [
      "2 L",
      "3 L",
      "1 L",
      "0.5 L"
    ],
    "jawaban": 0,
    "penjelasan": "Menurut Hukum Boyle, P1 x V1 = P2 x V2.Substitusi nilai: (2 atm) x (4 L) = (4 atm) x V2.8 = 4 x V2.V2 = 8 / 4 = 2 L.Jadi volume gas menjadi 2 L."
  },
  {
    "soal": "Bayangin kamu lagi bikin balon gas di siang hari. Pas pagi-pagi, suhu udaranya masih dingin, tekanan gas di balon 1 atm. Nah, siangnya pas matahari mulai terik, suhu di luar naik jadi dua kali lipat. Karena volume balon nggak berubah (nggak dilepas), tekanan di dalam balon juga bakal ikut naik. Nah, inilah yang dijelasin sama Hukum Gay-Lussac: <em>Kalau volume gas nggak berubah, tekanan gas bakal sebanding sama suhunya (dalam Kelvin)</em>. Rumus: P1/T1 = P2/T2.Dengan: P1= tekanan awal, T1= suhu awal, P2= tekanan akhir, T2= suhu akhir. Jika tekanan gas pada suhu 300 K adalah 1 atm, berapa tekanan gas tersebut jika suhu naik menjadi 600 K dengan volume tetap?",
    "pilihan": [
      "2 atm",
      "3 atm",
      "4 atm",
      "5 atm"
    ],
    "jawaban": 0,
    "penjelasan": "Menurut Hukum Gay-Lussac, tekanan gas berbanding lurus dengan suhu (dalam Kelvin) jika volume tetap. P1/T1 = P2/T2. (1 atm / 300 K) = P2 / 600 K. P2 = (1 atm * 600 K) / 300 K = 2 atm. Jadi, tekanan menjadi 2 atm."
  },
  {
    "soal": "Kita bayangin kayak lagi bikin eksperimen kecil di laboratorium nih. Misalnya kamu bakar 5 gram magnesium di dalam wadah tertutup bareng oksigen. Setelah selesai, total massa hasil reaksinya jadi 9 gram. Nah, menurut Hukum Lavoisier (Hukum Kekekalan Massa): “Jumlah massa zat sebelum dan sesudah reaksi itu pasti sama, selama nggak ada zat yang keluar atau masuk dari sistem”. Pada reaksi pembakaran: 10 g karbon dibakar dengan oksigen menghasilkan 36 g karbon dioksida (CO₂). Berapa gram oksigen yang bereaksi?",
    "pilihan": [
      "26 g",
      "28 g",
      "36 g",
      "10 g"
    ],
    "jawaban": 0,
    "penjelasan": "Berdasarkan Hukum Lavoisier, massa oksigen yang bereaksi = massa karbon dioksida - massa karbon = 36 g - 10 g = 26 g."
  },
  {
    "soal": "Kita bayangin kamu lagi bikin air di lab nih. Air itu kan tersusun dari hidrogen dan oksigen. Nah, kata Hukum Proust (Hukum Perbandingan Tetap): “Perbandingan massa unsur-unsur dalam sebuah senyawa itu selalu tetap, nggak peduli dibikin di mana — di Indonesia, di Jepang, atau di Mars sekalipun”. Contoh: Misalnya, waktu bikin air, 2 gram hidrogen butuh 16 gram oksigen buat jadi air. Kalau kamu bikin lagi besok, perbandingannya harus tetap segitu juga, nggak boleh berubah. Nah sekarang coba soal ini: Jika dalam pembentukan air, 1 g hidrogen bereaksi dengan 8 g oksigen, kira-kira berapa banyak oksigen yang dibutuhkan kalau hidrogennya jadi 2 g?",
    "pilihan": [
      "4 g",
      "8 g",
      "16 g",
      "32 g"
    ],
    "jawaban": 2,
    "penjelasan": "Menurut Hukum Proust, perbandingan massa unsur dalam senyawa tetap.Kita tinggal ikutin perbandingan tetapnya aja.Perbandingan awal:1 g H : 8 g OKalau H-nya jadi 2 g, tinggal dikali 2:2 g H : 16 g OJadi, oksigen yang dibutuhkan adalah 16 g."
  },
  {
    "soal": "Coba bayangin kamu punya balon gede, isinya campuran beberapa gas — misal gas oksigen, gas nitrogen, sama gas helium. Nah, setiap gas di dalam balon itu kan nyumbang tekanan masing-masing. Nah, menurut Hukum Dalton tentang Tekanan Parsial: Tekanan total campuran gas itu tinggal dijumlahin aja tekanan masing-masing gas di dalam wadah. Rumus: P total = P1 + P2 + P3. Dengan: P total = tekanan total campuran gas, P1,P2,P3 = tekanan parsial masing-masing gas.Dalam sebuah wadah terdapat campuran gas A (2 atm) dan gas B (3 atm). Jika gas C memiliki tekanan parsial 1 atm, berapa tekanan total campuran gas tersebut?",
    "pilihan": [
      "4 atm",
      "5 atm",
      "6 atm",
      "7 atm"
    ],
    "jawaban": 2,
    "penjelasan": "Sesuai dengan Hukum Dalton, Ptotal = P(A) + P(B) + P(C).Ptotal = 2 atm + 3 atm + 1 atm = 6 atm.Jadi, tekanan total campuran gas adalah 6 atm."
  },
  {
    "soal": "Bayangin kamu lagi tiup balon isinya bukan cuma udara biasa, tapi ada tiga jenis gas: gas oksigen, gas nitrogen, sama gas helium. Nah, masing-masing gas di balon itu punya “tekanan sendiri-sendiri” yang disebut tekanan parsial. Hukum Dalton bilang: Tekanan total campuran gas itu tinggal dijumlahin semua tekanan parsial gas yang ada di dalam wadah. Rumus: Ptotal = P1 + P2 + P3.Dengan: Ptotal = tekanan total campuran gas, P1,P2,P3= tekanan parsial masing-masing gas.Pada suatu wadah terdapat tiga gas: gas A (tekanan 3 atm), gas B (tekanan 2 atm), dan gas C (tekanan 1 atm). Berapa total tekanan campuran gas tersebut?",
    "pilihan": [
      "6 atm",
      "5 atm",
      "7 atm",
      "4 atm"
    ],
    "jawaban": 0,
    "penjelasan": "Menurut Hukum Dalton, total tekanan campuran gas adalah 6 atm (3 + 2 + 1)."
  },
  {
    "soal": "Bayangin kamu lagi manasin ban sepeda. Semakin panas bannya, tekanan udaranya makin gede. Nah, Hukum Gay-Lussac ini ngomongin soal hubungan tekanan gas sama suhu, asalkan volumenya nggak berubah. Intinya: Kalau suhu naik, tekanan ikut naik. Kalau suhu turun, tekanan ikut turun — pokoknya mereka jalan bareng. Rumus: P1/T1 = P2/T2. Dengan: P1 = tekanan awal, T1 = suhu awal, P2 = tekanan akhir, T2 = suhu akhir. Jika tekanan gas pada suhu 200 K adalah 3 atm, berapa tekanan gas tersebut jika suhu naik menjadi 400 K dengan volume tetap?",
    "pilihan": [
      "6 atm",
      "8 atm",
      "12 atm",
      "4 atm"
    ],
    "jawaban": 0,
    "penjelasan": "Menggunakan rumus Hukum Gay-Lussac: P1/T1 = P2/T2.Substitusi nilai: (3 atm / 200 K) = P2 / 400 K.P2 = (3 atm * 400 K) / 200 K = 6 atm."
  },
  {
    "soal": "Coba kamu bayangin ada 3 balon kecil, masing-masing berisi gas berbeda. Nah, tiap balon itu punya tekanan sendiri-sendiri. Terus, kalau ketiga gas itu digabung dalam 1 wadah, maka tekanan totalnya tinggal dijumlahin aja. Nah, itulah yang disebut Hukum Dalton tentang Tekanan Parsial. Rumus: Ptotal = P1 + P2 + P3. Dalam campuran gas, gas A memiliki tekanan parsial 3 atm, gas B memiliki tekanan parsial 5 atm, dan gas C memiliki tekanan parsial 2 atm. Berapa tekanan total campuran gas tersebut?",
    "pilihan": [
      "5 atm",
      "7 atm",
      "10 atm",
      "15 atm"
    ],
    "jawaban": 2,
    "penjelasan": "Berdasarkan Hukum Dalton, total tekanan campuran gas adalah jumlah dari tekanan parsial masing-masing gas. Dapat kita gunakan rumus:Ptotal= P(A) + P(B) + P(C) = 3 atm + 5 atm + 2 atm = 10 atm.Jadi, tekanan total campuran gas adalah 10 atm."
  },
  {
    "soal": "Gini ya, teman-teman — Hukum Kekekalan Massa atau Hukum Lavoisier itu intinya begini:Jumlah massa zat sebelum reaksi dan sesudah reaksi itu harus sama. Nggak boleh tiba-tiba nambah atau berkurang kayak sulap.Jadi kalau kita bakar sesuatu, jumlah massa bahan yang kita pakai ditambah massa gas yang masuk, hasilnya harus sama kayak massa zat hasil reaksi. ✏Contoh:Misalnya nih: 10 g magnesium dibakar di udara, menghasilkan 16 g magnesium oksida. Berarti oksigen yang ikut bereaksi: 16 g - 10 g = 6 g. Jadi, massa sebelum = massa sesudah.Sebuah reaksi pembakaran karbon menghasilkan 44 g karbon dioksida. Jika massa karbon yang digunakan adalah 12 g, berapa massa oksigen yang bereaksi?",
    "pilihan": [
      "20 g",
      "32 g",
      "24 g",
      "10 g"
    ],
    "jawaban": 1,
    "penjelasan": "Berdasarkan Hukum Lavoisier, massa sebelum dan sesudah reaksi harus sama.Massa karbon = 12 g,Massa karbon dioksida = 44 g.Massa oksigen = Massa karbon dioksida - Massa karbon = 44 g - 12 g = 32 g. Jadi, massa oksigen yang bereaksi adalah 32 g."
  },
  {
    "soal": "Hallo, teman-teman!Kita bahas Hukum Gay-Lussac yuk. Hukum ini bilang: Kalau suhu gas dinaikkan, maka tekanannya juga naik, asalkan volumenya tetap. Ibaratnya kayak balon karet. Kalau balon itu diisi gas terus dipanaskan tanpa dibesarin, gas di dalamnya bakal makin “sumpek” dan tekanannya naik. Rumus: P1/T1 = P2/T2Jika tekanan gas pada suhu 300 K adalah 3 atm, berapa tekanan gas tersebut pada suhu 600 K?",
    "pilihan": [
      "6 atm",
      "9 atm",
      "12 atm",
      "18 atm"
    ],
    "jawaban": 0,
    "penjelasan": "Berdasarkan Hukum Gay-Lussac, tekanan gas berbanding lurus dengan suhu. Menggunakan rumus P1/T1 = P2/T2. Substitusi nilai yang diberikan:3 atm / 300 K = P2 / 600 KSolusi untuk P2:P2 = (3 atm * 600 K) / 300 K = 6 atmJadi, tekanan gas pada suhu 600 K adalah 6 atm."
  },
  {
    "soal": "Hukum yang menyatakan perbandingan massa unsur dalam senyawa selalu tetap adalah…",
    "pilihan": [
      "Lavoisier",
      "Proust"
    ],
    "jawaban": 1,
    "penjelasan": "Hukum Proust menyatakan bahwa perbandingan massa unsur dalam senyawa selalu tetap."
  },
  {
    "soal": "Yuk kenalan sama Hukum Proust atau disebut juga Hukum Perbandingan Tetap. Jadi intinya hukum ini bilang: Kalau dua unsur membentuk senyawa, perbandingan massanya akan selalu tetap, berapa pun banyaknya senyawa yang dibikin. Misalnya nih, air itu selalu tersusun dari hidrogen dan oksigen. Nah, perbandingan massa antara oksigen dan hidrogen di dalam air itu selalu sama, meskipun kamu bikin sedikit atau segalon penuh! ✏Contoh: Misal: 2 gram hidrogen bereaksi dengan 16 gram oksigen buat jadi air. Berarti perbandingannya: Oksigen:Hidrogen=16:2=8:1. Artinya tiap 1 gram hidrogen butuh 8 gram oksigen buat jadi air. Jika 16 g oksigen bergabung dengan 2 g hidrogen untuk membentuk air, berapa banyak oksigen yang diperlukan untuk 6 g hidrogen?",
    "pilihan": [
      "48 g",
      "16 g",
      "24 g",
      "32 g"
    ],
    "jawaban": 0,
    "penjelasan": "Berdasarkan Hukum Proust, perbandingan massa hidrogen dan oksigen dalam air adalah 2:16 atau 1:8. Jika 6 g hidrogen digunakan, oksigen yang diperlukan adalah 6 x 8 = 48 g."
  },
  {
    "soal": "Pernah lihat paku atau pagar besi berkarat? Nah, itu tuh terjadi karena besi di dalam paku bereaksi dengan oksigen dari udara, ditambah air atau kelembapan. Proses ini membentuk zat baru yang namanya karat (Fe₂O₃·xH₂O).Nah, kalau kita hitung-hitung nih, massa besi ditambah massa oksigen yang bereaksi akan jadi massa total karat. Sesuai Hukum Lavoisier: “<em>Massa sebelum dan sesudah reaksi harus sama, asal sistemnya tertutup</em>.” Kalau di udara terbuka gimana? Yuk analisis!Kalau sebuah paku dibiarkan di udara terbuka dan berkarat, menurut kamu apa yang terjadi dengan massa total paku dan oksigen yang bereaksi?",
    "pilihan": [
      "Massa total bertambah karena besi menyerap oksigen",
      "Massa total berkurang karena karat lebih ringan",
      "Massa total tetap, karena massa selalu kekal",
      "Karat lebih ringan dibanding paku aslinya"
    ],
    "jawaban": 0,
    "penjelasan": "Saat besi berkarat, massa paku bertambah karena besi bereaksi dengan oksigen di udara, membentuk senyawa karat. Jadi total massanya nambah gara-gara oksigen ikut masuk ke dalam reaksi."
  },
  {
    "soal": "Coba bayangin kamu nyalain lilin kecil di dalam toples kaca yang ditutup rapat. Lama-lama apinya mati, kan? Itu karena oksigen habis. Nah, selama proses pembakaran itu, gas-gas hasil pembakaran (seperti karbon dioksida dan uap air) nggak bisa keluar ke mana-mana karena ruangnya tertutup rapat. Menurut Hukum Lavoisier nih, dalam sistem tertutup, massa sebelum dan sesudah reaksi harus tetap sama. Kenapa? Karena nggak ada zat yang keluar atau masuk. Kalau lilin dibakar di dalam toples tertutup, kenapa massa total sistem (lilin + udara + gas hasil pembakaran) tetap sama sebelum dan sesudah pembakaran?",
    "pilihan": [
      "Karena semua gas hasil pembakaran tetap di dalam toples",
      "Karena gas keluar lewat celah",
      "Karena api bisa menghasilkan massa tambahan",
      "Karena lilin berubah jadi oksigen"
    ],
    "jawaban": 0,
    "penjelasan": "Di dalam sistem tertutup kayak toples rapat, nggak ada massa yang bisa keluar masuk. Semua zat hasil pembakaran — termasuk gas — tetap di dalam situ. Jadi, sesuai Hukum Lavoisier, massa totalnya tetap sama sebelum dan sesudah."
  },
  {
    "soal": "Jika dua gas bereaksi pada suhu dan tekanan sama, volumenya berbanding bilangan bulat sederhana. Pernyataan itu merupakan isi dari…",
    "pilihan": [
      "Hukum Dalton",
      "Hukum Proust",
      "Hukum Gay-Lussac",
      "Hukum Lavoisier"
    ],
    "jawaban": 2,
    "penjelasan": "Pernyataan tersebut adalah isi dari Hukum Gay-Lussac yang menyatakan bahwa volume gas-gas yang bereaksi berbanding dengan bilangan bulat sederhana pada suhu dan tekanan sama."
  },
  {
    "soal": "Hai teman-teman, kita bahas bareng yuk soal Hukum Proust atau disebut juga Hukum Perbandingan Tetap. Jadi, hukum ini bilang: Kalau dua unsur bergabung membentuk senyawa, perbandingan massanya selalu tetap, berapa pun banyaknya senyawa yang dibikin. Jadi meskipun kamu bikin air cuma setetes atau seember penuh, perbandingan massa antara hidrogen dan oksigen di dalamnya pasti sama. ✏Contoh: Misalnya nih: 2 gram hidrogen + 16 gram oksigen; 4 gram hidrogen + 32 gram oksigen; 6 gram hidrogen + 48 gram oksigen. Kalau kita hitung:Hidrogen:Oksigen=2:16;4:32;6:48=1:8Jadi perbandingannya selalu 1:8. Nah, ini yang dimaksud Hukum Proust — perbandingan tetap, walaupun jumlahnya beda. Analisislah perbandingan massa H:O di setiap sampel dan tentukan hukum yang sesuai dengan data pembuatan air berikut: 2 g hidrogen + 16 g oksigen, 4 g hidrogen + 32 g oksigen, 6 g hidrogen + 48 g oksigen.",
    "pilihan": [
      "Hukum Lavoisier",
      "Hukum Dalton",
      "Hukum Proust",
      "Hukum Gay-Lussac"
    ],
    "jawaban": 2,
    "penjelasan": "Perbandingan massa H:O selalu 1:8 di setiap sampel, sesuai hukum Proust tentang perbandingan tetap."
  },
  {
    "soal": "Halo teman-teman!Pernah gak waktu masak mie instan, kamu liat airnya mendidih keluar uap? Nah, ternyata kalau gas-gas kayak uap air, oksigen, dan hidrogen bereaksi di kondisi suhu dan tekanan yang sama, volumenya bakal berbanding dalam bilangan bulat sederhana. Itu namanya Hukum perbandingan volume gas. Contohnya, kalau 2 liter hidrogen bereaksi dengan 1 liter oksigen, bakal menghasilkan 2 liter uap air. Lihat deh: 2 : 1 : 2 → bilangan bulat sederhana, kan? Contoh Kasus:2 L gas H₂ + 1 L gas O₂ → 2 L uap air. Perbandingan volumenya: 2 : 1 : 2. Perhatikan reaksi gas berikut ini: 2 liter gas A bereaksi dengan 3 liter gas B menghasilkan 4 liter gas C. Coba analisis perbandingan volume gas-gas tersebut. Apakah perbandingannya memenuhi hukum perbandingan volume dalam bilangan bulat sederhana? Jika iya, hukum dasar kimia apa yang berlaku di sini?",
    "pilihan": [
      "Hukum Dalton",
      "Hukum Gay-Lussac",
      "Hukum Lavoisier",
      "Hukum Proust"
    ],
    "jawaban": 1,
    "penjelasan": "Perbandingan volumenya: 2 : 3 : 4. Nah 2, 3, dan 4 itu bilangan bulat sederhana. Sesuai Hukum Gay-Lussac yang menyatakan bahwa gas-gas yang bereaksi pada suhu dan tekanan sama volumenya berbanding sebagai bilangan bulat sederhana. Jadi jawabannya: B. Hukum Gay-Lussac"
  },
  {
    "soal": "Coba bayangin kalau kita masuk ke ruangan yang isinya udara campur uap parfum dan gas dari pengharum ruangan. Nah, ternyata tekanan udara di ruangan itu sebenarnya hasil dari jumlah tekanan masing-masing gas yang ada di situ. Itulah yang disebut Hukum Dalton tentang Tekanan Parsial. Tekanan parsial itu maksudnya tekanan yang diberikan oleh masing-masing jenis gas kalau dia sendirian di wadah itu. Rumusnya simpel: ✅ Tekanan total = Tekanan gas A + Tekanan gas B + ... ✅ Contoh Kasus: Di sebuah balon udara, ada gas helium tekanannya 400 mmHg dan oksigen 300 mmHg. Berarti, tekanan total di dalam balon itu: 400 mmHg + 300 mmHg = 700 mmHg.Soal: Di sebuah laboratorium, dilakukan percobaan pencampuran gas dalam tabung tertutup. Data hasil pengukuran: Gas Tekanan Parsial (mmHg) A:300; B:500. Coba analisis, berapakah tekanan total di dalam tabung tersebut? Dan hukum dasar kimia apa yang sesuai dengan peristiwa ini?",
    "pilihan": [
      "800 mmHg, Hukum Dalton",
      "500 mmHg, Hukum Gay-Lussac",
      "300 mmHg, Hukum Lavoisier",
      "200 mmHg, Hukum Proust"
    ],
    "jawaban": 0,
    "penjelasan": "Kita tinggal jumlahkan aja tekanannya: 300 mmHg + 500 mmHg = 800 mmHg. Karena tekanan total dihasilkan dari penjumlahan tekanan masing-masing gas yang gak saling bereaksi, ini sesuai Hukum Dalton tentang Tekanan Parsial. Jadi jawabannya: A. 800 mmHg, Hukum Dalton"
  },
  {
    "soal": "Hai teman-teman! Coba bayangin deh… kalau kamu punya balon berisi gas, terus balon itu kamu panaskan. Kira-kira apa yang terjadi? Balonnya bakal ngembang! Kenapa? Karena volume gas di dalam balon itu bertambah seiring suhu naik, asalkan tekanannya tetap. Nah, ini nih yang disebut Hukum Gay-Lussac. Intinya: Volume gas berbanding lurus sama suhu mutlak (Kelvin). Rumusnya: V1/T1 = V2/T2. Contoh kasus: Di laboratorium, ada gas dalam tabung 2 liter pada suhu 200 K. Kalau tabung dipanaskan sampai 400 K, berapa volume gasnya kalau tekanannya gak berubah? Jawab: Karena suhunya naik 2× (200 K → 400 K), maka volumenya juga 2×. Jadi: 2 liter x (400 K / 200 K) = 4 liter. Di sebuah percobaan digital, sebuah gas memiliki volume 2 liter pada suhu 300 K. Ketika suhu dinaikkan jadi 600 K tanpa mengubah tekanan, berapakah volume gas itu sekarang? Selain menghitung, tentukan juga hukum dasar kimia yang berlaku di peristiwa ini.",
    "pilihan": [
      "1 liter, Hukum Dalton",
      "2 liter, Hukum Lavoisier",
      "3 liter, Hukum Boyle",
      "4 liter, Hukum Gay-Lussac"
    ],
    "jawaban": 3,
    "penjelasan": "Suhu naik 2× (300 K → 600 K), volume gas di tekanan tetap ikut naik 2× (2 L menjadi 4 L). Karena volume gas berubah sebanding dengan suhu mutlak saat tekanan tetap, ini sesuai Hukum Gay-Lussac. Jawaban: D. 4 liter, Hukum Gay-Lussac."
  },
  {
    "soal": "Hai teman-teman, coba bayangin nih…Kamu punya tiga balon kecil, masing-masing isinya gas A, gas B, dan gas C. Terus ketiga gas itu kamu masukin bareng-bareng ke dalam satu wadah tertutup. Nah, setiap gas itu tetap “nyumbang” tekanan ke dalam wadah sesuai tekanannya masing-masing. Inilah yang disebut Hukum Dalton.Intinya:Tekanan total dalam campuran gas yang gak saling bereaksi = jumlah dari tekanan parsial masing-masing gas.Rumusnya: Ptotal = P1 + P2 + P3Dengan:Ptotal = tekanan total campuran gasP1,P2,P3= tekanan parsial masing-masing gasDalam sebuah wadah tertutup, terdapat gas A dengan tekanan parsial 180 mmHg, gas B dengan 220 mmHg, dan gas C dengan 150 mmHg. Tekanan total gas tersebut adalah …",
    "pilihan": [
      "550 mmHg",
      "600 mmHg",
      "650 mmHg",
      "500 mmHg"
    ],
    "jawaban": 0,
    "penjelasan": "Berdasarkan Hukum Dalton, tekanan total gas campuran adalah jumlah tekanan parsialnya. Tekanan total = 180 mmHg + 220 mmHg + 150 mmHg = 550 mmHg."
  },
  {
    "soal": "Halo teman-teman!Coba bayangin kamu bikin sirup manis di dua gelas. Di gelas pertama kamu pakai 3 sendok gula dan 9 sendok air.Di gelas kedua kamu pakai 6 sendok gula dan 18 sendok air.Nah, rasanya kira-kira bakal sama gak?Pasti sama dong! Karena perbandingan gulanya ke air tetap, yaitu 1:3.Nah di dunia kimia juga gitu. Kalau kamu bikin senyawa yang sama, kayak air atau garam, perbandingan massa unsur penyusunnya bakal selalu tetap — itulah yang disebut Hukum Proust.Intinya:Dalam senyawa yang sama, perbandingan massa unsur-unsurnya gak bakal berubah meskipun jumlah senyawanya beda. Contoh Kasus:Misal:4 g hidrogen bereaksi dengan 32 g oksigen → perbandingan 4:32 = 1:88 g hidrogen dengan 64 g oksigen → 8:64 = 1:8Perbandingannya tetap 1:8 kan?Nah, inilah Hukum Proust!Ada dua percobaan pembuatan senyawa AB: Percobaan 1 terdiri dari 3 g unsur A dan 9 g unsur B, Percobaan 2 terdiri dari 6 g unsur A dan 18 g unsur B. Maka perbandingan massa A dan B pada kedua percobaan tersebut adalah …",
    "pilihan": [
      "Tidak tetap",
      "Sama",
      "Berbeda",
      "Acak"
    ],
    "jawaban": 1,
    "penjelasan": "Perbandingan massa A:B pada percobaan pertama = 3:9 = 1:3. Perbandingan massa A:B pada percobaan kedua = 6:18 = 1:3. Karena perbandingan massa tetap, ini membuktikan Hukum Proust."
  },
  {
    "soal": "Hukum Kekekalan Massa bilang begini: dalam reaksi kimia di ruang tertutup, jumlah massa sebelum dan sesudah reaksi itu tetap. Jadi, kalau kamu bakar sesuatu di ruang tertutup, massa gas + abu + sisa apapun setelahnya harus sama kayak massa semua bahan di awal.Bayangin kamu bakar 100 gram kayu di ruang tertutup. Hasilnya, keluar 80 gram gas dan 20 gram abu. Supaya Hukum Kekekalan Massa tetap berlaku, apa yang seharusnya dipastikan dari hasil pembakaran itu?",
    "pilihan": [
      "Massa gas yang terbentuk lebih besar dari massa bahan bakar",
      "Massa total gas dan abu sama dengan massa bahan bakar",
      "Massa gas lebih kecil dari massa bahan bakar",
      "Massa abu lebih kecil dari massa bahan bakar"
    ],
    "jawaban": 1,
    "penjelasan": "Hukum Kekekalan Massa menyatakan bahwa jumlah massa tidak boleh berkurang atau bertambah. Di soal ini, 80 g gas + 20 g abu = 100 g, artinya sama seperti massa bahan bakar awal. Jadi hukum ini berlaku."
  },
  {
    "soal": "Halo teman-teman!Pernah nggak sih kalian bikin sirup? Misalnya 2 sendok sirup dicampur 4 sendok air, jadinya manisnya pas. Kalau mau bikin lebih banyak, tinggal bikin 4 sendok sirup + 8 sendok air. Nah, rasa manisnya tetap sama kan? Karena perbandingan sirup dan airnya nggak berubah.Nah di kimia juga gitu lho.Kalau kita gabungkan dua unsur buat bikin senyawa, perbandingan massanya bakal selalu tetap, meskipun jumlahnya bisa beda-beda.Misal 4 g unsur A + 8 g unsur B = senyawa AB6 g unsur A + 12 g unsur B = senyawa ABPerbandingan A : B-nya tetap 1 : 2 di kedua percobaan.Inilah yang disebut Hukum Proust atau Hukum Perbandingan Tetap.Soal Seorang siswa bernama Fikri menyimpulkan bahwa data berikut ini tidak mendukung Hukum Proust karena massa total di tiap percobaan berbeda. Percobaan 1: Massa A = 4 g, Massa B = 8 g. Percobaan 2: Massa A = 6 g, Massa B = 12 g. Menurut pendapat kamu, apakah kesimpulan Fikri sudah tepat? Pilih alasan yang paling benar di bawah ini!",
    "pilihan": [
      "Tepat, karena jumlah massa total di tiap percobaan memang harus sama menurut Hukum Proust.",
      "Tidak tepat, karena yang penting perbandingan massa A dan B di tiap percobaan tetap sama.",
      "Tepat, karena massa unsur A harus selalu lebih kecil dari B.",
      "Tidak tepat, karena Hukum Proust tidak berlaku kalau massa totalnya berbeda."
    ],
    "jawaban": 1,
    "penjelasan": "Hukum Proust fokusnya bukan pada jumlah total massa, tapi pada perbandingan massa antar unsur penyusun senyawa. Selama perbandingan A:B tetap, hukum ini tetap berlaku. Fikri keliru karena salah paham terhadap konsep perbandingan."
  },
  {
    "soal": "Kenalan Yuk Sama Hukum Gay-Lussac!“Eh teman-teman, tahu nggak? Kalau gas dipanaskan, volumenya bisa membesar loh, asal tekanannya nggak diubah. Nah, aturan itu disebut Hukum Gay-Lussac. Intinya sih, volume gas itu berbanding lurus sama suhu mutlaknya (pakai Kelvin ya, bukan Celsius!). Jadi makin tinggi suhunya, makin gede volumenya. Tapi inget, syaratnya tekanan harus tetap!”Contoh:Bayangin kamu punya balon gas 1 liter di suhu 300 K. Kalau balon itu dipanasin sampai 600 K, kira-kira volumenya jadi berapa? Yup, dua kali lipat dong jadi 2 liter!Soal Dina melakukan percobaan sebagai berikut: Wadah 1= 1 liter gas di suhu 300 K. Wadah 2= 2 liter gas di suhu 600 K. Dina bilang: “Kayaknya hasil ini nggak sesuai Hukum Gay-Lussac deh, soalnya volumenya beda.” Menurut kamu gimana?",
    "pilihan": [
      "Dina benar, harusnya volumenya selalu sama.",
      "Dina salah, karena perbandingan volume dan suhu harus sebanding.",
      "Dina benar, karena suhu nggak berpengaruh ke volume.",
      "Dina salah, karena volume dan suhu nggak ada hubungannya."
    ],
    "jawaban": 1,
    "penjelasan": "Sesuai Hukum Gay-Lussac, jika suhu gas dinaikkan 2× (300 K ke 600 K) dan tekanan tetap, maka volume juga naik 2× (1 liter jadi 2 liter). Dina keliru. Maka jawabannya B."
  },
  {
    "soal": "Hai teman-teman!Kalau gas dipanaskan, volumenya bisa bertambah, tapi hanya kalau tekanannya tetap ya. Nah, hukum yang ngatur soal ini namanya Hukum Gay-Lussac.Bunyi sederhananya:\"Kalau tekanan tetap, volume gas itu sebanding sama suhu mutlaknya (dalam Kelvin).\"Jadi, kalau suhu naik 2× lipat, volumenya juga harus naik 2× lipat.Kalau suhu turun setengah, ya volumenya ikut turun setengah.Soal Data percobaan gas: Wadah 1: Suhu = 300 K, Volume = 3 L. Wadah 2: Suhu = 600 K, Volume = 6 L. Bagaimana hasil percobaan ini menurut Hukum Gay-Lussac?",
    "pilihan": [
      "Sesuai, karena perbandingan volume dan suhu sebanding.",
      "Tidak sesuai, karena volume tidak berubah.",
      "Tidak sesuai, karena volume turun saat suhu naik.",
      "Tidak ada hubungan volume dan suhu."
    ],
    "jawaban": 0,
    "penjelasan": "Coba cek perbandingan volume dan suhu: V1/T1 = 3/300 = 0.01, V2/T2 = 6/600 = 0.01. Sama, berarti sesuai dengan Hukum Gay-Lussac."
  },
  {
    "soal": "Hai teman-teman!Kalau gas dipanaskan, volumenya bisa bertambah, tapi hanya kalau tekanannya tetap ya. Nah, hukum yang ngatur soal ini namanya Hukum Gay-Lussac.Bunyi sederhananya:\"Kalau tekanan tetap, volume gas itu sebanding sama suhu mutlaknya (dalam Kelvin).\"Jadi, kalau suhu naik 2× lipat, volumenya juga harus naik 2× lipat.Kalau suhu turun setengah, ya volumenya ikut turun setengah.saol Data percobaan gas: Wadah 1: Suhu = 300 K, Volume = 3 L. Wadah 2: Suhu = 600 K, Volume = 4 L. Bagaimana hasil percobaan ini menurut Hukum Gay-Lussac?",
    "pilihan": [
      "Sesuai, karena perbandingan volume dan suhu sebanding.",
      "Tidak sesuai, karena volume tidak bertambah sesuai kenaikan suhu.",
      "Sesuai, karena volume turun saat suhu naik.",
      "Tidak ada hubungan volume dan suhu."
    ],
    "jawaban": 1,
    "penjelasan": "Jika suhu naik 2×, volume juga seharusnya naik 2× agar sesuai hukum Gay-Lussac. Tapi dari 3 L ke 4 L tidak sesuai. Jadi jawabannya B."
  },
  {
    "soal": "Halo penjelajah gas di Laboratorium Ular Tangga!Coba bayangkan deh…Kalau kamu punya beberapa jenis gas dalam satu wadah, tapi gas-gas itu nggak saling bereaksi, kira-kira berapa total tekanannya? Nah, di sinilah Hukum Dalton beraksi!Hukum Dalton bilang begini:\"Tekanan total campuran gas = jumlah tekanan parsial masing-masing gas.\"Tapi hati-hati ya! Hukum ini cuma berlaku kalau:Gas-gas itu tidak saling bereaksiBerada di wadah tertutupDalam kondisi suhu dan volume tertentuJadi, sebelum kamu asal jumlahin tekanannya, kamu harus pastikan dulu situasinya sesuai dengan syarat hukum DaltonSoal, Dalam percobaan laboratorium, gas A punya tekanan 120 mmHg, gas B 200 mmHg, dan gas C 80 mmHg dalam wadah tertutup, dan ketiga gas tersebut tidak saling bereaksi.Menurut analisis kamu, apakah Hukum Dalton bisa digunakan untuk menentukan tekanan total campuran gas ini?",
    "pilihan": [
      "Ya, hukum Dalton bisa dipakai karena tekanan total = jumlah tekanan parsial, syaratnya gas tidak bereaksi.",
      "Tidak, karena tekanan gas A paling rendah.",
      "Ya, tapi cuma untuk gas B dan C karena tekanannya lebih besar.",
      "Tidak, karena hukum Dalton hanya berlaku untuk gas tunggal."
    ],
    "jawaban": 0,
    "penjelasan": "Semua gas ada di wadah tertutup dan tidak bereaksi, jadi syarat Hukum Dalton terpenuhi. Tekanan total = 120 + 200 + 80 = 400 mmHg. Hukum Dalton berlaku untuk semua gas dalam wadah, bukan hanya yang tekanannya besar."
  },
  {
    "soal": "Hukum Proust menyatakan bahwa perbandingan massa unsur dalam senyawa selalu tetap, apapun jumlah senyawa yang terbentuk.Soal:Tiga percobaan menghasilkan senyawa AB dengan hasil sebagai berikut: Percobaan 1: 3 g A dan 9 g BPercobaan 2: 6 g A dan 18 g B Percobaan 3: 9 g A dan 27 g BApakah hasil percobaan ini sesuai dengan Hukum Proust?",
    "pilihan": [
      "Ya, karena perbandingan massa A dan B tetap.",
      "Tidak, karena perbandingan massa A dan B tidak tetap.",
      "Ya, karena hanya perbandingan massa A yang relevan.",
      "Tidak, karena massa A selalu lebih besar."
    ],
    "jawaban": 0,
    "penjelasan": "Perbandingan massa A:B di semua percobaan sama, yaitu 1:3 (3:9, 6:18, 9:27). Ini sesuai Hukum Proust yang menyatakan perbandingan massa unsur dalam senyawa selalu tetap.",
    "sumber": "Chang, R. (2005). Chemistry (9th ed). McGraw-Hill."
  },
  {
    "soal": "Halo, Sahabat Ular Tangga Kimia!Bayangin kamu punya balon gas di ruangan tertutup. Kalau balon itu dipanaskan, apa yang bakal terjadi di dalamnya? Yup — partikel gas bakal bergerak makin cepat karena suhu naik. Tapi kalau balonnya nggak boleh mengembang (volumenya tetap), ke mana energi tambahan itu lari?Tentu saja ke tekanan! Partikel gas makin sering dan makin keras nabrak dinding balon. Nah, itulah inti dari Hukum Gay-Lussac: \"Pada volume tetap, tekanan gas berbanding lurus dengan suhu mutlak (dalam Kelvin).\" Jadi, makin panas → makin tinggi tekanannya Tapi ingat ya:Berlaku kalau volume tidak berubahBerlaku di suhu dalam Kelvin, bukan Celsius Soal, Di sebuah percobaan laboratorium, suhu gas dalam tabung tertutup dinaikkan dari 300 K menjadi 600 K, sementara volumenya tidak berubah.Menurut hasil analisis kamu, apa yang akan terjadi pada tekanan gas tersebut??",
    "pilihan": [
      "Tekanan gas menurun karena partikel jadi jarang bertabrakan.",
      "Tekanan gas tetap karena volumenya tidak berubah.",
      "Tekanan gas meningkat karena suhu naik, partikel makin cepat dan sering nabrak dinding.",
      "Tekanan tidak dipengaruhi suhu, hanya jumlah gas."
    ],
    "jawaban": 2,
    "penjelasan": "Suhu naik dan volume tetap, sehingga partikel gas makin cepat dan sering menabrak dinding, menyebabkan tekanan meningkat. Ini sesuai Hukum Gay-Lussac.",
    "sumber": "Chang, R. (2005). Chemistry (9th ed). McGraw-Hill."
  },
  {
    "soal": "Eh, teman-teman… tau nggak sih?Hukum Lavoisier bilang: “Dalam reaksi kimia yang dilakukan di sistem tertutup, massa zat sebelum dan sesudah reaksi harus tetap sama.”Kalau tiba-tiba massanya beda, bisa jadi:Ada zat yang keluar/masuk sistem (kayak gas yang bocor atau masuk)Atau alat ukurnya nggak pasAtau datanya salah catat✨ Contoh santai:Kalau kamu bakar 10 g kayu di wadah tertutup, total massa sisa arang + gas hasil pembakaran di dalam wadah tetap 10 g juga. Di sebuah eksperimen, massa bahan bakar sebelum dibakar adalah 20 g. Setelah dibakar di wadah tertutup, massa total sisa dan hasil pembakarannya jadi 22 g.Menurut kamu, berdasarkan konsep Hukum Lavoisier, bagaimana analisisnya?",
    "pilihan": [
      "Ya, massa produk lebih besar karena adanya gas yang dilepaskan.",
      "Tidak, karena massa produk lebih besar dari massa reaktan.",
      "Ya, karena massa total tetap.",
      "Tidak, karena massa produk lebih kecil dari massa reaktan."
    ],
    "jawaban": 1,
    "penjelasan": "Hukum Lavoisier menyatakan massa sebelum dan sesudah reaksi harus sama. Jika massa produk lebih besar, berarti ada kesalahan eksperimen atau data yang tidak valid.",
    "sumber": "Chang, R. (2005). Chemistry (9th ed). McGraw-Hill."
  },
  {
    "soal": "Pernah dengar Hukum Proust?Gampang kok — intinya gini:“Dalam senyawa yang sama, perbandingan massa unsur-unsur penyusunnya selalu tetap, berapa pun jumlah senyawanya.”✨ Contoh ringan:Misal, dalam senyawa AB, perbandingan A:B = 1:2.Kalau di percobaan pertama kamu pakai 5 g A dan 10 g B, terus di percobaan kedua pakai 10 g A dan 20 g B…Selama perbandingannya tetap 1:2, berarti hasilnya sesuai sama Hukum Proust. Nah, di sebuah eksperimen:Percobaan 1: 5 g unsur A dicampur 10 g unsur BPercobaan 2: 10 g unsur A dicampur 20 g unsur BCoba kamu perhatikan, apakah percobaan ini sesuai sama Hukum Proust?",
    "pilihan": [
      "Ya, karena perbandingan massa A:B selalu tetap 1:2.",
      "Tidak, karena perbandingan massa tidak konsisten.",
      "Ya, tetapi hanya percobaan pertama yang sesuai.",
      "Tidak, karena massa unsur B lebih banyak."
    ],
    "jawaban": 0,
    "penjelasan": " Perbandingan massa A:B pada kedua percobaan adalah 5:10 = 1:2 dan 10:20 = 1:2, yang berarti perbandingan massa tetap sama dan sesuai dengan Hukum Proust.",
    "sumber": "Chang, R. (2005). Chemistry (9th ed). McGraw-Hill."
  },
  {
    "soal": "Halo, Sobat Kimia!Pernah nggak kamu perhatikan kalau ban sepeda motor yang dipompa saat siang hari terasa lebih keras daripada pagi? Nah, itu salah satu contoh nyata dari Hukum Gay-Lussac.Hukum Gay-Lussac bilang:“Jika gas berada dalam ruang (volume) yang nggak berubah, maka makin tinggi suhu gasnya (dalam Kelvin), makin besar juga tekanannya.”Gampangnya:Suhu naik → Tekanan ikut naik.Suhu turun → Tekanan ikut turun.Tapi yang perlu diingat:Hukum ini cuma berlaku kalau volumenya tetap ya, jangan dibolak-balik!Ada gas di dalam tabung dengan volume tetap. Mula-mula suhunya 300 K, lalu dipanaskan sampai 600 K. Menurutmu, bagaimana perubahan tekanan gas di dalamnya?",
    "pilihan": [
      "Tekanan berkurang karena suhunya naik.",
      "Tekanan tetap saja meski suhu berubah.",
      "Tekanan meningkat dua kali lipat karena suhu naik dua kali lipat.",
      "Tekanan meningkat empat kali lipat karena tekanan berbanding kuadrat dengan suhu."
    ],
    "jawaban": 2,
    "penjelasan": "Karena Hukum Gay-Lussac menyatakan bahwa tekanan gas sebanding lurus dengan suhu mutlaknya, jika volumenya tetap. Jadi, kalau suhu naik 2× (dari 300 K ke 600 K) → tekanannya juga ikut naik 2×.",
    "sumber": "Chang, R. (2005). Chemistry (9th ed). McGraw-Hill."
  },
  {
    "soal": "Yuk kenalan lagi sama Hukum Lavoisier!Hukum ini ngomong begini:“Massa zat sebelum dan sesudah reaksi dalam sistem tertutup itu harus sama.”Atau gampangnya:Massa masuk = Massa keluarKalau jumlah massanya beda, berarti:Ada zat yang belum dihitung (misal gas yang lolos)Atau ada kesalahan saat nimbang atau catat dataJadi, kamu harus kritis kalau dapat hasil kayak gitu ya!Dalam eksperimen pembakaran di laboratorium: Massa bahan bakar sebelum dibakar = 50 g Massa gas oksigen yang dipakai = 80 g Massa produk hasil pembakaran = 120 g Menurut kamu, apakah hasil percobaan ini sudah sesuai sama Hukum Lavoisier?",
    "pilihan": [
      "Ya, karena massa sebelum dan sesudah reaksi sama.",
      "Tidak, karena massa produk lebih kecil dari massa reaktan.",
      "Tidak, karena massa produk lebih besar dari jumlah reaktan.",
      "Ya, karena produk reaksi sudah sesuai eksperimen."
    ],
    "jawaban": 2,
    "penjelasan": "Karena massa sebelum reaksi = 50 g + 80 g = 130 g Sedangkan massa sesudah reaksi = 120 g. Artinya, ada massa yang hilang (mungkin gas yang lolos atau kesalahan pencatatan). Berarti tidak sesuai dengan Hukum Lavoisier.",
    "sumber": "Chang, R. (2005). Chemistry (9th ed). McGraw-Hill."
  },
  {
    "soal": "Yuk kita ingat bareng Hukum Proust!Hukum ini ngomong gini:“Dalam senyawa yang sama, perbandingan massa unsur-unsur penyusunnya selalu tetap, berapapun jumlah senyawa yang terbentuk.”Tapi kalau senyawanya beda — misalnya AB dan AB₂, perbandingan massanya juga beda dong, soalnya jumlah atom unsur B-nya beda.Jadi, di sini kamu harus bisa menganalisis perbandingan massanya berdasarkan rumus senyawa.Ada dua senyawa: Senyawa AB Senyawa AB₂ Keduanya tersusun dari unsur A dan unsur B. Menurut kamu, gimana nih perbandingan massa unsur A di kedua senyawa itu?",
    "pilihan": [
      "Massa unsur A lebih banyak di AB.",
      "Massa unsur A lebih banyak di AB₂.",
      "Perbandingan massa unsur A tetap di kedua senyawa.",
      "Massa unsur A berubah tergantung jumlah atom B di dalam senyawa."
    ],
    "jawaban": 3,
    "penjelasan": "Karena senyawanya beda, yaitu AB dan AB₂. Di AB → 1 unsur A banding 1 unsur B. Di AB₂ → 1 unsur A banding 2 unsur B. Otomatis perbandingan massanya ikut berubah. Jadi, massa unsur A-nya berubah tergantung jumlah atom B di senyawanya. Hukum Proust berlaku kalau senyawanya sama, misalnya AB dibanding AB juga.",
    "sumber": "Chang, R. (2005). Chemistry (9th ed). McGraw-Hill."
  }
]

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
