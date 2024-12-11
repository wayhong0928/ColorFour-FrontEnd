document.addEventListener("DOMContentLoaded", () => {
  const recommendations = [
    { id: 1, imgSrc: "../Assets/image/suggest_01.png", altText: "表演裝" },
    { id: 2, imgSrc: "../Assets/image/suggest_03.png", altText: "期末報告穿搭" },
    { id: 3, imgSrc: "../Assets/image/suggest_02.png", altText: "展覽裝" },
  ];
  let selectedIndex = null;

  const container = document.getElementById("recommendations-container");
  const submitButton = document.getElementById("submit-button");

  // Render recommendations
  recommendations.forEach((recommendation, index) => {
    const col = document.createElement("div");
    col.classList.add("col-4");

    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click", () => selectRecommendation(index));

    const img = document.createElement("img");
    img.src = recommendation.imgSrc;
    img.alt = recommendation.altText;
    img.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = recommendation.altText;

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = "選擇";
    button.addEventListener("click", () => selectRecommendation(index));

    cardBody.appendChild(title);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    container.appendChild(col);
  });

  // Select recommendation
  function selectRecommendation(index) {
    if (selectedIndex !== null) {
      const prevCard = container.children[selectedIndex].querySelector(".card");
      prevCard.classList.remove("selected");
    }
    selectedIndex = index;
    const selectedCard = container.children[selectedIndex].querySelector(".card");
    selectedCard.classList.add("selected");
  }

  // Submit selection
  submitButton.addEventListener("click", () => {
    if (selectedIndex === null) {
      alert("請選擇一個推薦方案！");
      return;
    }

    // 假資料提交，不進行實際儲存
    alert("推薦已儲存成功！");
    
    // 直接跳轉到 suggest_index.html 頁面
    window.location.href = "../Pages/suggest_index.html";
  });
});
