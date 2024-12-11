document.addEventListener("DOMContentLoaded", function () {
  const mockItems = [
    {
      id: 1,
      test_name: "全妝",
      result_type: "春季型",
      test_date: "2023-11-24T10:00:00",
    },
    {
      id: 2,
      test_name: "簡單淡妝",
      result_type: "夏季型",
      test_date: "2023-12-25T14:30:00",
    },
    {
      id: 3,
      test_name: "簡單淡妝",
      result_type: "秋季型",
      test_date: "2024-01-06T09:15:00",
    },
    {
      id: 4,
      test_name: "日常妝",
      result_type: "冬季型",
      test_date: "2024-05-17T16:45:00",
    },
  ];

  let items = [...mockItems];
  let selectedItems = [];
  let sortBy = "newest";

  const itemsContainer = document.getElementById("items-container");
  const noData = document.getElementById("no-data");
  const sortBySelect = document.getElementById("sort-by");
  const removeSelectedButton = document.getElementById("remove-items");

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }
  
  function renderItems() {
    itemsContainer.innerHTML = "";
    if (items.length === 0) {
      noData.style.display = "block";
      return;
    } else {
      noData.style.display = "none";
    }
  
    items.sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.test_date) - new Date(a.test_date);
      } else {
        return new Date(a.test_date) - new Date(b.test_date);
      }
    });
  
    items.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "result-item";
  
      const detailUrl = `../Pages/color_detail.html?season=${encodeURIComponent(item.result_type)}`;

      itemDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <span class="date">${item.test_name} 的測驗結果：${item.result_type}</span>
          <input type="checkbox" class="form-check-input" value="${item.id}">
        </div>
        測驗時間：<br />${formatDate(item.test_date)}
        <a href="${detailUrl}">
          <img src="../Assets/image/next_icon.png" class="icon" alt="查看詳細">
        </a>
      `;
  
      const checkbox = itemDiv.querySelector(".form-check-input");
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          selectedItems.push(item.id);
        } else {
          selectedItems = selectedItems.filter((id) => id !== item.id);
        }
      });
  
      itemsContainer.appendChild(itemDiv);
    });
  }  
  

  function removeSelectedItems() {
    if (selectedItems.length === 0) {
      alert("請選擇要刪除的項目！");
      return;
    }

    const confirmation = confirm("確定要刪除選取的項目嗎？");
    if (!confirmation) return;

    items = items.filter((item) => !selectedItems.includes(item.id));
    selectedItems = [];
    renderItems();
  }

  renderItems();

  sortBySelect.addEventListener("change", function () {
    sortBy = this.value;
    renderItems();
  });

  removeSelectedButton.addEventListener("click", removeSelectedItems);
});
