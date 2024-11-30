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
// 更新品牌數據
const brands = [
  { id: 1, name: "ZARA" },
  { id: 2, name: "H&M" },
  { id: 3, name: "UNIQLO" },
  { id: 4, name: "ARMANI" },
  { id: 5, name: "Balenciaga" },
  { id: 6, name: "Burberry" },
  { id: 7, name: "CACO" },
  { id: 8, name: "CHANEL" },
  { id: 9, name: "CK" },
  { id: 10, name: "D+AF" },
  { id: 11, name: "Dior" },
  { id: 12, name: "GAP" },
  { id: 13, name: "GU" },
  { id: 14, name: "GUCCI" },
  { id: 15, name: "LATIV" },
  { id: 16, name: "Miu Miu" },
  { id: 17, name: "Moncler" },
  { id: 18, name: "NET" },
  { id: 19, name: "NIKE" },
  { id: 20, name: "OB殿選" },
  { id: 21, name: "PAZZO" },
  { id: 22, name: "PRADA" },
  { id: 23, name: "QUEEN SHOP" },
];

// 更新顏色數據
const colors = [
  { id: 1, name: "土耳其藍（Turquoise）" },
  { id: 2, name: "栗色（Maroon）" },
  { id: 3, name: "桃色（Peach）" },
  { id: 4, name: "棕（Brown）" },
  { id: 5, name: "橄欖色（Olive）" },
  { id: 6, name: "橙（Orange）" },
  { id: 7, name: "水鴨色（Teal）" },
  { id: 8, name: "洋紅（Magenta）" },
  { id: 9, name: "海軍藍（Navy）" },
  { id: 10, name: "深紅（Crimson）" },
  { id: 11, name: "灰（Gray）" },
  { id: 12, name: "珊瑚色（Coral）" },
  { id: 13, name: "白（White）" },
  { id: 14, name: "米色（Beige）" },
  { id: 15, name: "粉紅（Pink）" },
  { id: 16, name: "紅（Red）" },
  { id: 17, name: "紫（Violet）" },
  { id: 18, name: "紫羅蘭（Purple）" },
  { id: 19, name: "綠（Green）" },
  { id: 20, name: "芥末黃（Mustard）" },
  { id: 21, name: "荷色（Mint）" },
  { id: 22, name: "薰衣草色（Lavender）" },
  { id: 23, name: "藍（Blue）" },
  { id: 24, name: "象牙色（Ivory）" },
  { id: 25, name: "酸橙（Lime）" },
  { id: 26, name: "金色（Gold）" },
  { id: 27, name: "銀色（Silver）" },
  { id: 28, name: "青（Cyan）" },
  { id: 29, name: "靛（Indigo）" },
  { id: 30, name: "鮭魚色（Salmon）" },
  { id: 31, name: "黃（Yellow）" },
  { id: 32, name: "黑（Black）" },
];

const occasions = [
  { id: 1, occasion_name: "約會" },
  { id: 2, occasion_name: "面試" },
  { id: 3, occasion_name: "上課" },
  { id: 4, occasion_name: "海邊度假" },
  { id: 5, occasion_name: "看展覽" },
  { id: 6, occasion_name: "商務聚會" },
  { id: 7, occasion_name: "婚禮" },
  { id: 8, occasion_name: "生日派對" },
  { id: 9, occasion_name: "家庭聚會" },
  { id: 10, occasion_name: "健身房" },
  { id: 11, occasion_name: "戶外活動" },
  { id: 12, occasion_name: "音樂會" },
  { id: 13, occasion_name: "電影夜" },
  { id: 14, occasion_name: "旅行" },
  { id: 15, occasion_name: "野餐" },
  { id: 16, occasion_name: "晚宴" },
  { id: 17, occasion_name: "社交聚會" },
  { id: 18, occasion_name: "運動比賽" },
  { id: 19, occasion_name: "書展" },
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

  // 按鈕點擊事件
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // 檢查該場合是否已經被選中
    const existingTag = Array.from(occasionTags.children).find(
      (tag) => tag.innerText === occasion.occasion_name
    );

    if (existingTag) {
      // 如果已選中，刪除標籤
      existingTag.remove();
    } else {
      // 如果未選中，新增標籤
      const tag = document.createElement("span");
      tag.className = "badge bg-secondary m-1";
      tag.innerText = occasion.occasion_name;

      // 新增刪除標籤的功能
      tag.addEventListener("click", () => tag.remove());

      occasionTags.appendChild(tag);
    }
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

// 開啟相機功能
document.getElementById("openCamera").addEventListener("click", () => {
  const inputPhoto = document.getElementById("photo");
  inputPhoto.click(); // 觸發檔案上傳功能，瀏覽器自動提供相機選項
});