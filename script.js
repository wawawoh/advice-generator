async function getAdvice() {
  try {
    response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("this is an error");
    }
    const data = await response.json();
    p.innerText = data.slip.advice;
    span.innerText = data.slip.id;
  } catch (error) {
    console.log(error);
  }
}
button = document.querySelector("button");
span = document.querySelector("span");
p = document.querySelector("p");
button.addEventListener("click", getAdvice);

getAdvice();
