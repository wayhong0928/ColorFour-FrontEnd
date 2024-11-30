document.addEventListener("DOMContentLoaded", () => {
  // 假資料集
  const recommendations = [
    {
      id: 1,
      recommendation_name: "表演服",
      location: "美術館",
      occasion: "夏天、百搭、休閒",
      skin_tone: "全妝",
      recommendation_image: "/Assets/image/suggest_01.png",
      created_at: "2024-10-30T19:04:07",
    },
    {
      id: 2,
      recommendation_name: "期末報告穿搭",
      location: "演講廳",
      occasion: "夏天、正式、報告",
      skin_tone: "裸妝",
      recommendation_image: "/Assets/image/suggest_03.png",
      created_at: "2024-11-01T10:30:00",
    },
    {
      id: 3,
      recommendation_name: "戶外休閒裝",
      location: "公園",
      occasion: "秋天、休閒、運動",
      skin_tone: "素顏",
      recommendation_image: "/Assets/image/suggest_02.png",
      created_at: "2024-11-05T15:45:00",
    },
  ];

  // 從 URL 取得推薦 ID
  const urlParams = new URLSearchParams(window.location.search);
  const recommendationId = parseInt(urlParams.get("id"), 10);

  // 找到對應的推薦詳情
  const itemInfo = recommendations.find((item) => item.id === recommendationId);

  if (!itemInfo) {
    alert("找不到推薦詳情，請檢查網址！");
    return;
  }

  // DOM 元素
  const itemName = document.getElementById("itemName");
  const itemLocation = document.getElementById("itemLocation");
  const itemOccasion = document.getElementById("itemOccasion");
  const itemSkinTone = document.getElementById("itemSkinTone");
  const itemDate = document.getElementById("itemDate");
  const itemImage = document.getElementById("itemImage");

  const editButton = document.getElementById("editButton");
  const deleteButton = document.getElementById("deleteButton");
  const backButton = document.getElementById("backButton");

  const itemInfoSection = document.getElementById("itemInfo");
  const editForm = document.getElementById("editForm");

  const editName = document.getElementById("editName");
  const editLocation = document.getElementById("editLocation");
  const editOccasion = document.getElementById("editOccasion");
  const editSkinTone = document.getElementById("editSkinTone");

  // 填充數據
  function renderItemDetails() {
    itemName.textContent = itemInfo.recommendation_name;
    itemLocation.textContent = itemInfo.location;
    itemOccasion.textContent = itemInfo.occasion;
    itemSkinTone.textContent = itemInfo.skin_tone;
    itemDate.textContent = new Date(itemInfo.created_at).toLocaleString();
    itemImage.src = itemInfo.recommendation_image;
  }

  renderItemDetails();

  // 編輯模式切換
  editButton.addEventListener("click", () => {
    const isEditing = editForm.style.display === "block";
    itemInfoSection.style.display = isEditing ? "block" : "none";
    editForm.style.display = isEditing ? "none" : "block";

    if (!isEditing) {
      editName.value = itemInfo.recommendation_name;
      editLocation.value = itemInfo.location;
      editOccasion.value = itemInfo.occasion;
      editSkinTone.value = itemInfo.skin_tone;
    }
  });

  // 儲存編輯
  document.getElementById("saveEdit").addEventListener("click", () => {
    itemInfo.recommendation_name = editName.value;
    itemInfo.location = editLocation.value;
    itemInfo.occasion = editOccasion.value;
    itemInfo.skin_tone = editSkinTone.value;
    renderItemDetails();
    editButton.click(); // 退出編輯模式
    alert("推薦已成功更新！");
  });

  // 返回上一頁
  backButton.addEventListener("click", () => {
    history.back();
  });

  // 刪除推薦
  deleteButton.addEventListener("click", () => {
    alert("推薦已刪除！");
    window.location.href = "/Pages/suggest_index.html";
  });
});
