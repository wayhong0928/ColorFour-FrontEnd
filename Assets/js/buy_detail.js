document.addEventListener("DOMContentLoaded", function () {
  // 模擬商品數據
  const items = [
    {
      id: 1,
      name: "白T萬歲",
      category: "t-shirt",
      brand: "UNIQLO",
      price: 200,
      image: "../Assets/image/Uniqlo_white_Tshirt.png",
      tags: ["春天", "夏天", "休閒", "百搭"],
    },
    {
      id: 2,
      name: "連身裙",
      category: "dress",
      brand: "GU",
      price: 100,
      image: "../Assets/image/closet_02.png",
      tags: ["春天", "夏天"],
    },
    {
      id: 3,
      name: "牛仔褲",
      category: "bottom",
      brand: "GU",
      price: 70,
      image: "../Assets/image/closet_03.png",
      tags: ["春天", "夏天"],
    },
    {
      id: 4,
      name: "短褲",
      category: "bottom",
      brand: "UNIQLO",
      price: 220,
      image: "../Assets/image/closet_04.png",
      tags: ["秋天", "冬天"],
    },
    {
      id: 5,
      name: "小白鞋",
      category: "shoes",
      brand: "無印",
      price: 80,
      image: "../Assets/image/closet_05.png",
      tags: ["春天", "夏天"],
    },
  ];

  // 模擬從 URL 取得商品 ID
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = parseInt(urlParams.get("id")) || 1; // 默認為 ID 1

  // 根據 ID 找到對應商品
  const item = items.find((item) => item.id === itemId);

  if (item) {
    // 更新商品詳細頁內容
    document.getElementById("item-image").src = item.image;
    document.getElementById("item-name").innerText = item.name;
    document.getElementById("item-brand").innerText = `品牌: ${item.brand}`;
    document.getElementById("item-price").innerText = `價格: $${item.price}`;
    document.getElementById("item-category").innerText = `種類：#${item.category}`;
    document.getElementById("item-tags").innerText = `標籤：${item.tags
      .map((tag) => `#${tag}`)
      .join(" ")}`;
    document.getElementById("item-added-date").innerText = `加入日期: ${item.addedDate}`;
  }
});
// 返回按鈕功能
window.goBack = function () {
  window.history.back(); // 返回上一頁
};