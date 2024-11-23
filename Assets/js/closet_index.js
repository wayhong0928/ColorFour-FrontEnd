document.addEventListener("DOMContentLoaded", function () {
  const wardrobeList = document.getElementById("wardrobe-list");
  const categoryFilter = document.getElementById("category");
  const brandFilter = document.getElementById("brand");
  const sortByFilter = document.getElementById("sort-by");

  const items = [
    { id: 1, name: "白T萬歲", category: "t-shirt", brand: "UNIQLO", price: 150, addedDate: "2024/06/01", image: "../img/Uniqlo_white_Tshirt.png", tags: ["春天", "夏天", "休閒", "百搭"], link: "closet_detail.html?id=1" },
    { id: 2, name: "連身裙", category: "dress", brand: "GU", price: 100, addedDate: "2024/06/02", image: "../img/closet_02.png", tags: ["春天", "夏天"], link: "closet_detail.html?id=2" },
    { id: 3, name: "牛仔褲", category: "bottom", brand: "GU", price: 70, addedDate: "2024/06/03", image: "../img/closet_03.png", tags: ["春天", "夏天"], link: "closet_detail.html?id=3" },
    { id: 4, name: "短褲", category: "coat", brand: "UNIQLO", price: 220, addedDate: "2024/06/04", image: "../img/closet_04.png", tags: ["秋天", "冬天"], link: "closet_detail.html?id=4" },
    { id: 5, name: "小白鞋", category: "shoes", brand: "無印", price: 80, addedDate: "2024/06/05", image: "../img/closet_05.png", tags: ["春天", "夏天"], link: "closet_detail.html?id=5" },
    { id: 6, name: "西裝外套", category: "bottom", brand: "GU", price: 120, addedDate: "2024/06/06", image: "../img/closet_06.png", tags: ["春天", "秋天"], link: "closet_detail.html?id=6" },
    { id: 7, name: "墨鏡", category: "accessories", brand: "品牌C", price: 50, addedDate: "2024/06/07", image: "https://picsum.photos/300/200?random=6", tags: ["春天", "夏天"], link: "closet_detail.html?id=7" },
    { id: 8, name: "手錶", category: "accessories", brand: "品牌A", price: 200, addedDate: "2024/06/08", image: "https://picsum.photos/300/200?random=7", tags: ["全年"], link: "closet_detail.html?id=8" },
    { id: 9, name: "風衣", category: "coat", brand: "品牌B", price: 180, addedDate: "2024/06/09", image: "https://picsum.photos/300/200?random=8", tags: ["秋天", "冬天"], link: "closet_detail.html?id=9" },
    { id: 10, name: "連帽衫", category: "top", brand: "品牌C", price: 130, addedDate: "2024/06/10", image: "https://picsum.photos/300/200?random=9", tags: ["秋天", "冬天"], link: "closet_detail.html?id=10" },
    { id: 11, name: "T恤", category: "top", brand: "品牌E", price: 50, addedDate: "2024/06/11", image: "https://picsum.photos/300/200?random=12", tags: ["春天", "夏天"], link: "closet_detail.html?id=11" },
    { id: 12, name: "針織衫", category: "top", brand: "GU", price: 90, addedDate: "2024/06/12", image: "https://picsum.photos/300/200?random=1", tags: ["秋天"], link: "closet_detail.html?id=12" },
    { id: 13, name: "皮帶", category: "accessories", brand: "品牌F", price: 40, addedDate: "2024/06/13", image: "https://picsum.photos/300/200?random=13", tags: ["全年"], link: "closet_detail.html?id=13" },
    { id: 14, name: "運動褲", category: "bottom", brand: "品牌G", price: 60, addedDate: "2024/06/14", image: "https://picsum.photos/300/200?random=14", tags: ["春天", "夏天"], link: "closet_detail.html?id=14" },
    { id: 15, name: "棒球帽", category: "accessories", brand: "品牌H", price: 30, addedDate: "2024/06/15", image: "https://picsum.photos/300/200?random=15", tags: ["春天", "夏天"], link: "closet_detail.html?id=15" },
    { id: 16, name: "羽絨服", category: "coat", brand: "品牌I", price: 250, addedDate: "2024/06/16", image: "https://picsum.photos/300/200?random=16", tags: ["冬天"], link: "closet_detail.html?id=16" },
    { id: 17, name: "連身裙", category: "dress", brand: "品牌J", price: 110, addedDate: "2024/06/17", image: "https://picsum.photos/300/200?random=17", tags: ["春天", "夏天"], link: "closet_detail.html?id=17" },
    { id: 18, name: "短靴", category: "shoes", brand: "品牌K", price: 140, addedDate: "2024/06/18", image: "https://picsum.photos/300/200?random=18", tags: ["秋天", "冬天"], link: "closet_detail.html?id=18" },
    { id: 19, name: "牛仔外套", category: "coat", brand: "品牌L", price: 160, addedDate: "2024/06/19", image: "https://picsum.photos/300/200?random=19", tags: ["秋天", "冬天"], link: "closet_detail.html?id=19" },
    { id: 20, name: "手提包", category: "accessories", brand: "品牌M", price: 90, addedDate: "2024/06/20", image: "https://picsum.photos/300/200?random=20", tags: ["全年"], link: "closet_detail.html?id=20" }
  ];

  function renderItems(filteredItems) {
    wardrobeList.innerHTML = "";
    filteredItems.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "mb-4");
      card.innerHTML = `
        <div class="card mb-3">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title"><a href="${item.link}">${item.name}</a></h5>
          </div>
        </div>
      `;
      wardrobeList.appendChild(card);
    });
  }

  function filterItems() {
    const selectedCategory = categoryFilter.value;
    const selectedBrand = brandFilter.value;
    const sortBy = sortByFilter.value;

    let filteredItems = items.filter(item => {
      const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
      const brandMatch = selectedBrand === "all" || item.brand === selectedBrand;
      return categoryMatch && brandMatch;
    });

    switch (sortBy) {
      case "newest":
        filteredItems.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
        break;
      case "oldest":
        filteredItems.sort((a, b) => new Date(a.addedDate) - new Date(b.addedDate));
        break;
      case "brand":
        filteredItems.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "price-low-high":
        filteredItems.sort((a, b) => a.price - b.price);
        break;
      case "price-high-low":
        filteredItems.sort((a, b) => b.price - a.price);
        break;
    }

    renderItems(filteredItems);
  }

  categoryFilter.addEventListener("change", filterItems);
  brandFilter.addEventListener("change", filterItems);
  sortByFilter.addEventListener("change", filterItems);

  renderItems(items);
});

