document.addEventListener("DOMContentLoaded", function () {
  const postContainer = document.getElementById("post-container");

  // Example data, replace this with actual data fetching logic
  const posts = [
    {
      username: "嗡嗡嗡",
      description: "今日OOTD，鄰家妹妹vs帥氣姐姐，更喜歡哪個~~😍",
      hashtags: "#OOTD #帥氣 #甜美",
      location: "中原大學",
      time: "2024-04-18",
      image: "../img/post_01.jpg",
      likes: 12,
      comments: 3,
    },
    {
      username: "哇哈哈",
      description: "今天天氣真好，出門散步拍了些美照。",
      hashtags: "#散步 #美照 #好心情",
      location: "台北市",
      time: "2024-04-17",
      image: "https://picsum.photos/300/200?random=1",
      likes: 8,
      comments: 5,
    },
    {
      username: "小明",
      description: "剛完成了一幅新畫作，分享給大家看看。",
      hashtags: "#畫作 #藝術 #分享",
      location: "高雄市",
      time: "2024-04-16",
      image: "https://picsum.photos/300/200?random=2",
      likes: 15,
      comments: 10,
    },
  ];

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post mb-5";
    postElement.innerHTML = `
      <div class="post-header d-flex justify-content-between align-items-center">
        <div class="post-userinfo d-flex align-items-center">
          <img src="https://picsum.photos/25" alt="User Avatar" class="post-avatar rounded-circle" />
          <span class="post-username ms-2">${post.username}</span>
        </div>
        <div class="more-options position-relative">
          <svg aria-label="更多選項" class="change" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
            <title>更多選項</title>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
          <ul class="dropdown-menu position-absolute">
            <li><a href="#">編輯</a></li>
            <li><a href="#">刪除</a></li>
            <li><a href="#">分享</a></li>
          </ul>
        </div>
      </div>
      <div class="slider_container1 mt-3">
        <div><img src="${post.image}" class="l_photo img-fluid" /></div>
      </div>
      <ul class="prot mt-3">
        <li>${post.description}</li>
        <li>${post.hashtags}</li>
      </ul>
      <div class="post-time-location d-flex justify-content-left mt-2">
        <span class="post-location">地點：${post.location}</span>
        <span> &nbsp;&nbsp;&nbsp;&nbsp; </span>
        <span class="post-time">時間：${post.time}</span>
      </div>
      <div class="post-actions mt-3 d-flex justify-content-left">
        <button class="like-button btn btn-outline-primary">讚</button>
        <span>${post.likes}</span>
        <button class="comment-button btn btn-outline-secondary">留言</button>
        <span>${post.comments}</span>
      </div>
      <div class="comment-section mt-3">
        <textarea class="form-control mb-2" placeholder="請輸入留言..."></textarea>
        <button class="btn btn-primary">提交留言</button>
      </div>
    `;
    postContainer.appendChild(postElement);
  });

  let counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);

  // Dropdown menu functionality
  document.querySelectorAll(".more-options svg").forEach((svg) => {
    svg.addEventListener("click", function () {
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle("show");
    });
  });

  document.addEventListener("click", function (event) {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      if (!event.target.closest(".more-options")) {
        menu.classList.remove("show");
      }
    });
  });

  // Comment box functionality
  document.querySelectorAll(".comment-button").forEach((button) => {
    button.addEventListener("click", function () {
      const commentBox = this.parentElement.nextElementSibling;
      commentBox.style.display = commentBox.style.display === "none" || !commentBox.style.display ? "block" : "none";
    });
  });

  // Sidebar toggle functionality
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
  });
});
