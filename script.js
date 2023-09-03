let buttonOne = document.querySelector(".btn-1");
let buttonTwo = document.querySelector(".btn-2");
let buttonThree = document.querySelector(".btn-3");
let h1Tag = document.querySelector("h1");
let h3Tag = document.querySelector("h3");
let h5Tag = document.querySelector("h5");
let clickCount = 0;

buttonOne.addEventListener("click", () => {
  if (clickCount % 2 == 0) {
    h1Tag.innerHTML =
      "Hello my friend! Thank you for seeing my first HTML website :)";
  } else {
    h1Tag.innerHTML = `Greeting me ${clickCount - 1} times is enough haha.`;
  }

  clickCount++;
});
