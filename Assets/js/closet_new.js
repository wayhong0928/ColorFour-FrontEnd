// 模擬數據
const mainCategories = [
  { id: 1, name: "上衣" },
  { id: 2, name: "褲子" },
  { id: 3, name: "外套" },
];
const subCategories = {
  1: [{ id: 101, name: "短袖" }, { id: 102, name: "長袖" }],
  2: [{ id: 201, name: "牛仔褲" }, { id: 202, name: "短褲" }],
  3: [{ id: 301, name: "羽絨衣" }, { id: 302, name: "西裝外套" }],
};
const shoeCategories = [
  { id: 1, name: "運動鞋" },
  { id: 2, name: "皮鞋" },
];
const shoeSubCategories = {
  1: [{ id: 101, name: "慢跑鞋" }, { id: 102, name: "籃球鞋" }],
  2: [{ id: 201, name: "正裝皮鞋" }, { id: 202, name: "休閒皮鞋" }],
};
const brands = [{ id: 1, name: "ZARA" }, { id: 2, name: "H&M" }, { id: 3, name: "Uniqlo" }];
const colors = [{ id: 1, name: "黑色" }, { id: 2, name: "白色" }, { id: 3, name: "藍色" }];
const occasions = [
  { id: 1, occasion_name: "正式場合" },
  { id: 2, occasion_name: "休閒" },
  { id: 3, occasion_name: "戶外活動" },
];

document.addEventListener("DOMContentLoaded", () => {
  const itemType = document.getElementById("itemType");
  const mainCategorySelect = document.getElementById("mainCategory");
  const subCategorySelect = document.getElementById("subCategory");
  const shoeCategorySelect = document.getElementById("shoeCategory");
  const shoeSubCategorySelect = document.getElementById("shoeSubCategory");
  const occasionButtons = document.getElementById("occasionButtons");
  const occasionTags = document.getElementById("occasionTags");
  const submitButton = document.querySelector(".btn-primary"); // 選擇新增單品按鈕
  const backButton = document.getElementById("backButton");

  // 根據類型顯示服飾或鞋子分類
  itemType.addEventListener("change", () => {
    if (itemType.value === "服飾") {
      populateOptions(mainCategories, mainCategorySelect);
      document.getElementById("clothingCategories").style.display = "block";
      document.getElementById("shoeCategories").style.display = "none";
    } else if (itemType.value === "鞋子") {
      populateOptions(shoeCategories, shoeCategorySelect);
      document.getElementById("clothingCategories").style.display = "none";
      document.getElementById("shoeCategories").style.display = "block";
    } else {
      document.getElementById("clothingCategories").style.display = "none";
      document.getElementById("shoeCategories").style.display = "none";
    }
  });

  // 主類別選擇觸發次類別加載
  mainCategorySelect.addEventListener("change", () => {
    const selectedMain = mainCategorySelect.value;
    populateOptions(subCategories[selectedMain], subCategorySelect);
    subCategorySelect.disabled = false;
  });

  shoeCategorySelect.addEventListener("change", () => {
    const selectedShoe = shoeCategorySelect.value;
    populateOptions(shoeSubCategories[selectedShoe], shoeSubCategorySelect);
    shoeSubCategorySelect.disabled = false;
  });

  // 渲染品牌與顏色選項
  populateOptions(brands, document.getElementById("itemBrand"));
  populateOptions(colors, document.getElementById("itemColor"));

  // 場合按鈕
  occasions.forEach((occasion) => {
    const button = document.createElement("button");
    button.className = "btn btn-outline-secondary m-1";
    button.innerText = occasion.occasion_name;
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const tag = document.createElement("span");
      tag.className = "badge bg-secondary m-1";
      tag.innerText = occasion.occasion_name;
      occasionTags.appendChild(tag);
    });
    occasionButtons.appendChild(button);
  });

  // 新增單品按鈕點擊事件
  submitButton.addEventListener("click", () => {
    // 收集表單數據
    const formData = {
      itemName: document.getElementById("itemName").value,
      itemType: document.getElementById("itemType").value,
      mainCategory: document.getElementById("mainCategory").value || null,
      subCategory: document.getElementById("subCategory").value || null,
      shoeCategory: document.getElementById("shoeCategory").value || null,
      shoeSubCategory: document.getElementById("shoeSubCategory").value || null,
      brand: document.getElementById("itemBrand").value,
      color: document.getElementById("itemColor").value,
      price: document.getElementById("itemPrice").value,
      purchaseDate: document.getElementById("purchaseDate").value,
      purchaseLocation: document.getElementById("purchaseLocation").value,
    };

    console.log("提交的表單數據:", formData);

    // 校驗數據
    if (!formData.itemName || !formData.itemType || !formData.brand || !formData.color || !formData.price) {
      alert("請填寫完整表單！");
      return;
    }

    // 顯示成功消息並跳轉
    alert("新增單品成功！");
    window.location.href = "/Pages/closet_index.html"; // 模擬跳轉到單品列表頁面
  });

  // 返回按鈕
  backButton.addEventListener("click", () => {
    window.history.back(); // 返回上一頁
  });
});

// 填充下拉選項
function populateOptions(data, selectElement) {
  selectElement.innerHTML = `<option value="">請選擇</option>`;
  data.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name || item.occasion_name;
    selectElement.appendChild(option);
  });
}
