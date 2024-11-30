document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    // 問題內容
    {
      title: "問題 1 - 肌膚",
      options: [
        { text: "容易曬紅或是曬傷", value: "A" },
        { text: "容易曬黑，曬後立刻暗沈", value: "B" },
        { text: "先曬紅後轉黑", value: "C" },
      ],
    },
    {
      title: "問題 2 - 瞳色",
      options: [
        { text: "茶棕色", value: "brown", color: "#654321" },
        { text: "古銅色", value: "brown2", color: "#8B4513" },
        { text: "焦棕色", value: "brown3", color: "#5C4033" },
        { text: "黑棕色", value: "brown4", color: "#3D2B1F" },
      ],
    },
    {
      title: "問題 3 - 髮色",
      options: [
        { text: "淺茶色", value: "tea", color: "#D2B48C" },
        { text: "灰黑色", value: "gray", color: "#708090" },
        { text: "黑茶色", value: "btea", color: "#3B2F2F" },
        { text: "黑色", value: "black", color: "#000000" },
      ],
    },
    {
      title: "問題 4 - 彩度（哪種顏色在您身上看起來最亮？）",
      colors: [
        { value: "A", colors: ["#fef8ca", "#cce6cf", "#efdbd9", "#cae4ec"] },
        { value: "B", colors: ["#fdef87", "#a2d193", "#e7a6a1", "#8fccdf"] },
        { value: "C", colors: ["#f4ea62", "#7fba4a", "#e16565", "#45b0e1"] },
        { value: "D", colors: ["#fdec4d", "#26aa39", "#e72828", "#282aff"] },
        { value: "E", colors: ["#fce610", "#10681d", "#dc0000", "#0000ea"] },
      ],
    },
    {
      title: "問題 5 - 選擇一個適合自己的顏色，讓氣色更好，更白",
      options: [
        { text: "", value: "purple", color: "#800080" },
        { text: "", value: "purple2", color: "#9370DB" },
        { text: "", value: "purple3", color: "#DDA0DD" },
        { text: "", value: "purple4", color: "#EE82EE" },
      ],
    },
    {
      title: "問題 6 - 選擇一個適合自己的顏色，讓氣色更好，更白",
      options: [
        { text: "", value: "yellow", color: "#FFFF00" },
        { text: "", value: "yellow2", color: "#FFD700" },
        { text: "", value: "yellow3", color: "#FFA500" },
        { text: "", value: "yellow4", color: "#FF8C00" },
      ],
    },
    {
      title: "問題 7 - 選擇一個適合自己的顏色，讓氣色更好，更白",
      options: [
        { text: "", value: "orange", color: "#FFA07A" },
        { text: "", value: "orange2", color: "#FF7F50" },
        { text: "", value: "orange3", color: "#FF6347" },
        { text: "", value: "orange4", color: "#FF4500" },
      ],
    },
    {
      title: "問題 8 - 選擇一個適合自己的顏色，讓氣色更好，更白",
      options: [
        { text: "", value: "red", color: "#FF0000" },
        { text: "", value: "red2", color: "#DC143C" },
        { text: "", value: "red3", color: "#B22222" },
        { text: "", value: "red4", color: "#8B0000" },
      ],
    },
    // 以下略同，請自行填入剩餘問題
  ];

  const answers = Array(questions.length).fill(null);
  let currentQuestionIndex = 0;

  const questionContainer = document.querySelector(".question-container");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const submitButton = document.getElementById("submit-button");

  function renderQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
      <div class="question active">
        <h2 class="question-title">${question.title}</h2>
        <div class="options">
          ${
            question.options
              ? question.options
                  .map(
                    (option) => `
                    <label class="option-label">
                      <input 
                        type="radio" 
                        name="q${currentQuestionIndex + 1}" 
                        value="${option.value}" 
                        class="option-input"
                        ${answers[currentQuestionIndex] === option.value ? "checked" : ""}
                      />
                      ${option.color ? `<span class="color-block" style="background-color: ${option.color};"></span>` : ""}
                      ${option.text}
                    </label>`
                  )
                  .join("")
              : question.colors
              ? question.colors
                  .map(
                    (colorOption) => `
                    <label class="option-label">
                      <input 
                        type="radio" 
                        name="q${currentQuestionIndex + 1}" 
                        value="${colorOption.value}" 
                        class="option-input"
                        ${answers[currentQuestionIndex] === colorOption.value ? "checked" : ""}
                      />
                      <div class="color-blocks">
                        ${colorOption.colors
                          .map((color) => `<span class="color-block" style="background-color: ${color};"></span>`)
                          .join("")}
                      </div>
                    </label>`
                  )
                  .join("")
              : ""
          }
        </div>
      </div>
    `;
  
    prevButton.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? "inline-block" : "none";
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
  }
  

  function updateAnswer() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex + 1}"]:checked`);
    if (selectedOption) {
      answers[currentQuestionIndex] = selectedOption.value;
    }
  }

  prevButton.addEventListener("click", () => {
    updateAnswer();
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  });

  nextButton.addEventListener("click", () => {
    updateAnswer();
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    }
  });

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    updateAnswer();
    if (answers.includes(null)) {
      alert("所有問題均為必填！");
    } else {
      console.log("提交的答案：", answers);
      window.location.href = "/Pages/color_result.html";
    }
  });

  renderQuestion();
});
