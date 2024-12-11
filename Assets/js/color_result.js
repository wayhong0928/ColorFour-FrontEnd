document.addEventListener("DOMContentLoaded", () => {
  const resultTitle = document.getElementById("result-title");
  const resultImage = document.getElementById("result-image");
  const descriptionText = document.getElementById("description-text");
  const testNameElement = document.getElementById("test-name");

  // 模拟数据
  const mockResult = {
    testName: "簡單淡妝",
    resultType: "夏季型人",
    imageSrc: "../Assets/image/summer_person.jpg",
    description: [
      "☆ 春季型人具備自然的春天所帶來的美好特質，例如：生機、活潑、明媚。",
      "☆ 他們皮膚明亮，眼神閃耀、光潔，是生活中最具快樂和靚麗的一族。",
      "☆ 適合高明亮、高飽和、生動且清新的色系，如俏皮的春季花卉色調。",
    ],
  };

 // 填充数据到页面
 resultTitle.textContent = `${mockResult.testName} 的測驗結果：${mockResult.resultType}`;
 resultImage.src = mockResult.imageSrc;

 // 将描述用 <br> 拼接
 descriptionText.innerHTML = mockResult.description.join("<br>");

  // 事件处理
  const confirmButton = document.getElementById("confirm-btn");
  const deleteButton = document.getElementById("delete-btn");

  confirmButton.addEventListener("click", () => {
    alert("紀錄已確認");
    window.location.href = "../Pages/color_index.html"; // 返回首页
  });

  deleteButton.addEventListener("click", () => {
    if (confirm("確定要刪除該紀錄嗎？")) {
      alert("紀錄已刪除");
      window.location.href = "../Pages/color_test.html"; // 删除后跳转
    }
  });
});
