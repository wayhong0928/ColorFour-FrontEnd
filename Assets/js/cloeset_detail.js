// 從URL取得參數
const urlParams = new URLSearchParams(window.location.search);
const itemParam = urlParams.get('item');

// 模擬資料庫資料
const items = [
  {name: "白T萬歲", category: "t-shirt", brand: "UNIQLO", price: 290, addedDate:"2024/06/01", image: "../img/Uniqlo_white_Tshirt.png", link: "closet_detail.html?item=t-shirt"},
  {name: "連身裙", category: "dress", brand: "GU", price: 100, image: "../img/closet_02.png", link: "closet_detail.html?item=dress"},
  {name: "牛仔褲", category: "bottom", brand: "GU", price: 120, image: "../img/closet_03.png", link: "closet_detail.html?item=bottom"},
  {name: "短褲", category: "bottom", brand: "GU", price: 70, image: "../img/closet_04.png", link: "closet_detail.html?item=bottom"},
  {name: "小白鞋", category: "shoes", brand: "無印", price: 80, image: "../img/closet_05.png", link: "closet_detail.html?item=shoes"},
  {name: "西裝外套", category: "coat", brand: "UNIQLO", price: 220, image: "../img/closet_06.png", link: "closet_detail.html?item=coat"},
  {name: "墨鏡", category: "accessories", brand: "品牌C", price: 50, image: "https://picsum.photos/300/200?random=6", link: "closet_detail.html?item=sunglasses"},
  {name: "手錶", category: "accessories", brand: "品牌A", price: 200, image: "https://picsum.photos/300/200?random=7", link: "closet_detail.html?item=watch"},
  {name: "風衣", category: "coat", brand: "品牌B", price: 180, image: "https://picsum.photos/300/200?random=8", link: "closet_detail.html?item=trench"},
  {name: "連帽衫", category: "top", brand: "品牌C", price: 130, image: "https://picsum.photos/300/200?random=9", link: "closet_detail.html?item=hoodie"},
  {name: "T恤", category: "top", brand: "品牌E", price: 50, image: "https://picsum.photos/300/200?random=12", link: "closet_detail.html?item=tshirt"},
  {name: "針織衫", category: "top", brand: "GU", price: 90, image: "", link: "closet_detail.html?item=sweater"},
  {name: "皮帶", category: "accessories", brand: "品牌F", price: 40, image: "https://picsum.photos/300/200?random=13", link: "closet_detail.html?item=belt"},
  {name: "運動褲", category: "bottom", brand: "品牌G", price: 60, image: "https://picsum.photos/300/200?random=14", link: "closet_detail.html?item=sportspants"},
  {name: "棒球帽", category: "accessories", brand: "品牌H", price: 30, image: "https://picsum.photos/300/200?random=15", link: "closet_detail.html?item=cap"},
  {name: "羽絨服", category: "coat", brand: "品牌I", price: 250, image: "https://picsum.photos/300/200?random=16", link: "closet_detail.html?item=downjacket"},
  {name: "連身裙", category: "top", brand: "品牌J", price: 110, image: "https://picsum.photos/300/200?random=17", link: "closet_detail.html?item=dress"},
  {name: "短靴", category: "shoes", brand: "品牌K", price: 140, image: "https://picsum.photos/300/200?random=18", link: "closet_detail.html?item=boots"},
  {name: "牛仔外套", category: "coat", brand: "品牌L", price: 160, image: "https://picsum.photos/300/200?random=19", link: "closet_detail.html?item=denimjacket"},
  {name: "手提包", category: "accessories", brand: "品牌M", price: 90, image: "https://picsum.photos/300/200?random=20", link: "closet_detail.html?item=bag"},
];
  
// 根據參數找到對應的項目
const item = items.find(i => i.link.includes(itemParam));

// 更新頁面上的元素
if (item) {
  document.getElementById('itemImage').src = item.image;
  document.getElementById('itemName').textContent = item.name;
  document.getElementById('itemBrand').textContent = '品牌: ' + item.brand;
  document.getElementById('itemPrice').textContent = '價格: $' + item.price;
  document.getElementById('itemAddedDate').textContent = '加入日期: ' + item.addedDate;
} else {
  document.getElementById('itemImage').src = "查無資料";
  document.getElementById('itemName').textContent = "查無資料";
  document.getElementById('itemBrand').textContent = '品牌: ' + "查無資料";
  document.getElementById('itemPrice').textContent = '價格: $' + "查無資料";
  document.getElementById('itemAddedDate').textContent = '加入日期: ' + "查無資料";
}
