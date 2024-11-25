document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const itemId = urlParams.get('id');

  const items = [
    { id: 1, name: "白T萬歲", category: "t-shirt", brand: "UNIQLO", price: 290, addedDate: "2024/06/01", image: "../img/Uniqlo_white_Tshirt.png", tags: ["春天", "夏天", "休閒", "百搭"], link: "closet_detail.html?id=1" },
    { id: 2, name: "連身裙", category: "dress", brand: "GU", price: 100, addedDate: "2024/06/02", image: "../img/closet_02.png", tags: ["春天", "夏天"], link: "closet_detail.html?id=2" },
    { id: 3, name: "牛仔褲", category: "bottom", brand: "GU", price: 120, addedDate: "2024/06/03", image: "../img/closet_03.png", tags: ["四季"], link: "closet_detail.html?id=3" },
    { id: 4, name: "短褲", category: "bottom", brand: "GU", price: 70, addedDate: "2024/06/04", image: "../img/closet_04.png", tags: ["夏天", "休閒"], link: "closet_detail.html?id=4" },
    { id: 5, name: "小白鞋", category: "shoes", brand: "無印", price: 80, addedDate: "2024/06/05", image: "../img/closet_05.png", tags: ["四季", "百搭"], link: "closet_detail.html?id=5" },
    { id: 6, name: "西裝外套", category: "coat", brand: "UNIQLO", price: 220, addedDate: "2024/06/06", image: "../img/closet_06.png", tags: ["春天", "秋天", "正式"], link: "closet_detail.html?id=6" },
    { id: 7, name: "墨鏡", category: "accessories", brand: "品牌C", price: 50, addedDate: "2024/06/07", image: "https://picsum.photos/300/200?random=6", tags: ["夏天", "戶外"], link: "closet_detail.html?id=7" },
    { id: 8, name: "手錶", category: "accessories", brand: "品牌A", price: 200, addedDate: "2024/06/08", image: "https://picsum.photos/300/200?random=7", tags: ["四季", "正式"], link: "closet_detail.html?id=8" },
    { id: 9, name: "風衣", category: "coat", brand: "品牌B", price: 180, addedDate: "2024/06/09", image: "https://picsum.photos/300/200?random=8", tags: ["春天", "秋天", "時尚"], link: "closet_detail.html?id=9" },
    { id: 10, name: "連帽衫", category: "top", brand: "品牌C", price: 130, addedDate: "2024/06/10", image: "https://picsum.photos/300/200?random=9", tags: ["冬天", "休閒"], link: "closet_detail.html?id=10" },
    { id: 11, name: "T恤", category: "top", brand: "品牌E", price: 50, addedDate: "2024/06/11", image: "https://picsum.photos/300/200?random=12", tags: ["夏天", "休閒"], link: "closet_detail.html?id=11" },
    { id: 12, name: "針織衫", category: "top", brand: "GU", price: 90, addedDate: "2024/06/12", image: "https://picsum.photos/300/200?random=1", tags: ["秋天", "冬天"], link: "closet_detail.html?id=12" },
    { id: 13, name: "皮帶", category: "accessories", brand: "品牌F", price: 40, addedDate: "2024/06/13", image: "https://picsum.photos/300/200?random=13", tags: ["四季", "正式"], link: "closet_detail.html?id=13" },
    { id: 14, name: "運動褲", category: "bottom", brand: "品牌G", price: 60, addedDate: "2024/06/14", image: "https://picsum.photos/300/200?random=14", tags: ["四季", "休閒"], link: "closet_detail.html?id=14" },
    { id: 15, name: "棒球帽", category: "accessories", brand: "品牌H", price: 30, addedDate: "2024/06/15", image: "https://picsum.photos/300/200?random=15", tags: ["四季", "戶外"], link: "closet_detail.html?id=15" },
    { id: 16, name: "羽絨服", category: "coat", brand: "品牌I", price: 250, addedDate: "2024/06/16", image: "https://picsum.photos/300/200?random=16", tags: ["冬天", "保暖"], link: "closet_detail.html?id=16" },
    { id: 17, name: "連身裙", category: "dress", brand: "品牌J", price: 110, addedDate: "2024/06/17", image: "https://picsum.photos/300/200?random=17", tags: ["春天", "夏天", "女性化"], link: "closet_detail.html?id=17" },
    { id: 18, name: "短靴", category: "shoes", brand: "品牌K", price: 140, addedDate: "2024/06/18", image: "https://picsum.photos/300/200?random=18", tags: ["秋天", "冬天"], link: "closet_detail.html?id=18" },
    { id: 19, name: "牛仔外套", category: "coat", brand: "品牌L", price: 160, addedDate: "2024/06/19", image: "https://picsum.photos/300/200?random=19", tags: ["春天", "秋天", "時尚"], link: "closet_detail.html?id=19" },
    { id: 20, name: "手提包", category: "accessories", brand: "品牌M", price: 90, addedDate: "2024/06/20", image: "https://picsum.photos/300/200?random=20", tags: ["四季", "百搭"], link: "closet_detail.html?id=20" }
  ];

  const item = items.find(i => i.id == itemId);

  if (item) {
    document.getElementById("itemImage").src = item.image;
    document.getElementById("itemName").textContent = item.name;
    document.getElementById("itemBrand").textContent = "品牌: " + item.brand;
    document.getElementById("itemPrice").textContent = "價格: $" + item.price;
    document.getElementById("itemCategory").textContent = "種類: #" + item.category;
    document.getElementById("itemTags").textContent = "標籤: " + item.tags.map(tag => "#" + tag).join(" ");
    document.getElementById("itemAddedDate").textContent = "加入日期: " + item.addedDate;
  } else {
    document.getElementById("itemImage").src = "https://via.placeholder.com/150";
    document.getElementById("itemName").textContent = "查無資料";
    document.getElementById("itemBrand").textContent = "品牌: 查無資料";
    document.getElementById("itemPrice").textContent = "價格: 查無資料";
    document.getElementById("itemCategory").textContent = "種類: 查無資料";
    document.getElementById("itemTags").textContent = "標籤: 查無資料";
    document.getElementById("itemAddedDate").textContent = "加入日期: 查無資料";
  }

  document.getElementById("editItemButton").addEventListener("click", function () {
    const newName = prompt("修改商品名稱", item.name);
    const newBrand = prompt("修改品牌", item.brand);
    const newPrice = prompt("修改價格", item.price);

    if (newName && newBrand && newPrice) {
      item.name = newName;
      item.brand = newBrand;
      item.price = newPrice;

      document.getElementById("itemName").textContent = item.name;
      document.getElementById("itemBrand").textContent = "品牌: " + item.brand;
      document.getElementById("itemPrice").textContent = "價格: $" + item.price;

      alert("商品資訊已更新");
    }
  });


  document.getElementById("deleteItemButton").addEventListener("click", function () {
    const userConfirmed = confirm("確定要刪除此單品嗎？");

    if (userConfirmed) {
      moveToTrash(item);
      window.location.href = "closet_index.html";
    }
  });

  function moveToTrash(item) {
    console.log(`Item "${item.name}" has been moved to closet_trash.html.`);
  }
});
