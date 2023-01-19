// 2: зробити умову якою покласти мячик
// box.removeEventListener('click', moveBox)

let wrap = document.querySelector(".wrapper");
let ball = document.querySelector(".box");
let click = 0;

function moveBall(e) {
  ball.style.transform = `translate(${e.clientX - 50}px,
         ${e.clientY - 50}px)`;
}

ball.addEventListener("click", () => {
  ++click;
  if (click > 1) {
    wrap.removeEventListener("mousemove", moveBall);
    click = 0;
  } else {
    wrap.addEventListener("mousemove", moveBall);
    ++click;
  }
});
