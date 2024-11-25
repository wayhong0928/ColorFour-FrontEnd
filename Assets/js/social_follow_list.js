// 假設的用戶數據（名稱改為中文，並且所有的追蹤狀態都設為 true）
const followingList = [
  { id: 1, username: "容易成美女", isFollowing: true, avatar: "https://picsum.photos/40?random=1" },
  { id: 2, username: "李小華", isFollowing: true, avatar: "https://picsum.photos/40?random=2" },
  { id: 3, username: "ㄐㄌ不ㄌㄌ", isFollowing: true, avatar: "https://picsum.photos/40?random=3" },
  { id: 4, username: "老大永遠帥", isFollowing: true, avatar: "https://picsum.photos/40?random=4" },
  { id: 5, username: "雲朵飄飄", isFollowing: true, avatar: "https://picsum.photos/40?random=5" },
  { id: 6, username: "哒嘟又生氣", isFollowing: true, avatar: "https://picsum.photos/40?random=6" },
  { id: 7, username: "小林退熱貼", isFollowing: true, avatar: "https://picsum.photos/40?random=7" },
  { id: 8, username: "芊芊哭汪汪", isFollowing: true, avatar: "https://picsum.photos/40?random=8" },
  { id: 9, username: "秉哥不畫餅", isFollowing: true, avatar: "https://picsum.photos/40?random=9" },
  { id: 10, username: "嗡嗡不是蚊", isFollowing: true, avatar: "https://picsum.photos/40?random=10" }
];

document.addEventListener("DOMContentLoaded", function () {
  const followListContainer = document.getElementById("followList");

  followingList.forEach((follower) => {
    const followerRow = document.createElement("div");
    followerRow.className = "follower-row";
    followerRow.innerHTML = `
      <div class="follower-info">
        <img src="${follower.avatar}" alt="User Avatar" class="post-avatar rounded-circle" />
        <a href="user_profile.html?id=${follower.id}" class="follower-name">${follower.username}</a>
        <div class="follower-actions">
          <button class="btn btn-outline-secondary m-1 follow-button" onclick="toggleFollow(${follower.id})">
            ${follower.isFollowing ? "已追蹤" : "追蹤"}
          </button>
          <button class="btn btn-outline-danger m-1" onclick="unfollow(${follower.id})">&times;</button>
        </div>
      </div>
    `;
    followListContainer.appendChild(followerRow);
  });
});

// 假設的切換追蹤狀態
function toggleFollow(userId) {
  const follower = followingList.find((user) => user.id === userId);
  if (follower) {
    follower.isFollowing = !follower.isFollowing;
    alert(`追蹤狀態已更新：${follower.username} ${follower.isFollowing ? "已追蹤" : "取消追蹤"}`);
    renderFollowList();
  }
}

// 假設的取消追蹤
function unfollow(userId) {
  const follower = followingList.find((user) => user.id === userId);
  if (follower) {
    followingList.splice(followingList.indexOf(follower), 1);
    alert(`${follower.username} 已取消追蹤`);
    renderFollowList();
  }
}

// 渲染更新後的追蹤名單
function renderFollowList() {
  const followListContainer = document.getElementById("followList");
  followListContainer.innerHTML = "";
  followingList.forEach((follower) => {
    const followerRow = document.createElement("div");
    followerRow.className = "follower-row";
    followerRow.innerHTML = `
      <div class="follower-info">
        <img src="${follower.avatar}" alt="User Avatar" class="post-avatar rounded-circle" />
        <a href="user_profile.html?id=${follower.id}" class="follower-name">${follower.username}</a>
        <div class="follower-actions">
          <button class="btn btn-outline-secondary m-1 follow-button" onclick="toggleFollow(${follower.id})">
            ${follower.isFollowing ? "已追蹤" : "追蹤"}
          </button>
          <button class="btn btn-outline-danger m-1" onclick="unfollow(${follower.id})">&times;</button>
        </div>
      </div>
    `;
    followListContainer.appendChild(followerRow);
  });
}
