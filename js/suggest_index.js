document.addEventListener("DOMContentLoaded", function () {
  const recommendationList = document.getElementById("recommendation-list");

  // Example data, replace this with actual data fetching logic
  const recommendations = [
    { id: 1, title: "推薦穿搭1", image: "https://picsum.photos/300/200?random=1", description: "這是推薦穿搭1的描述。" },
    { id: 2, title: "推薦穿搭2", image: "https://picsum.photos/300/200?random=2", description: "這是推薦穿搭2的描述。" },
    { id: 3, title: "推薦穿搭3", image: "https://picsum.photos/300/200?random=3", description: "這是推薦穿搭3的描述。" },
  ];

  recommendations.forEach(rec => {
    const card = document.createElement("div");
    card.className = "card col-4 mb-3";
    card.innerHTML = `
      <img src="${rec.image}" class="card-img-top" alt="${rec.title}">
      <div class="card-body">
        <h5 class="card-title">${rec.title}</h5>
        <p class="card-text">${rec.description}</p>
        <a href="suggest_results.html" class="btn btn-outline-secondary">查看推薦詳情</a>
      </div>
    `;
    recommendationList.appendChild(card);
  });
});