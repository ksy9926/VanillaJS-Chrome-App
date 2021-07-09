const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);

const link = document.querySelector("a");

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

link.addEventListener("click", handleLinkClick);

localStorage.setItem("email", "ksy9926@naver.com");
localStorage.getItem("email");
localStorage.removeItem("email");

function paintGreetings(username) {
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
