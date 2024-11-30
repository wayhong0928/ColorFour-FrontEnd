document.addEventListener("DOMContentLoaded", function () {
  const wardrobeList = document.getElementById("wardrobe-list");
  const categoryFilter = document.getElementById("category");
  const brandFilter = document.getElementById("brand");
  const sortByFilter = document.getElementById("sort-by");
  const favoritesInput = document.getElementById("favorites");
  const deleteItemBtn = document.getElementById("delete-item-btn");

  const items = [
    { name: "白T萬歲", category: "t-shirt", brand: "UNIQLO", price: 150, image: "/Assets/image/Uniqlo_white_Tshirt.png", link: "closet_detail.html?item=t-shirt" },
    { name: "短褲", category: "bottom", brand: "GU", price: 70, image: "/Assets/image/closet_04.png", link: "closet_detail.html?item=bottom" },
    { name: "西裝外套", category: "coat", brand: "UNIQLO", price: 220, image: "/Assets/image/closet_06.png", link: "closet_detail.html?item=coat" },
    { name: "連身裙", category: "dress", brand: "GU", price: 100, image: "/Assets/image/closet_02.png", link: "closet_detail.html?item=dress" },
    {name: "小白鞋", category: "shoes", brand: "無印", price: 80, image: "/Assets/image/closet_05.png", link: "closet_detail.html?item=shoes"},
    {name: "牛仔褲", category: "bottom", brand: "GU", price: 120, image: "/Assets/image/closet_03.png", link: "closet_detail.html?item=bottom"},
    {name: "墨鏡", category: "accessories", brand: "品牌C", price: 50, image: "https://picsum.photos/300/200?random=6", link: "closet_detail.html?item=sunglasses"},
    {name: "手錶", category: "accessories", brand: "品牌A", price: 200, image: "https://picsum.photos/300/200?random=7", link: "closet_detail.html?item=watch"},
    {name: "風衣", category: "coat", brand: "品牌B", price: 180, image: "https://picsum.photos/300/200?random=8", link: "closet_detail.html?item=trench"},
    {name: "連帽衫", category: "top", brand: "品牌C", price: 130, image: "https://picsum.photos/300/200?random=9", link: "closet_detail.html?item=hoodie"},
    {name: "T恤", category: "top", brand: "品牌E", price: 50, image: "https://picsum.photos/300/200?random=12", link: "closet_detail.html?item=tshirt"},
    {name: "針織衫", category: "top", brand: "GU", price: 90, image: "https://picsum.photos/300/200?random=1", link: "closet_detail.html?item=sweater"},
    {name: "皮帶", category: "accessories", brand: "品牌F", price: 40, image: "https://picsum.photos/300/200?random=13", link: "closet_detail.html?item=belt"},
    {name: "運動褲", category: "bottom", brand: "品牌G", price: 60, image: "https://picsum.photos/300/200?random=14", link: "closet_detail.html?item=sportspants"},
    {name: "棒球帽", category: "accessories", brand: "品牌H", price: 30, image: "https://picsum.photos/300/200?random=15", link: "closet_detail.html?item=cap"},
    {name: "羽絨服", category: "coat", brand: "品牌I", price: 250, image: "https://picsum.photos/300/200?random=16", link: "closet_detail.html?item=downjacket"},
    {name: "連身裙", category: "top", brand: "品牌J", price: 110, image: "https://picsum.photos/300/200?random=17", link: "closet_detail.html?item=dress"},
    {name: "短靴", category: "shoes", brand: "品牌K", price: 140, image: "https://picsum.photos/300/200?random=18", link: "closet_detail.html?item=boots"},
    {name: "牛仔外套", category: "coat", brand: "品牌L", price: 160, image: "https://picsum.photos/300/200?random=19", link: "closet_detail.html?item=denimjacket"},
    {name: "手提包", category: "accessories", brand: "品牌M", price: 90, image: "https://picsum.photos/300/200?random=20", link: "closet_detail.html?item=bag"},
  ];

  let selectedItems = []; // 存儲選中的項目

  function renderItems(filteredItems) {
    wardrobeList.innerHTML = ""; // 清空列表
    filteredItems.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
      card.innerHTML = `
        <div class="card mb-3">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">
              <input type="checkbox" class="select-item me-2" data-name="${item.name}" />
              <a href="${item.link}" class="item-link">${item.name}</a>
            </h5>
          </div>
        </div>
      `;
      wardrobeList.appendChild(card);
    });

    // 綁定複選框事件
    document.querySelectorAll(".select-item").forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const itemName = this.dataset.name;
        if (this.checked) {
          selectedItems.push(itemName);
        } else {
          selectedItems = selectedItems.filter((name) => name !== itemName);
        }
        console.log("選中的項目：", selectedItems);
      });
    });
  }

  function filterItems() {
    const selectedCategory = categoryFilter.value;
    const selectedBrand = brandFilter.value;
    const sortBy = sortByFilter.value;
    const favorites = favoritesInput.value;

    let filteredItems = items.filter((item) => {
      const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
      const brandMatch = selectedBrand === "all" || item.brand === selectedBrand;
      const favoriteMatch = favorites === "all" || (favorites === "favorites" && item.isFavorite);
      return categoryMatch && brandMatch && favoriteMatch;
    });

    // 排序
    switch (sortBy) {
      case "price-low-high":
        filteredItems.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredItems.sort((a, b) => b.price - a.price);
        break;
      case "brand":
        filteredItems.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
    }

    renderItems(filteredItems);
  }

  deleteItemBtn.addEventListener("click", function () {
    if (selectedItems.length === 0) {
      alert("請選擇要刪除的項目！");
      return;
    }

    const confirmed = confirm("確定要刪除選中的項目嗎？");
    if (!confirmed) return;

    items = items.filter((item) => !selectedItems.includes(item.name));
    selectedItems = []; // 清空選中的項目
    renderItems(items); // 重新渲染
    alert("已成功刪除選中的項目！");
  });

  categoryFilter.addEventListener("change", filterItems);
  brandFilter.addEventListener("change", filterItems);
  sortByFilter.addEventListener("change", filterItems);
  favoritesInput.addEventListener("change", filterItems);

  renderItems(items); // 初始化渲染
});
