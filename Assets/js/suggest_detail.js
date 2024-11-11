document.addEventListener("DOMContentLoaded", function () {
  // 從URL取得參數
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');

  // 模擬資料庫資料
  const recommendations = [
    { id: 1, title: "表演服", image: "../img/suggest_01.png", link:"suggest_detail.html?id=1", description: "夏天、百搭、休閒、全妝", date: "2023-06-01" },
    { id: 2, title: "期末報告穿搭", image: "../img/suggest_03.png", link:"suggest_detail.html?id=2", description: "夏天、正式、報告", date: "2023-06-02" },
    { id: 3, title: "推薦穿搭3", image: "https://picsum.photos/300/200?random=3", link:"suggest_detail.html?id=3", description: "這是推薦穿搭3的描述。", date: "2023-06-03" },
  ];

  // 根據參數找到對應的項目
  const item = recommendations.find(i => i.link.includes(`id=${itemId}`));

  // 更新頁面上的元素
  if (item) {
    document.getElementById('itemImage').src = item.image;
    document.getElementById('itemName').textContent = item.title;
    document.getElementById('itemDescription').textContent = item.description;
    document.getElementById('itemDate').textContent = '推薦日期: ' + item.date;
  } else {
    document.getElementById('itemImage').src = "https://via.placeholder.com/150";
    document.getElementById('itemName').textContent = "查無資料";
    document.getElementById('itemDescription').textContent = "查無資料";
    document.getElementById('itemDate').textContent = "推薦日期: 查無資料";
  }
});
