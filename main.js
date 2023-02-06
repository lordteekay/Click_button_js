const error = document.querySelector("#error");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    error.textContent = "Sorry something went wrong,please try again!";
    error.style.color = "red";
})