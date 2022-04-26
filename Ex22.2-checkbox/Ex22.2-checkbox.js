const checkbox = document.querySelector("#checkbox");
const divImg = document.querySelector(".divImg");
console.dir(checkbox);

checkbox.addEventListener("click", (e) => {
  const img = document.createElement("img");
  divImg.appendChild(img);
  if (e.target.checked === true) {
    console.log("hello");
    img.src = "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg";
    img.style.height = "300px";
  } else {
    divImg.innerHTML = "";
  }
});
