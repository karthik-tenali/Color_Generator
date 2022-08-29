function colorSet() {
  const r = Math.floor(Math.random() * 226);
  const g = Math.floor(Math.random() * 226);
  const b = Math.floor(Math.random() * 226);

  color = `RGB(${r}, ${g}, ${b})`;
}

document.querySelector(".btn").addEventListener("click", () => {
  colorSet();
  document.body.style.backgroundColor = color;
  document.querySelector(".text").innerHTML = color;
  document.querySelector(".btn").style.color = color;
});
