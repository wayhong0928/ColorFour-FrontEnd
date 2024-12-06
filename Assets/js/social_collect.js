document.addEventListener("DOMContentLoaded", function () {
  const collectedPosts = [
    {
      id: 1,
      username: "ㄐㄌ不ㄌㄌ",
      avatar: "../Assets/image/ㄐㄌ.jpg",
      user_id: 1,
      content: "宋江真的好帥，又奶又痞的!!",
      media_url: "../Assets/image/post_05.jpg",
      tags: ["帥哥穿搭", "日常", "分享"],
      isFollowing: true,
    },
    {
      id: 2,
      username: "李小華",
      avatar: "../Assets/image/李小華.jpg",
      user_id: 2,
      content: "我今天去爬山了，風景真美！",
      media_url: "../Assets/image/post_02.jpeg",
      tags: ["爬山", "自然", "風景"],
      isFollowing: false,
    },
    {
      id: 3,
      username: "老大永遠帥",
      avatar: "../Assets/image/老大.jpg",
      user_id: 3,
      content: "今天去看五月天演唱會，超讚！",
      media_url: "../Assets/image/post_06.jpg",
      tags: ["演唱會", "夏季型","型男風"],
      isFollowing: true,
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
          ${
            post.isFollowing !== null
              ? `<button class="btn btn-outline-secondary follow-button me-3" onclick="toggleFollow(${post.id})">
                   ${post.isFollowing ? "已追蹤" : "追蹤"}
                 </button>`
              : ""
          }
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

// 切換追蹤狀態
window.toggleFollow = function (postId) {
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.isFollowing = !post.isFollowing;
    alert(`已${post.isFollowing ? "追蹤" : "取消追蹤"}：${post.username}`);
    renderPosts();
  }
};

