let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// Dropdown menu functionality
document.querySelector(".more-options svg").addEventListener("click", function () {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  if (!event.target.closest(".more-options")) {
    dropdownMenu.classList.remove("show");
  }
});
// 獲取右側邊欄和右側邊欄圖示的元素
const sidebar = document.querySelector(".sidebar");
const sidebarToggle = document.getElementById("sidebar-toggle");

// 監聽右側邊欄圖示的點擊事件
sidebarToggle.addEventListener("click", function () {
  // 切換右側邊欄的顯示狀態
  sidebar.classList.toggle("show");
});