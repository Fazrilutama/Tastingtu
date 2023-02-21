function getPilihanComputer() {
  const comp = Math.random();

  if (comp <= 0.34) return "batu";
  if (comp >= 0.34 && comp < 0.67) return "gunting";
  return "kertas";
}



//rules
function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "batu") return comp == "gunting" ? "MENANG!" : "KALAH!";
  if (player == "gunting") return comp == "batu" ? "KALAH!" : "MENANG!";
  if (player == "kertas") return comp == "gunting" ? "KALAH!" : "MENANG!";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["batu", "gunting", "kertas"];
  let i = 0;
  const waktuMulai = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1500) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

//cara querySelektorAll

let scoreComp = document.querySelector('#scoreComp');
let scorePlayer = document.querySelector('#scorePlayer');
let win = 1;
let lose = 1;
const pilihan = document.querySelectorAll("li img");


pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const PilihanComputer = getPilihanComputer();
    const PilihanPlayer = pil.className;
    const hasil = getHasil(PilihanComputer, PilihanPlayer);


    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + PilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      if(hasil == 'MENANG!') 
      return  scorePlayer.innerHTML = win++;
      else if(hasil == 'KALAH!')
      return scoreComp.innerHTML = lose++;

    }, 1500);
  });
});



/*              //cara queryselekto

const pBatu = document.querySelector('.batu');
pBatu.addEventListener('click', function () {
    const PilihanComputer = getPilihanComputer();
    const PilihanPlayer = pBatu.className;
    const hasil = getHasil(PilihanComputer, PilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});

const pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function () {
    const PilihanComputer = getPilihanComputer();
    const PilihanPlayer = pGunting.className;
    const hasil = getHasil(PilihanComputer, PilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});

const pKertas = document.querySelector('.kertas');
pKertas.addEventListener('click', function () {
    const PilihanComputer = getPilihanComputer();
    const PilihanPlayer = pKertas.className;
    const hasil = getHasil(PilihanComputer, PilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + PilihanComputer + '.png');
    
    const info = document.querySelector('.info');
    info.innerHTML = hasil;

});

*/
