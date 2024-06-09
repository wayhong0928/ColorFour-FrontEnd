document.addEventListener("DOMContentLoaded", function () {
  const saveButtons = document.querySelectorAll(".submit-button");
  saveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("儲存成功！");
      window.location.href = "suggest_index.html";
    });
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const buttons = document.querySelectorAll(".save-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("selected");
      });

      button.closest(".card").classList.add("selected");
    });
  });
});
