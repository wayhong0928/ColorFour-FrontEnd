document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.getElementById("title");
  const testDateElement = document.getElementById("test-date");
  const descriptionElement = document.getElementById("description");
  const uploadedImageElement = document.getElementById("uploaded-image");
  const colorRowsElement = document.getElementById("color-rows");
  const goBackButton = document.getElementById("go-back");
  const goToRetestButton = document.getElementById("color_retest");

  // 解析 URL 查詢參數
  const urlParams = new URLSearchParams(window.location.search);
  const season = urlParams.get("season");

  // 模擬數據
  const mockData = {
    春季型: {
      uploadedImage: "/Assets/image/spring_person.jpeg",
      title: "春季型人",
      testDate: "2023-11-24T10:00:00",
      description: [
        "☆ 春季型人具備自然的春天所帶來的美好特質，例如：生機、活潑、明媚。",
        "☆ 他們皮膚明亮，眼神閃耀、光潔，是生活中最具快樂和靚麗的一族，正如大自然春天帶給我們的欣悅一般，春季型人是朝氣而充滿活力的。",
        "☆ 適合高明亮、高飽和、生動且清新的色系，如俏皮的春季花卉色調。",
        "☆ 黃色是首選，帶有淡黃色調的象牙白、橘紅色、略帶黃色的淺藍色等，都是不錯的選擇。",
        "☆ 盡量避免穿黑色，過深過重的顏色會蓋著自己的光芒，也襯托不出春季型人的俏麗和光彩。",
        "☆ 飾品類適合光澤明亮的黃金飾品。",
        "☆ 若搭配了適合的顏色：",
        "✓ 臉部變得明亮",
        "✓ 可呈現出血色感",
        "✓ 看起來彈力有光澤、生氣蓬勃",
      ],
      colorRows: [
        ["#f7d0c3", "#ec7c88", "#f2993f", "#a9cf60", "#a2d7db", "#3a548f", "#e6c88c"],
        ["#f9c498", "#e9636e", "#ffed53", "#80bf4a", "#989dba", "#914a8c", "#d8ae64"],
      ],
    },
    夏季型: {
      uploadedImage: "/Assets/image/summer_person.jpg",
      title: "夏季型人",
      testDate: "2023-12-25T14:30:00",
      description: [
        "☆ 夏季型人就像夏天一樣給人一種溫柔、清新、淡雅的特質。",
        "☆ 他們給人溫婉飄逸、柔和而親切的感覺，如同一潭靜謐的湖水。",
        "☆ 適合低飽和、低彩度、柔和的淺冷色系，如粉藍色、粉紫色。",
        "☆ 也非常適合帶白或帶灰的莫蘭迪色系，涼爽沉靜的顏色最能襯托出夏季型人自身的氣質。",
        "☆ 最好避免過於沉重或太純淨的顏色。",
        "☆ 飾品類適合啞光銀色、鑽石、水晶、寶石、乳白色珍珠。",
        "☆ 若搭配了適合的顏色：",
        "✓ 顯白、肌膚看起來變明亮",
        "✓ 呈現出透明感",
        "✓ 肌膚看起來光滑",
      ],
      colorRows: [
        ["#f4cfd7", "#e73d64", "#c1517f", "#a6d2ae", "#73bce7", "#c5bfe1", "#ab8767"],
        ["#f3b3c3", "#e5314a", "#e46a9b", "#67bd90", "#5082ad", "#913381", "#784f39"],
      ],
    },
    秋季型: {
      uploadedImage: "/Assets/image/autumn_person.jpg",
      title: "秋季型人",
      testDate: "2024-01-06T09:15:00",
      description: [
        "☆ 秋季型人就像秋天一樣穩重、成熟、高雅華貴。",
        "☆ 他們是大地色的代言人，給人深邃知性美的感覺。",
        "☆ 適合低亮度、厚重大氣的暖色調，如棕色、卡其色、橄欖綠。",
        "☆ 應避免穿冷色調及鮮艷的顏色，會讓皮膚暗沉、泛黃。",
        "☆ 飾品類適合啞光的金色、琥珀、瑪瑙、木質的飾品。",
        "☆ 若搭配了適合的顏色：",
        "✓ 讓血色感變好",
        "✓ 肌膚看起來像陶器般平滑",
        "✓ 輪廓看起來更俐落",
      ],
      colorRows: [
        ["#f7c080", "#f4a23e", "#feda0d", "#b7bf36", "#877e43", "#4fb8ae", "#aa7d3c"],
        ["#ed6d50", "#f0851b", "#deae48", "#667d31", "#967029", "#04787e", "#64471f"],
      ],
    },
    冬季型: {
      uploadedImage: "/Assets/image/winter_person.jpg",
      title: "冬季型人",
      testDate: "2024-05-17T16:45:00",
      description: [
        "☆ 冬季型人讓人聯想到冷冽的冬日空氣、純白的雪。",
        "☆ 他們給人酷帥、華麗的氣質，本身的存在感非常強烈。",
        "☆ 適合高彩度的深色系色彩及冰冷色系的純色調。",
        "☆ 純正、飽和的色彩最能襯托出冬季型人的存在感。",
        "☆ 應避免統一或相鄰的色彩搭配。",
        "☆ 飾品類適合閃亮的銀色、白金色、寶石。",
        "☆ 若搭配了適合的顏色：",
        "✓ 看起來洗練俐落",
        "✓ 緊緻輪廓",
        "✓ 肌膚看起來有光澤",
      ],
      colorRows: [
        ["#f19dbf", "#b01f2e", "#09aa5c", "#0ba1de", "#fae3e5", "#dff1f3", "#888888"],
        ["#e76e9b", "#c40d23", "#016d3c", "#00469e", "#fffad4", "#e2d5e7", "#413b3b"],
      ],
    },
  };

  const data = mockData[season];

  if (!data) {
    alert("無法找到對應的色彩分析數據！");
    return;
  }

  // 填充數據到頁面
  uploadedImageElement.src = data.uploadedImage;
  titleElement.textContent = data.title;
  testDateElement.textContent = new Date(data.testDate).toLocaleString();

  data.description.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    descriptionElement.appendChild(p);
  });

  data.colorRows.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((color) => {
      const td = document.createElement("td");
      td.style.backgroundColor = color;
      tr.appendChild(td);
    });
    colorRowsElement.appendChild(tr);
  });

  // 返回按鈕功能
  goBackButton.addEventListener("click", () => {
    window.history.back();
  });

  // 重新測驗按鈕功能
  goToRetestButton.addEventListener("click", () => {
    window.location.href = "/Pages/color_retest.html";
  });
});
