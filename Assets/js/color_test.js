document.addEventListener("DOMContentLoaded", () => {
  const imageUploadInput = document.getElementById("image-upload");
  const seasonsContainer = document.getElementById("seasons-container");
  const seasonsRow = document.getElementById("seasons");
  const questionnaireContainer = document.getElementById("questionnaire-container");

  const seasons = [
    { image: "/Assets/image/color_season_1.png" },
    { image: "/Assets/image/color_season_2.png" },
    { image: "/Assets/image/color_season_3.png" },
    { image: "/Assets/image/color_season_4.png" },
  ];

  const questions = [
    { title: "嘴唇較無血色", options: ["是", "否"] },
    { title: "比起黑髮更適合棕色或是淺髮", options: ["是", "否"] },
    { title: "臉部有紅潤感", options: ["是", "否"] },
    { title: "眼珠偏淺棕色，眼神柔和", options: ["是", "否"] },
  ];

  let uploadedImageURL = null;

  // 图片上传逻辑
  imageUploadInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        uploadedImageURL = e.target.result;
        renderSeasons();
        seasonsContainer.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  });

  // 渲染四季选项
  function renderSeasons() {
    seasonsRow.innerHTML = "";
    seasons.forEach((season, index) => {
      const seasonDiv = document.createElement("div");
      seasonDiv.className = "season";

      seasonDiv.innerHTML = `
        <div class="card">
          <img src="${season.image}" alt="Season Image">
          <div class="uploaded-image-container">
            <img src="${uploadedImageURL}" alt="Uploaded Image">
          </div>
          <div class="card-body">
            <button class="btn-select" data-index="${index}">選擇</button>
          </div>
        </div>
      `;

      seasonDiv.querySelector(".btn-select").addEventListener("click", () => {
        questionnaireContainer.style.display = "block";
      });

      seasonsRow.appendChild(seasonDiv);
    });
  }

  // 渲染问卷
  function renderQuestions() {
    const questionsContainer = document.getElementById("questions");
    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question-container";

      questionDiv.innerHTML = `
        <h2 class="question-title">${question.title}</h2>
        <div class="options">
          ${question.options
            .map(
              (option) =>
                `<label class="option-label">
                  <input type="radio" name="q${index}" value="${option}">
                  ${option}
                </label>`
            )
            .join("")}
        </div>
      `;

      questionsContainer.appendChild(questionDiv);
    });
  }

  renderQuestions();
});
