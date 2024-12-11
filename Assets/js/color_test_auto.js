document.addEventListener("DOMContentLoaded", () => {
  const selectedName = document.getElementById("selected-name");
  const imageUpload = document.getElementById("image-upload");
  const imagePreview = document.getElementById("image-preview");
  const previewImg = document.getElementById("preview-img");
  const submitTest = document.getElementById("submit-test");
  const loadingOverlay = document.getElementById("loading-overlay");

  let uploadedImageFile = null;

  imageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadedImageFile = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImg.src = e.target.result;
        imagePreview.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  submitTest.addEventListener("click", async () => {
    if (!selectedName.value || !uploadedImageFile) {
      alert("請填寫所有欄位");
      return;
    }

    loadingOverlay.style.display = "flex";

    const formData = new FormData();
    formData.append("test_name", selectedName.value);
    formData.append("result_type", "Spring");
    formData.append("uploaded_image", uploadedImageFile);

    try {
      // 模擬提交成功的效果，直接跳轉
      alert("測驗成功提交！");
      window.location.href = "../Pages/color_result.html";
    } catch (error) {
      console.error("提交失敗:", error);
      alert(error.message || "提交失敗，請重試！");
    } finally {
      loadingOverlay.style.display = "none";
    }
  });
});
