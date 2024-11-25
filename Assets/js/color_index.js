// 模擬資料
const mockItems = [
  {
    id: 1,
    test_name: "測驗一",
    result_type: "春季型",
    test_date: "2023-11-24T10:00:00",
    benefits: [
      "臉部變得明亮",
      "可呈現出血色感",
      "看起來彈力有光澤、生氣蓬勃",
    ],
  },
  {
    id: 2,
    test_name: "測驗二",
    result_type: "夏季型",
    test_date: "2023-12-25T14:30:00",
    benefits: [
      "顯白、肌膚看起來變明亮",
      "呈現出透明感",
      "肌膚看起來光滑",
    ],
  },
  {
    id: 3,
    test_name: "測驗三",
    result_type: "秋季型",
    test_date: "2024-01-06T09:15:00",
    benefits: [
      "讓血色感變好",
      "肌膚看起來像陶器般平滑",
      "輪廓看起來更俐落",
    ],
  },
  {
    id: 4,
    test_name: "測驗四",
    result_type: "冬季型",
    test_date: "2024-05-17T16:45:00",
    benefits: [
      "看起來洗練俐落",
      "緊緻輪廓",
      "肌膚看起來有光澤",
    ],
  },
];


document.addEventListener("DOMContentLoaded", function () {
  let items = [...mockItems]; // 複製模擬資料
  let selectedItems = [];
  let sortBy = "newest";

  const itemsContainer = document.getElementById("items-container");
  const noData = document.getElementById("no-data");
  const sortBySelect = document.getElementById("sort-by");
  const removeSelectedButton = document.getElementById("remove-items"); // 修正 ID
  const autoAnalysisButton = document.getElementById("auto-analysis");

  // 格式化日期
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString();
  }

  // 渲染測驗結果項目
  function renderItems() {
    itemsContainer.innerHTML = "";
    if (items.length === 0) {
      noData.style.display = "block";
      return;
    } else {
      noData.style.display = "none";
    }

    // 根據排序方式排序
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

      const benefitsList = item.benefits
        .map((benefit) => `<li>${benefit}</li>`)
        .join("");

      itemDiv.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <span class="date">${item.test_name} (${item.result_type})</span>
          <input type="checkbox" class="form-check-input" value="${item.id}">
        </div>
        測驗時間：<br />${formatDate(item.test_date)}
        <ul>${benefitsList}</ul>
        <a href="color_detail/${item.id}/">
          <img src="/Assets/image/next_icon.png" class="icon" alt="查看詳細">
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

  // 刪除選取的項目
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

  // 初始化渲染
  renderItems();

  // 監聽排序方式的改變
  sortBySelect.addEventListener("change", function () {
    sortBy = this.value;
    renderItems();
  });

  // 綁定刪除按鈕的功能
  removeSelectedButton.addEventListener("click", removeSelectedItems);

  // 自動分析按鈕點擊事件
  autoAnalysisButton.addEventListener("click", function (event) {
    event.preventDefault();
    alert("自動分析功能暫未實現。");
  });
});
