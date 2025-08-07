const text =
  "Dear Maelys ,  I wnna Say Something.         Ga ada yang menarik didunia ini, selain bersamamu. iya kamu. kamu tau kenapa bisa gitu? kalo ga tau sini aku kasih tau. Bersama kamu itu, seolah buat dunia ini berhenti. Yang ada di diri kamu itu menarik, buat diri kamu terlihat semakin sempurna. Kamu itu ibarat kan seperti semesta dan duniaku. kenapa bisa dibilang begitu? karena dengan bersama kamu aku mendapatkan sebuah kebahgiaan dan keceriaan dengan didunia ini. Kalo semisalnya gada kamu di hidup ku bisa dibilang hidup ku terasa gelap kembali? karena kebahgiaan yang selama ini aku dapatkan hanya ada di kamu, aku bersyukur atas apa yang sudah di berikan Tuhan ke aku. jangan pernah cape sama aku ya cantik? sejahat apa pun dunia, se sulit apa pun itu masalahnya. I love you baby💝❣️    ....................  .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();