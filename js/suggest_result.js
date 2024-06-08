document.addEventListener("DOMContentLoaded", function () {
  const saveButtons = document.querySelectorAll(".save-button");
  saveButtons.forEach(button => {
    button.addEventListener("click", function () {
      alert("保存成功！");
      // Redirect to the index page
      window.location.href = "suggest_index.html";
    });
  });
});
