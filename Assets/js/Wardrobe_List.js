document.addEventListener("DOMContentLoaded", function () {
    const selectedItems = new Set(); // 用於存儲選中的項目 ID
  
    // 監聽所有的勾選框
    const checkboxes = document.querySelectorAll(".form-check-input");
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function (event) {
        const itemId = parseInt(event.target.value, 10);
        if (event.target.checked) {
          selectedItems.add(itemId); // 勾選時加入集合
        } else {
          selectedItems.delete(itemId); // 取消勾選時從集合中移除
        }
        console.log("選中的項目 ID:", Array.from(selectedItems));
      });
    });
  });
  