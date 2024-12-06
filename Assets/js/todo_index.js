document.addEventListener("DOMContentLoaded", function () {
    const schedules = [];
    const schedulesContainer = document.getElementById("schedules-list");
    const modal = document.getElementById("add-schedule-modal");
    const addScheduleBtn = document.getElementById("add-schedule-btn");
    const saveScheduleBtn = document.getElementById("save-schedule-btn");
    const cancelModalBtn = document.getElementById("cancel-modal-btn");
    const deleteSelectedBtn = document.getElementById("delete-selected-btn");
    const dateInput = document.getElementById("schedule-date");
  
    addScheduleBtn.addEventListener("click", function () {
      modal.style.display = "flex";
    });
  
    cancelModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    saveScheduleBtn.addEventListener("click", function () {
      const selectedRecs = Array.from(
        document.querySelectorAll(".form-check-input:checked")
      ).map((input) => input.value);
  
      if (!dateInput.value || selectedRecs.length === 0) {
        alert("請選擇日期和穿搭組合！");
        return;
      }
  
      schedules.push({
        date: dateInput.value,
        recTitles: selectedRecs,
        selected: false,
      });
  
      dateInput.value = "";
      document
        .querySelectorAll(".form-check-input")
        .forEach((input) => (input.checked = false));
      modal.style.display = "none";
      renderSchedules();
    });
  
    deleteSelectedBtn.addEventListener("click", function () {
      schedules.splice(
        0,
        schedules.length,
        ...schedules.filter((schedule) => !schedule.selected)
      );
      renderSchedules();
    });
  
    function renderSchedules() {
      schedulesContainer.innerHTML = "";
      schedules
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .forEach((schedule, index) => {
          const listItem = document.createElement("li");
          listItem.className =
            "list-group-item d-flex justify-content-between align-items-center";
          listItem.innerHTML = `
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                data-index="${index}"
                ${schedule.selected ? "checked" : ""}
              />
              <label class="form-check-label"></label>
            </div>
            <div class="schedule-info d-flex flex-column">
              <span class="schedule-date">日期：${schedule.date}</span>
              <span class="schedule-title">穿搭：${schedule.recTitles.join(", ")}</span>
            </div>
            <button class="btn btn-custom detail-btn" data-index="${index}">詳細資訊</button>
          `;
          schedulesContainer.appendChild(listItem);
  
          const checkbox = listItem.querySelector("input[type='checkbox']");
          checkbox.addEventListener("change", function () {
            schedule.selected = checkbox.checked;
          });
  
          const detailBtn = listItem.querySelector(".detail-btn");
          detailBtn.addEventListener("click", function () {
            alert(
              `詳細資訊\n日期：${schedule.date}\n穿搭：${schedule.recTitles.join(", ")}`
            );
          });
        });
    }
  });
  