// to draw canvas 
 const canvas = document.querySelector("#demo-canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "steelblue";
  ctx.fillRect(20, 20, 150, 100);
  ctx.beginPath();
  ctx.arc(250, 70, 45, 0, Math.PI * 2);
  ctx.fillStyle = "tomato";
  ctx.fill();
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Hello Canvas!", 20, 140);

  //to change resets 

const resetStylesheet = document.querySelector("#reset-stylesheet");

const resetOptions = document.querySelectorAll(
    'input[name="css-reset"]'
);

resetOptions.forEach((option) => {
    option.addEventListener("change", () => {
        if (option.checked) {
            resetStylesheet.href = `resets/${option.value}.css`;
        }
    });
});