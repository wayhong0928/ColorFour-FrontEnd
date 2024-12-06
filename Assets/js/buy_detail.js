document.addEventListener("DOMContentLoaded", function () {
  const items = [
    {
      id: 1,
      name: "白T萬歲",
      brand: "UNIQLO",
      price: "$200",
      category: "t-shirt",
      tags: ["春天", "夏天", "休閒", "百搭"],
      image: "../Assets/image/Uniqlo_white_Tshirt.png",
    },
    {
      id: 2,
      name: "連身裙",
      brand: "GU",
      price: "$300",
      category: "dress",
      tags: ["春天", "夏天", "野餐", "可愛"],
      image: "../Assets/image/closet_02.png",
    },
    {
      id: 3,
      name: "牛仔褲",
      brand: "GU",
      price: "$550",
      category: "jean",
      tags: ["春天", "夏天", "休閒", "百搭"],
      image: "../Assets/image/closet_03.png",
    },
    {
      id: 4,
      name: "短褲",
      brand: "UNIQLO",
      price: "$250",
      category: "bottom",
      tags: ["秋天", "春天", "夏天","野餐"],
      image: "../Assets/image/closet_04.png",
    },
    {
      id: 5,
      name: "小白鞋",
      brand: "無印",
      price: "$200",
      category: "shoes",
      tags: ["四季", "休閒", "百搭"],
      image: "../Assets/image/closet_05.png",
    },
  ];

  // 獲取 URL 中的商品 ID
  const params = new URLSearchParams(window.location.search);
  const itemId = parseInt(params.get("id"), 10);

  // 查找對應的商品
  const item = items.find((i) => i.id === itemId);

  // 更新頁面內容
  if (item) {
    document.getElementById("item-image").src = item.image;
    document.getElementById("item-name").textContent = item.name;
    document.getElementById("item-brand").textContent = `品牌: ${item.brand}`;
    document.getElementById("item-price").textContent = `價格: ${item.price}`;
    document.getElementById("item-category").textContent = `種類：#${item.category}`;
    document.getElementById("item-tags").textContent = `標籤：${item.tags.map((tag) => `#${tag}`).join(" ")}`;
  } else {
    alert("找不到對應的商品！");
    window.history.back();
  }
});

// 返回功能
function goBack() {
  window.history.back();
}