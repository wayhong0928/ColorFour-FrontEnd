// 從URL取得參數
const urlParams = new URLSearchParams(window.location.search);
const itemParam = urlParams.get('item');

// 模擬資料庫資料
const items = [
  { name: '冬季大衣', category: 'coat', brand: '品牌A', price: 150, image: 'https://picsum.photos/300/200?random=1', link: 'closet_detail.html?item=coat', addedDate: '2024-01-01' },
  { name: '夏季連衣裙', category: 'top', brand: '品牌B', price: 100, image: 'https://picsum.photos/300/200?random=2', link: 'closet_detail.html?item=dress', addedDate: '2024-01-02' },
  { name: '牛仔褲', category: 'bottom', brand: '品牌C', price: 120, image: 'https://picsum.photos/300/200?random=3', link: 'closet_detail.html?item=jeans', addedDate: '2024-01-03' },
  { name: '針織衫', category: 'top', brand: '品牌A', price: 90, image: 'https://picsum.photos/300/200?random=4', link: 'closet_detail.html?item=sweater', addedDate: '2024-01-04' },
  { name: '運動鞋', category: 'shoes', brand: '品牌B', price: 80, image: 'https://picsum.photos/300/200?random=5', link: 'closet_detail.html?item=shoes', addedDate: '2024-01-05' },
  { name: '墨鏡', category: 'accessories', brand: '品牌C', price: 50, image: 'https://picsum.photos/300/200?random=6', link: 'closet_detail.html?item=sunglasses', addedDate: '2024-01-06' },
  { name: '手錶', category: 'accessories', brand: '品牌A', price: 200, image: 'https://picsum.photos/300/200?random=7', link: 'closet_detail.html?item=watch', addedDate: '2024-01-07' },
  { name: '風衣', category: 'coat', brand: '品牌B', price: 180, image: 'https://picsum.photos/300/200?random=8', link: 'closet_detail.html?item=trench', addedDate: '2024-01-08' },
  { name: '連帽衫', category: 'top', brand: '品牌C', price: 130, image: 'https://picsum.photos/300/200?random=9', link: 'closet_detail.html?item=hoodie', addedDate: '2024-01-09' },
  { name: '短褲', category: 'bottom', brand: '品牌A', price: 70, image: 'https://picsum.photos/300/200?random=10', link: 'closet_detail.html?item=shorts', addedDate: '2024-01-10' },
  { name: '西裝外套', category: 'coat', brand: '品牌D', price: 220, image: 'https://picsum.photos/300/200?random=11', link: 'closet_detail.html?item=suit', addedDate: '2024-01-11' },
  { name: 'T恤', category: 'top', brand: '品牌E', price: 50, image: 'https://picsum.photos/300/200?random=12', link: 'closet_detail.html?item=tshirt', addedDate: '2024-01-12' },
  { name: '皮帶', category: 'accessories', brand: '品牌F', price: 40, image: 'https://picsum.photos/300/200?random=13', link: 'closet_detail.html?item=belt', addedDate: '2024-01-13' },
  { name: '運動褲', category: 'bottom', brand: '品牌G', price: 60, image: 'https://picsum.photos/300/200?random=14', link: 'closet_detail.html?item=sportspants', addedDate: '2024-01-14' },
  { name: '棒球帽', category: 'accessories', brand: '品牌H', price: 30, image: 'https://picsum.photos/300/200?random=15', link: 'closet_detail.html?item=cap', addedDate: '2024-01-15' },
  { name: '羽絨服', category: 'coat', brand: '品牌I', price: 250, image: 'https://picsum.photos/300/200?random=16', link: 'closet_detail.html?item=downjacket', addedDate: '2024-01-16' },
  { name: '連身裙', category: 'top', brand: '品牌J', price: 110, image: 'https://picsum.photos/300/200?random=17', link: 'closet_detail.html?item=dress', addedDate: '2024-01-17' },
  { name: '短靴', category: 'shoes', brand: '品牌K', price: 140, image: 'https://picsum.photos/300/200?random=18', link: 'closet_detail.html?item=boots', addedDate: '2024-01-18' },
  { name: '牛仔外套', category: 'coat', brand: '品牌L', price: 160, image: 'https://picsum.photos/300/200?random=19', link: 'closet_detail.html?item=denimjacket', addedDate: '2024-01-19' },
  { name: '手提包', category: 'accessories', brand: '品牌M', price: 90, image: 'https://picsum.photos/300/200?random=20', link: 'closet_detail.html?item=bag', addedDate: '2024-01-20' },
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
