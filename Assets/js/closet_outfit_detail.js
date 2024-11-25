// 所有穿搭詳細資料
const outfitDetails = [
  {
    id: 1,
    outfit_image: "/Assets/image/suggest_01.png",
    outfit_name: "正式場合穿搭",
    description: "適合出席正式場合的穿搭。",
    created_at: "2024-11-25T07:51:42",
    items: [
      { id: 1, item_name: "洋裝", brand: "ZARA", color: "黑色" },
      { id: 2, item_name: "靴子", brand: "H&M", color: "白色" },
    ],
  },
  {
    id: 2,
    outfit_image: "/Assets/image/suggest_02.png",
    outfit_name: "戶外活動穿搭",
    description: "適合戶外活動的輕便穿搭。",
    created_at: "2024-11-20T10:00:00",
    items: [
      { id: 1, item_name: "外套", brand: "Uniqlo", color: "藍色" },
      { id: 2, item_name: "洋裝", brand: "H&M", color: "米白色" },
    ],
  },
  {
    id: 3,
    outfit_image: "/Assets/image/suggest_03.png",
    outfit_name: "日常休閒穿搭",
    description: "適合日常使用的簡約風格。",
    created_at: "2024-11-18T15:30:00",
    items: [
      { id: 1, item_name: "T恤", brand: "GU", color: "白色" },
      { id: 2, item_name: "牛仔褲", brand: "Levis", color: "藍色" },
    ],
  },
];


// 根據 URL 中的 id 取得對應的詳細資料
function getOutfitDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const outfitId = parseInt(urlParams.get("id"), 10);
  return outfitDetails.find(outfit => outfit.id === outfitId);
}

// 初始化頁面
function initializePage() {
  const outfit = getOutfitDetails();
  if (!outfit) {
    alert("未找到穿搭資料！");
    return;
  }

  document.getElementById("outfit-image").src = outfit.outfit_image;
  document.getElementById("outfit-name").innerText = outfit.outfit_name;
  document.getElementById("outfit-description").innerText = outfit.description;
  document.getElementById("outfit-date").innerText = `建立日期: ${new Date(outfit.created_at).toLocaleString()}`;

  const itemsList = document.getElementById("outfit-items");
  outfit.items.forEach(item => {
    const li = document.createElement("li");
    li.innerText = `${item.item_name} - ${item.brand} - ${item.color}`;
    itemsList.appendChild(li);
  });
}

// 切換編輯模式
function toggleEdit() {
  const editForm = document.getElementById("edit-form");
  const itemInfo = document.getElementById("item-info");

  if (editForm.style.display === "block") {
    editForm.style.display = "none";
    itemInfo.style.display = "block";
  } else {
    editForm.style.display = "block";
    itemInfo.style.display = "none";

    // 填充編輯表單
    const outfit = getOutfitDetails();
    document.getElementById("edit-name").value = outfit.outfit_name;
    document.getElementById("edit-description").value = outfit.description;
  }
}

// 儲存編輯
function saveEdit() {
  const outfit = getOutfitDetails();
  const newName = document.getElementById("edit-name").value;
  const newDescription = document.getElementById("edit-description").value;

  // 更新資料
  outfit.outfit_name = newName;
  outfit.description = newDescription;

  // 更新頁面
  document.getElementById("outfit-name").innerText = newName;
  document.getElementById("outfit-description").innerText = newDescription;

  toggleEdit();
  alert("編輯成功！");
}

// 刪除穿搭
function deleteOutfit() {
  if (confirm("確定要刪除嗎？")) {
    alert("穿搭已刪除！");
    window.location.href = "/Pages/closet_outfit_index.html"; // 返回穿搭總覽
  }
}

// 返回上一頁
function goBack() {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.href = "/Pages/closet_outfit_index.html";
  }
}

document.addEventListener('DOMContentLoaded', initializePage);