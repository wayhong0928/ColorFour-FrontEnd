document.addEventListener("DOMContentLoaded", function () {
  const favoriteIcon = document.getElementById("favorite-icon");
  const favoriteImage = document.getElementById("favorite-image");
  const editButton = document.getElementById("edit-button");
  const saveEditButton = document.getElementById("save-edit");
  const goBackButton = document.getElementById("go-back");
  const moveToTrashButton = document.getElementById("move-to-trash");
  const restoreButton = document.getElementById("restore-item");
  const deleteButton = document.getElementById("delete-item");

  const itemInfo = document.getElementById("item-info");
  const editForm = document.getElementById("edit-form");

  let isFavorite = false;
  let isEditing = false;
  let item = null; // 用於保存當前項目的數據

  // 模擬數據
  const items = [
    {
      name: "白T萬歲",
      category: "t-shirt",
      brand: "UNIQLO",
      price: 150,
      image: "../Assets/image/Uniqlo_white_Tshirt.png",
      color: "白色",
      tags: ["#休閒", "#上課"],
      addDate: "2024/11/24 下午5:36:51",
      editDate: "2024/11/24 下午5:36:51",
      isFavorite: true,
      isInTrash: false,
    },
    {
      name: "短褲",
      category: "bottom",
      brand: "GU",
      price: 70,
      image: "../Assets/image/closet_04.png",
      color: "藍色",
      tags: ["#夏日", "#運動"],
      addDate: "2024/11/23 下午3:12:34",
      editDate: "2024/11/23 下午4:00:00",
      isFavorite: false,
      isInTrash: false,
    },
    {
      name: "西裝外套",
      category: "coat",
      brand: "UNIQLO",
      price: 220,
      image: "../Assets/image/closet_06.png",
      color: "黑色",
      tags: ["#正式", "#商務"],
      addDate: "2024/11/22 下午2:15:20",
      editDate: "2024/11/22 下午3:30:00",
      isFavorite: true,
      isInTrash: false,
    },
    {
      name: "連身裙",
      category: "dress",
      brand: "GU",
      price: 100,
      image: "../Assets/image/closet_02.png",
      color: "紅色",
      tags: ["#派對", "#春季"],
      addDate: "2024/11/21 下午1:10:10",
      editDate: "2024/11/21 下午2:00:00",
      isFavorite: true,
      isInTrash: false,
    },
    {
      name: "小白鞋",
      category: "shoes",
      brand: "無印",
      price: 80,
      image: "../Assets/image/closet_05.png",
      color: "白色",
      tags: ["#百搭", "#日常"],
      addDate: "2024/11/20 下午6:30:00",
      editDate: "2024/11/20 下午7:00:00",
      isFavorite: true,
      isInTrash: false,
    },
    {
      name: "牛仔褲",
      category: "bottom_jeans",
      brand: "GU",
      price: 120,
      image: "../Assets/image/closet_03.png",
      color: "藍色",
      tags: ["#經典", "#耐用"],
      addDate: "2024/11/19 下午4:45:00",
      editDate: "2024/11/19 下午5:15:00",
      isFavorite: false,
      isInTrash: false,
    },
    {
      name: "墨鏡",
      category: "sunglasses",
      brand: "NET",
      price: 50,
      image: "../Assets/image/closet_07.png",
      color: "黑色",
      tags: ["#夏日", "#旅遊"],
      addDate: "2024/11/18 上午10:20:00",
      editDate: "2024/11/18 上午11:00:00",
      isFavorite: true,
      isInTrash: false,
    },
    {
      name: "針織衫",
      category: "sweater",
      brand: "GAP",
      price: 90,
      image: "../Assets/image/closet_08.png",
      color: "米白色",
      tags: ["#冬季", "#舒適"],
      addDate: "2024/11/13 下午2:30:00",
      editDate: "2024/11/13 下午3:15:00",
      isFavorite: false,
      isInTrash: false,
    },
  ];

  // 從 URL 中獲取參數
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // 根據 URL 中的參數初始化當前項目
  function getItemFromURL() {
    const itemCategory = getQueryParam("item"); // URL 中的 `item` 對應 category
    if (itemCategory) {
      item = items.find((itm) => itm.category === itemCategory);
    }
    if (!item) {
      alert("找不到對應的項目，返回上一頁！");
      window.history.back();
    }
  }

  // 渲染項目資料到頁面
  function renderItem() {
    if (!item) return;

    document.getElementById("item-name").textContent = item.name;
    document.getElementById("item-brand").textContent = `品牌: ${item.brand}`;
    document.getElementById("item-price").textContent = `價格: $${item.price}`;
    document.getElementById("item-category").textContent = `分類: ${item.category}`;
    document.getElementById("item-tags").textContent = `標籤: ${item.tags.join(" ")}`;
    document.getElementById("item-color").textContent = `顏色: ${item.color}`;
    document.getElementById("item-add-date").textContent = `加入日期: ${item.addDate}`;
    document.getElementById("item-edit-date").textContent = `編輯時間: ${item.editDate}`;
    document.getElementById("item-image").src = item.image;

    favoriteImage.src = item.isFavorite ? "../Assets/image/愛了.png" : "../Assets/image/未愛.png";

    moveToTrashButton.style.display = item.isInTrash ? "none" : "inline-block";
    restoreButton.style.display = item.isInTrash ? "inline-block" : "none";
    deleteButton.style.display = item.isInTrash ? "inline-block" : "none";
  }

  // 切換最愛功能
  favoriteIcon.addEventListener("click", function () {
    item.isFavorite = !item.isFavorite;
    favoriteImage.src = item.isFavorite ? "../Assets/image/愛了.png" : "../Assets/image/未愛.png";
    alert(item.isFavorite ? "已加入最愛" : "已移除最愛");
  });

  // 編輯按鈕
  editButton.addEventListener("click", function () {
    isEditing = !isEditing;
    itemInfo.style.display = isEditing ? "none" : "block";
    editForm.style.display = isEditing ? "block" : "none";

    if (isEditing) {
      document.getElementById("edit-item-name").value = item.name;
      document.getElementById("edit-item-brand").value = item.brand;
      document.getElementById("edit-item-price").value = item.price;
    }
  });

  // 保存編輯
  saveEditButton.addEventListener("click", function () {
    item.name = document.getElementById("edit-item-name").value;
    item.brand = document.getElementById("edit-item-brand").value;
    item.price = parseFloat(document.getElementById("edit-item-price").value);

    alert("編輯成功！");
    isEditing = false;
    itemInfo.style.display = "block";
    editForm.style.display = "none";
    renderItem();
  });

  // 返回按鈕
  goBackButton.addEventListener("click", function () {
    window.history.back();
  });

  // 移置垃圾桶
  moveToTrashButton.addEventListener("click", function () {
    item.isInTrash = true;
    alert("已移至垃圾桶！");
    renderItem();
  });

  // 復原項目
  restoreButton.addEventListener("click", function () {
    item.isInTrash = false;
    alert("已復原！");
    renderItem();
  });

  // 永久刪除
  deleteButton.addEventListener("click", function () {
    const confirmDelete = confirm("確定要永久刪除嗎？此操作無法復原！");
    if (confirmDelete) {
      alert("項目已永久刪除！");
      window.history.back();
    }
  });

  // 初始化頁面
  getItemFromURL();
  renderItem();
});
