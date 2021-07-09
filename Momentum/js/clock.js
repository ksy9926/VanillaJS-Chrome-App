const clock = document.querySelector("h2#clock");
// h2, #clock 붙여서 써야함. 띄어쓰면 안됨.
// 자식이 아닌 동등관계기 때문. 자식이면 띄어씀

clock.innerText = "change";

function getClock() {
  const date = new Date();
  // 밖에다가 하면 시간이 안 흐름. 계속 선언해주어야 함.

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
// setTimeout(getClock, 1000);
// 반복이 아닌 한번만 실행할 때. 1초 후 실행 함

console.log("2".padStart(2, "0"));
// (a, b) a칸이 안될 경우, 앞을 b로 채운다.
// padEnd(a, b) 는 a칸이 안될 경우, 끝을 b로 채운다
