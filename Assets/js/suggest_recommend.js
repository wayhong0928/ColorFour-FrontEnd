document.addEventListener("DOMContentLoaded", () => {
  const formData = {
    title: "展覽裝",
    location: "美術館",
    occasion: ["秋天", "休閒", "旅行"],
    color: "淡妝",
    want: ["長袖T恤", "洋裝"],
    notWant: ["羽絨外套"],
  };

  const occasionOptions = ["春天", "夏天", "秋天", "冬天", "百搭", "休閒", "正式", "報告", "商務", "旅行", "海邊", "山上", "露營"];
  const colorOptions = ["素顏", "淡妝", "全妝"];
  const clothingOptions = [
    "上衣", "長袖T恤", "短袖T恤", "無袖上衣", "長袖襯衫", "短袖襯衫", "帽T/大學T", "針織衫", "毛衣",
    "長裙", "短裙", "連身裙", "吊帶褲", "牛仔褲", "一般長褲", "短褲", "外套", "大衣", "風衣", "皮夾克",
    "羽絨外套", "洋裝", "禮服", "西裝外套", "西裝褲", "西裝裙",
  ];

  function renderOptions(containerId, options, selectedItems, singleSelect = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `btn btn-outline-secondary m-1${selectedItems.includes(option) ? " selected" : ""}`;
      button.textContent = option;
      button.addEventListener("click", () => {
        if (singleSelect) {
          selectedItems.length = 0;
          selectedItems.push(option);
        } else {
          const index = selectedItems.indexOf(option);
          if (index > -1) selectedItems.splice(index, 1);
          else selectedItems.push(option);
        }
        renderAll();
      });
      container.appendChild(button);
    });
  }

  function renderAll() {
    document.getElementById("title").value = formData.title;
    document.getElementById("location").value = formData.location;
    document.getElementById("occasionDisplay").textContent = formData.occasion.join(", ");
    document.getElementById("colorDisplay").textContent = formData.color;
    document.getElementById("wantDisplay").textContent = formData.want.join(", ");
    document.getElementById("notWantDisplay").textContent = formData.notWant.join(", ");

    renderOptions("occasion", occasionOptions, formData.occasion);
    renderOptions("color", colorOptions, [formData.color], true);
    renderOptions("want", clothingOptions, formData.want);
    renderOptions("notWant", clothingOptions, formData.notWant);
  }

  document.getElementById("recommendForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("推薦已提交成功！");
    console.log(formData);
    window.location.href = "/Pages/suggest_results.html";
  });

  document.getElementById("backButton").addEventListener("click", () => {
    history.back();
  });

  renderAll();
});
