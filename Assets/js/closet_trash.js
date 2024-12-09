document.addEventListener("DOMContentLoaded", () => {
  let items = [
    {name: "牛仔褲", 
    category: "bottom_jeans", 
    brand: "GU", price: 120, 
    image: "/Assets/image/closet_03.png", 
    link: "closet_detail.html?item=bottom_jeans",
    deleted: false,
    },
  ];

  const itemList = document.getElementById("itemList");
  const selectedItems = new Set();

  // Filter items based on selected criteria
  const filterItems = () => {
    const categoryFilter = document.getElementById("category").value;
    const brandFilter = document.getElementById("brand").value;
    const favoriteFilter = document.getElementById("favorites").value;
    const sortedItems = items.filter(item => {
      if (item.deleted) return false; // Skip deleted items
      if (categoryFilter !== "all" && item.category !== categoryFilter) return false;
      if (brandFilter !== "all" && item.brand !== brandFilter) return false;
      return true;
    });

    renderItems(sortedItems);
  };

  // Render items to the page
  const renderItems = (itemsToRender) => {
    itemList.innerHTML = ''; // Clear current list
    itemsToRender.forEach((item, index) => {
      const listItem = document.createElement("div");
      listItem.className = "item-card";
      listItem.innerHTML = `
        <input type="checkbox" class="item-select" id="item-${index}" data-index="${index}" />
        <label for="item-${index}" class="item-label">
          <img src="${item.image}" alt="${item.name}" class="item-image" />
          <div class="item-info">
            <h5><a href="${item.link}">${item.name}</a></h5>
          </div>
        </label>
      `;
      itemList.appendChild(listItem);
    });
  };

  // Initialize items display
  renderItems(items);

  // Handle filter changes
  document.querySelectorAll(".form-select").forEach(selectElement => {
    selectElement.addEventListener("change", filterItems);
  });

  // Restore selected items
  document.getElementById("restoreButton").addEventListener("click", () => {
    if (selectedItems.size === 0) {
      alert("請選擇要復原的項目！");
      return;
    }
    selectedItems.forEach(index => {
      items[index].deleted = true; // Restore deleted items
    });
    alert("復原成功！");
    selectedItems.clear();
    filterItems();
  });

  // Permanently delete selected items
  document.getElementById("deleteButton").addEventListener("click", () => {
    if (selectedItems.size === 0) {
      alert("請選擇要刪除的項目！");
      return;
    }
    selectedItems.forEach(index => {
      items[index].deleted = true; // Mark item as deleted
    });
    alert("項目已永久刪除！");
    selectedItems.clear();
    filterItems();
  });

  // Handle item selection
  document.querySelectorAll(".item-select").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const index = e.target.dataset.index;
      if (e.target.checked) {
        selectedItems.add(index);
      } else {
        selectedItems.delete(index);
      }
    });
  });
});
