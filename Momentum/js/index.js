const test = document.getElementById("test");

test.innerText = "Change Text";

console.log(test.id);
console.log(test.className);

const hellos = document.getElementsByClassName("hello");
// 해당 클래스명을 가진 모두를 배열로 가져옴
console.log(hellos);

const normal = document.querySelector(".hello h1");
// 조건에 맞는 것 중 가장 위의 하나만 가져옴.
// getElement와 다르게 css selector를 가져옴
// 그러므로 class앞에 . id 앞에 # 붙여줘야함

const normalArray = document.querySelectorAll(".hello h1");
// 조건에 맞는 것 모두를 배열로 가져옴

normal.style.color = "blue";

function handleTitleClick() {
  const currentColor = normal.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  normal.style.color = newColor;
}

normal.addEventListener("click", handleTitleClick);
// normal.onclick = handleTitleClick; 과 같은 코드

console.dir(normal);
// 사용가능한 event들을 볼 수 있음(on으로 시작하는 것들)

function handleMouseEnter() {
  normal.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  normal.innerText = "Mouse is gone!";
}

normal.addEventListener("mouseenter", handleMouseEnter);
normal.addEventListener("mouseleave", handleMouseLeave);

function handleTestClick() {
  const clickedClass = "clicked";
  if (test.classList.contains(clickedClass)) {
    test.classList.remove(clickedClass);
  } else {
    test.classList.add(clickedClass);
  }
}
// 위 기능은 다음과 같다
// function handleTestClick() {
//   test.classList.toggle("clicked");
// }

test.addEventListener("click", handleTestClick);
