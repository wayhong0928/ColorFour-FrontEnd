document.addEventListener("DOMContentLoaded", function () {
    // 假設的篩選和排序功能
    const categorySelect = document.getElementById("category");
    const brandSelect = document.getElementById("brand");
    const sortBySelect = document.getElementById("sort-by");
    const favoritesSelect = document.getElementById("favorites");
  
    categorySelect.addEventListener("change", function () {
      applyFiltersAndSorting();
    });
    brandSelect.addEventListener("change", function () {
      applyFiltersAndSorting();
    });
    sortBySelect.addEventListener("change", function () {
      applyFiltersAndSorting();
    });
    favoritesSelect.addEventListener("change", function () {
      applyFiltersAndSorting();
    });
  
    // 篩選和排序邏輯（示範用）
    function applyFiltersAndSorting() {
      const category = categorySelect.value;
      const brand = brandSelect.value;
      const sortBy = sortBySelect.value;
      const favorites = favoritesSelect.value;
  
      console.log("篩選和排序條件：");
      console.log("分類:", category);
      console.log("品牌:", brand);
      console.log("排序方式:", sortBy);
      console.log("我的最愛:", favorites);
    }
  });
  