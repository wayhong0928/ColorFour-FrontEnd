document.addEventListener("DOMContentLoaded", () => {
  const loadingEl = document.getElementById("loading");
  const errorEl = document.getElementById("error");
  const noticesContainer = document.getElementById("notices-container");
  const noticeList = document.getElementById("notice-list");

  // Simulated data fetching function
  function fetchNotices() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, message: "你有一個新的留言", date: "2024-10-02", thumbnail: "path-to-thumbnail1.jpg" },
          { id: 2, message: "你的收藏已更新", date: "2024-09-30", thumbnail: "path-to-thumbnail2.jpg" },
        ]);
      }, 1000);
    });
  }

  // Format date function
  function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  // Render notices
  function renderNotices(notices) {
    notices.forEach((notice) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item d-flex align-items-center";

      const contentDiv = document.createElement("div");
      contentDiv.className = "notice-content";

      const messageP = document.createElement("p");
      messageP.textContent = notice.message;

      const dateSmall = document.createElement("small");
      dateSmall.textContent = formatDate(notice.date);

      contentDiv.appendChild(messageP);
      contentDiv.appendChild(dateSmall);

      listItem.appendChild(contentDiv);
      noticeList.appendChild(listItem);
    });
  }

  // Initialize page
  async function init() {
    try {
      const notices = await fetchNotices();
      loadingEl.style.display = "none";
      if (notices.length > 0) {
        noticesContainer.style.display = "block";
        renderNotices(notices);
      } else {
        errorEl.textContent = "目前沒有通知。";
        errorEl.style.display = "block";
      }
    } catch (err) {
      loadingEl.style.display = "none";
      errorEl.style.display = "block";
    }
  }

  init();
});
