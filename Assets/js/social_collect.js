document.addEventListener("DOMContentLoaded", function () {
  // 模擬從 API 獲取的已收藏的貼文數據
  const collectedPosts = [
    {
      id: 1,
      username: "陳小明",
      avatar: "https://picsum.photos/25?random=1",
      user_id: 1,
      content: "這是第一篇收藏的貼文，分享了我的日常生活。",
      media_url: "https://picsum.photos/600/400?random=1",
      tags: ["生活", "日常", "分享"]
    },
    {
      id: 2,
      username: "李小華",
      avatar: "https://picsum.photos/25?random=2",
      user_id: 2,
      content: "我今天去爬山了，風景真美！",
      media_url: "https://picsum.photos/600/400?random=2",
      tags: ["爬山", "自然", "風景"]
    },
    {
      id: 3,
      username: "王大強",
      avatar: "https://picsum.photos/25?random=3",
      user_id: 3,
      content: "今天吃了超好吃的火鍋，推薦大家來嘗試！",
      media_url: "https://picsum.photos/600/400?random=3",
      tags: ["美食", "火鍋"]
    },
  ];

  const postsListContainer = document.getElementById("postsList");
  const noPostsMessage = document.getElementById("noPostsMessage");

  // 檢查是否有已收藏的貼文
  if (collectedPosts.length > 0) {
    collectedPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post mb-5";
      postElement.innerHTML = `
        <div class="post-header d-flex justify-content-between align-items-center">
          <div class="post-userinfo d-flex align-items-center">
            <img src="${post.avatar}" alt="User Avatar" class="post-avatar rounded-circle" />
            <span class="post-username ms-2">${post.username}</span>
          </div>
          <button class="btn btn-outline-primary" onclick="handleToggleFollow(${post.user_id})">
            追蹤
          </button>
        </div>

        <div class="slider_container1 mt-3">
          <img src="${post.media_url}" alt="Post Media" class="img-fluid" />
        </div>

        <ul class="prot mt-3">
          <li>${post.content}</li>
          <li>標籤：${post.tags.join(", ")}</li>
        </ul>

        <div class="post-actions mt-3 d-flex justify-content-left">
          <button class="like-button btn btn-outline-primary">讚</button>
          <span>20 個讚</span>
          <button class="comment-button btn btn-outline-secondary">留言</button>
          <span>5 則留言</span>
        </div>
      `;
      postsListContainer.appendChild(postElement);
    });
  } else {
    // 如果沒有收藏的貼文，顯示提示訊息
    noPostsMessage.style.display = "block";
  }
});

// 假設的追蹤邏輯
function handleToggleFollow(userId) {
  alert(`已更新追蹤狀態，User ID: ${userId}`);
}

