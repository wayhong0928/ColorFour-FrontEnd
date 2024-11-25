document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("file-upload");
  const imagePreview = document.getElementById("image-preview");
  const uploadedImage = document.getElementById("uploaded-image");
  const submitButton = document.getElementById("submit-button");

  // 處理文件上傳
  window.handleFileUpload = function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        uploadedImage.src = e.target.result;
        imagePreview.style.display = "block"; // 顯示預覽區域
        submitButton.disabled = false; // 啟用提交按鈕
      };
      reader.readAsDataURL(file);
    } else {
      imagePreview.style.display = "none"; // 隱藏預覽區域
      submitButton.disabled = true; // 禁用提交按鈕
    }
  };

  // 返回功能
  window.goBack = function () {
    window.history.back(); // 返回上一頁
  };

  // 提交照片
  submitButton.addEventListener("click", function () {
    alert("照片已提交！即將跳轉至結果頁面。");
    // 模擬跳轉至結果頁面
    window.location.href = "buy_result.html";
  });
});
