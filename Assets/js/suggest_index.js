document.addEventListener("DOMContentLoaded", () => {
  const recommendationsList = document.getElementById("recommendation-list");
  const deleteButton = document.getElementById("deleteButton");

  const defaultImage = "path_to_default_image.jpg"; // 替換為默認圖片路徑

  // 假資料
  const recommendations = [
    { id: 1, title: "表演服", image: "/Assets/image/suggest_01.png", link: "suggest_detail.html?id=1", date: "2023-06-01" },
    { id: 2, title: "期末報告穿搭", image: "/Assets/image/suggest_03.png", link: "suggest_detail.html?id=2", date: "2023-06-02" },
    { id: 3, title: "推薦穿搭3", image: "/Assets/image/suggest_02.png", link: "suggest_detail.html?id=3", date: "2023-06-03" },
  ];

  // 渲染推薦列表
  function renderRecommendations(recommendations) {
    recommendationsList.innerHTML = ""; // 清空列表
    recommendations.forEach((rec) => {
      const card = document.createElement("div");
      card.className = "card col-4 mb-3";
      card.innerHTML = `
        <img src="${rec.image || defaultImage}" class="card-img-top" alt="${rec.title}" onerror="this.src='${defaultImage}'" />
        <div class="card-body">
          <h5 class="card-title">${rec.title}</h5>
          <p class="card-text">
            <small class="text-muted">推薦日期: ${new Date(rec.date).toLocaleString()}</small>
          </p>
          <a href="${rec.link}" class="btn btn-outline-secondary mt-2">查看推薦詳情</a>
        </div>
        <div class="form-check check-box-top-right">
          <input type="checkbox" class="form-check-input" value="${rec.id}" />
          <label class="form-check-label"></label>
        </div>
      `;
      recommendationsList.appendChild(card);
    });
  }

  // 刪除選中的推薦項目
  async function deleteItems() {
    const selectedItems = Array.from(document.querySelectorAll("#recommendation-list input:checked")).map(
      (input) => input.value
    );

    if (selectedItems.length === 0) {
      alert("請選擇至少一個推薦項目進行刪除");
      return;
    }

    try {
      // 假設的刪除邏輯，您可以根據實際需求修改
      alert(`刪除的推薦項目 ID: ${selectedItems.join(", ")}`);
      renderRecommendations(recommendations.filter((rec) => !selectedItems.includes(rec.id.toString())));
      alert("選中的項目已成功刪除");
    } catch (error) {
      console.error("刪除失敗：", error);
      alert("刪除失敗，請稍後再試。");
    }
  }

  // 綁定刪除按鈕事件
  deleteButton.addEventListener("click", deleteItems);

  // 初始加載推薦列表
  renderRecommendations(recommendations);
});
