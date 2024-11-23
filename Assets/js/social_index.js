document.addEventListener("DOMContentLoaded", function () {
  const posts = [
    {
      id: 1,
      username: "嗡嗡",
      avatar: "https://picsum.photos/30?random=1",
      content: "今天的穿搭，甜酷風超適合這個季節！",
      media_url: "https://picsum.photos/600/400?random=1",
      location: "戶外",
      created_at: "2024-10-23T16:29:45",
      likes: 20,
      comments: 5,
      tags: ["甜酷風", "秋季穿搭", "夏季型"],
      commentList: [
        { avatar: "https://picsum.photos/25?random=1", username: "留言者1", content: "搭配好時尚！" },
        { avatar: "https://picsum.photos/25?random=2", username: "留言者2", content: "喜歡這種風格！" },
      ],
    },
    {
      id: 2,
      username: "潘美人",
      avatar: "https://picsum.photos/30?random=2",
      content: "剛到達冰島，極光真的美得讓人驚嘆！",
      media_url: "https://picsum.photos/600/400?random=2",
      location: "冰島",
      created_at: "2024-11-01T20:15:30",
      likes: 50,
      comments: 8,
      tags: ["春季型", "旅行", "冬季穿搭"],
      commentList: [
        { avatar: "https://picsum.photos/25?random=3", username: "旅行迷", content: "極光太夢幻了！" },
        { avatar: "https://picsum.photos/25?random=4", username: "攝影愛好者", content: "期待更多照片！" },
      ],
    },
    {
      id: 3,
      username: "秉哥不畫餅",
      avatar: "https://picsum.photos/30?random=3",
      content: "今天嘗試了全新的法式甜點，非常推薦！",
      media_url: "https://picsum.photos/600/400?random=3",
      location: "巴黎",
      created_at: "2024-10-20T14:00:00",
      likes: 35,
      comments: 3,
      tags: ["下午茶", "秋季型", "酷帥風"],
      commentList: [
        { avatar: "https://picsum.photos/25?random=5", username: "甜點控", content: "看起來超好吃！" },
        { avatar: "https://picsum.photos/25?random=6", username: "吃貨日記", content: "在哪家餐廳買的？" },
      ],
    },
  ];

  // 渲染貼文
  const postContainer = document.getElementById("post-container");

  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post mb-5 p-3";
    postElement.innerHTML = `
      <div class="post-header d-flex justify-content-between align-items-center">
        <div class="post-userinfo d-flex align-items-center">
          <img src="${post.avatar}" alt="User Avatar" class="post-avatar rounded-circle" />
          <span class="post-username ms-2">${post.username}</span>
        </div>
        <div class="more-options position-relative">
          <svg
            aria-label="更多選項"
            class="change"
            fill="currentColor"
            height="24"
            role="img"
            viewBox="0 0 24 24"
            width="24"
            onclick="toggleDropdown(this)"
          >
            <title>更多選項</title>
            <circle cx="12" cy="12" r="1.5"></circle>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
          </svg>
          <ul class="dropdown-menu position-absolute" style="display: none;">
            <li><a href="#" onclick="editPost(${post.id})">編輯</a></li>
            <li><a href="#" onclick="deletePost(${post.id})">刪除</a></li>
            <li><a href="#" onclick="sharePost(${post.id})">分享</a></li>
            <li><a href="#" onclick="addToCollection(${post.id})">收藏</a></li>
          </ul>
        </div>
      </div>

      <div class="post-image mt-3">
        <img src="${post.media_url}" alt="Post Media" class="img-fluid w-100 rounded" />
      </div>

      <div class="post-content mt-3">
        <p>${post.content}</p>
        <p>標籤：${post.tags.join(", ")}</p>
      </div>

      <div class="post-time-location mt-2 text-secondary">
        <span class="post-location">地點：${post.location || "未知"}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span class="post-time">時間：${formatDate(post.created_at)}</span>
      </div>

      <div class="post-actions mt-3 d-flex align-items-center">
        <button class="btn btn-outline-primary me-2" onclick="likePost(${post.id})">讚</button>
        <span class="me-3" id="likes-${post.id}">${post.likes} 個讚</span>
        <button class="btn btn-outline-secondary me-2" onclick="toggleCommentBox(this)">留言</button>
        <span>${post.comments} 則留言</span>
      </div>

      <div class="comment-section mt-3" style="display: none;">
        ${post.commentList
          .map(
            (comment) => `
          <div class="d-flex mb-2">
            <img src="${comment.avatar}" alt="Commenter Avatar" class="comment-avatar rounded-circle me-2" />
            <div class="flex-grow-1">
              <span class="fw-bold">${comment.username}</span>
              <p class="comment-text mb-0 text-left">${comment.content}</p>
            </div>
          </div>
        `
          )
          .join("")}
        <textarea class="form-control mb-2" placeholder="請輸入留言..."></textarea>
        <button class="btn btn-primary" onclick="submitComment(${post.id})">提交留言</button>
      </div>
    `;
    postContainer.appendChild(postElement);
  });

  // 格式化日期
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("zh-TW", { hour12: false });
  }

  // 切換下拉選單
  window.toggleDropdown = function (element) {
    const dropdownMenu = element.nextElementSibling;
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  };

  // 操作功能範例
  window.editPost = function (postId) {
    alert(`編輯貼文：${postId}`);
  };

  window.deletePost = function (postId) {
    alert(`刪除貼文：${postId}`);
  };

  window.sharePost = function (postId) {
    alert(`分享貼文：${postId}`);
  };

  window.addToCollection = function (postId) {
    alert(`收藏貼文：${postId}`);
  };

  // 按讚功能
  window.likePost = function (postId) {
    const post = posts.find((p) => p.id === postId);
    post.likes += 1;
    document.getElementById(`likes-${postId}`).innerText = `${post.likes} 個讚`;
  };

  // 切換留言框
  window.toggleCommentBox = function (button) {
    const commentBox = button.parentElement.nextElementSibling;
    commentBox.style.display = commentBox.style.display === "none" || !commentBox.style.display ? "block" : "none";
  };

  // 提交留言
  window.submitComment = function (postId) {
    alert(`提交留言到貼文：${postId}`);
  };
});

