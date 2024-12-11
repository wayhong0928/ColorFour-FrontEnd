document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.getElementById("itemList");

  // 假資料
  const mockItems = [
    { id: 1, item_name: "外套", brand: "Uniqlo", color: "藍色" },
    { id: 2, item_name: "洋裝", brand: "H&M", color: "米白色" },
    { id: 3, item_name: "T恤", brand: "GU", color: "白色" },
    { id: 4, item_name: "牛仔褲", brand: "Levis", color: "藍色" },
  ];

  // 動態生成清單
  mockItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.innerHTML = `
      <div>
        <strong>${item.item_name}</strong> - ${item.brand} (${item.color})
      </div>
      <input type="checkbox" class="form-check-input ms-3" id="item-${item.id}" value="${item.id}" />
    `;
    itemList.appendChild(listItem);
  });

  // 新增穿搭組合按鈕
  document.getElementById("createOutfitButton").addEventListener("click", () => {
    const outfitName = document.getElementById("outfitName").value.trim();
    const selectedItems = Array.from(
      document.querySelectorAll("#itemList input:checked")
    ).map((checkbox) => checkbox.value);

    if (!outfitName) {
      alert("請輸入穿搭名稱！");
      return;
    }

    if (selectedItems.length === 0) {
      alert("請至少選擇一個單品！");
      return;
    }

    if (confirm("是否確認新增此穿搭組合？")) {
      console.log("穿搭名稱:", outfitName);
      console.log("選擇的單品:", selectedItems);

      // 模擬新增後跳轉
      window.location.href = "../Pages/closet_outfit_index.html";
    }
  });

  // 返回按鈕
  document.getElementById("goBackButton").addEventListener("click", () => {
    window.history.back();
  });
});
