
const open = document.getElementById("envelope");
const surprise = document.getElementById("surprise");
const letter = document.getElementById("letter");
const letterTitle = document.getElementById("letterTitle");
const balloons = document.getElementById("balloons");
const reveal = document.getElementById("reveal");

let popped = 0;

/* 12 SURPRISES
   1-6 = Photos
   7-12 = Cute memes
*/

const surprises = [
  "https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/photo1.jpg",
  "https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/cute1.jpg",
"https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/photo2.jpeg",
  "https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/cute2.jpg",
"https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/photo3.jpeg",
    "https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/cute3.jpg",
"https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/photo4.jpeg",
  "https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/cute4.jpg",
"https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/photo5.jpeg",
  "https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/cute5.jpg",
  "https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/photo6.jpeg",

  "https://raw.githubusercontent.com/snehashukla20004-create/boyfriend-day/main/cute6.jpg"
];





/* OPEN ENVELOPE */

open.addEventListener("click", function() {

  

  surprise.classList.add("show");

  createBalloons();

  surprise.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

});


/* CREATE 12 BALLOONS */

function createBalloons() {

  balloons.innerHTML = "";

  popped = 0;

  reveal.innerHTML = `
    <div>
      <div class="big">🎀</div>
      <b>Pop a balloon!</b>
    </div>
  `;

  for (let i = 0; i < 12; i++) {

    const balloon = document.createElement("button");

    balloon.className = "balloon";

    balloon.setAttribute(
      "aria-label",
      "Pop balloon"
    );

    balloon.addEventListener("click", function() {

      popBalloon(balloon, i);

    });

    balloons.appendChild(balloon);
  }
}


/* POP BALLOON */

function popBalloon(balloon, index) {

  if (balloon.classList.contains("pop")) {
    return;
  }

  balloon.classList.add("pop");

  popped++;

  const imageName = surprises[index];

  reveal.innerHTML = `
    <div>

      <img
        src="${imageName}"
        alt="Our cute memory"
        style="
          width: 100%;
          max-width: 420px;
          max-height: 350px;
          object-fit: contain;
          border-radius: 18px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        "
      >

      <br><br>

      <b>
        A little surprise just for you 💗
      </b>

    </div>
  `;


  /* ALL 12 POPPED */

  if (popped === 12) {

    setTimeout(function() {

      reveal.innerHTML = `
        <div>
          <div class="big">💌✨</div>

          <b>
            You found all my little surprises! 🥹💗
          </b>

          <br><br>

          Now read your letter ↓
        </div>
      `;

      letter.classList.add("show");

      setTimeout(function() {

        letter.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }, 700);

    }, 700);

  }

}