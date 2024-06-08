let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// Dropdown menu functionality
document.querySelectorAll(".more-options svg").forEach(svg => {
  svg.addEventListener("click", function () {
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.classList.toggle("show");
  });
});

document.addEventListener("click", function (event) {
  document.querySelectorAll(".dropdown-menu").forEach(menu => {
    if (!event.target.closest(".more-options")) {
      menu.classList.remove("show");
    }
  });
});

// Comment box functionality
document.querySelectorAll('.comment-button').forEach(button => {
  button.addEventListener('click', function () {
    const commentBox = this.parentElement.nextElementSibling;
    commentBox.style.display = commentBox.style.display === 'none' || !commentBox.style.display ? 'block' : 'none';
  });
});

// Sidebar toggle functionality
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("show");
});
