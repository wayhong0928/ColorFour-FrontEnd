// 定義為全域函數
function shareProfile() {
  alert("分享功能尚未實現");
}

function editProfile() {
  window.location.href = "/Pages/user_setting.html"; // 導向編輯頁面
}

function goToUserNotice() {
  window.location.href = "/Pages/user_notice.html"; // 導向編輯頁面
}

document.addEventListener("DOMContentLoaded", () => {
  const user = {
    first_name: "Emma",
    username: "EmmaStyle",
    bio: "熱愛穿搭與旅行，喜歡記錄生活中的小美好。",
    gender: "女性",
    posts_count: 25,
    followers_count: 1200,
    following_count: 350,
    photo_url: "/Assets/image/user_profile_avatar.png",
  };

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
    },
  ];

  const collectedPosts = [
    {
      id: 1,
      username: "陳小明",
      avatar: "https://picsum.photos/25?random=1",
      user_id: 1,
      content: "這是第一篇收藏的貼文，分享了我的日常生活。",
      media_url: "https://picsum.photos/600/400?random=1",
      tags: ["生活", "日常", "分享"],
    },
    {
      id: 2,
      username: "李小華",
      avatar: "https://picsum.photos/25?random=2",
      user_id: 2,
      content: "我今天去爬山了，風景真美！",
      media_url: "https://picsum.photos/600/400?random=2",
      tags: ["爬山", "自然", "風景"],
    },
    {
      id: 3,
      username: "王大強",
      avatar: "https://picsum.photos/25?random=3",
      user_id: 3,
      content: "今天吃了超好吃的火鍋，推薦大家來嘗試！",
      media_url: "https://picsum.photos/600/400?random=3",
      tags: ["美食", "火鍋"],
    },
  ];

  const favoriteItems = [
    {
      name: "白T萬歲",
      category: "t-shirt",
      brand: "UNIQLO",
      price: 150,
      image: "/Assets/image/Uniqlo_white_Tshirt.png",
      color: "白色",
      tags: ["#休閒", "#上課"],
    },
    {
      name: "短褲",
      category: "bottom",
      brand: "GU",
      price: 70,
      image: "/Assets/image/closet_04.png",
      color: "藍色",
      tags: ["#夏日", "#運動"],
    },
    {
      name: "西裝外套",
      category: "coat",
      brand: "UNIQLO",
      price: 220,
      image: "/Assets/image/closet_06.png",
      color: "黑色",
      tags: ["#正式", "#商務"],
    },
    {
      name: "連身裙",
      category: "dress",
      brand: "GU",
      price: 100,
      image: "/Assets/image/closet_02.png",
      color: "紅色",
      tags: ["#派對", "#春季"],
    },
    {
      name: "小白鞋",
      category: "shoes",
      brand: "無印",
      price: 80,
      image: "/Assets/image/closet_05.png",
      color: "白色",
      tags: ["#百搭", "#日常"],
    },
    {
      name: "牛仔褲",
      category: "bottom",
      brand: "GU",
      price: 120,
      image: "/Assets/image/closet_03.png",
      color: "藍色",
      tags: ["#經典", "#耐用"],
    },
  ];

  const loading = document.getElementById("loading");
  const error = document.getElementById("error");
  const profile = document.getElementById("profile");

  // 填入用戶資料
  loading.style.display = "none";
  error.style.display = "none";
  profile.style.display = "block";

  document.getElementById("profileImage").src = user.photo_url || "default.jpg";
  document.getElementById("firstName").textContent = user.first_name;
  document.getElementById("username").textContent = `@${user.username}`;
  document.getElementById("bio").textContent = user.bio;
  document.getElementById("gender").textContent = user.gender;
  document.getElementById("stats").textContent = `${user.posts_count} 貼文 | ${user.followers_count} 粉絲 | ${user.following_count} 追蹤中`;

  const setActiveTab = (tab) => {
    const tabContent = document.getElementById("tabContent");
    tabContent.innerHTML = ""; // 清除既有內容

    if (tab === "posts") {
      tabContent.innerHTML = '<div id="post-container"></div>';
      renderPosts();
    } else if (tab === "favorites") {
      renderFavorites(tabContent);
    } else if (tab === "likes") {renderlikes(tabContent);
    }
  };

  const renderPosts = () => {
    const postContainer = document.getElementById("post-container");
  
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      // 新增外框樣式
      postElement.className = "post mb-5 p-3 border rounded";
      postElement.innerHTML = `
        <div class="post-header d-flex justify-content-between align-items-center">
          <div class="post-userinfo d-flex align-items-center">
            <img src="${post.avatar}" alt="User Avatar" class="post-avatar rounded-circle" />
            <span class="post-username ms-2">${post.username}</span>
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
  
          <!-- 新增留言按鈕和留言數 -->
          <button class="btn btn-outline-primary me-2" onclick="commentOnPost(${post.id})">留言</button>
          <span class="me-3" id="comments-${post.id}">${post.comments} 則留言</span>
        </div>
      `;
      postContainer.appendChild(postElement);
    });
  };
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("zh-TW", { hour12: false });
  };

  const renderFavorites = (container) => {
    if (collectedPosts.length === 0) {
      container.innerHTML = `<p>目前沒有收藏的貼文。</p>`;
      return;
    }

    collectedPosts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className = "post mb-5 p-3 border rounded";
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

        <div class="post-image mt-3">
          <img src="${post.media_url}" alt="Post Media" class="img-fluid w-100 rounded" />
        </div>

        <div class="post-content mt-3">
          <p>${post.content}</p>
          <p>標籤：${post.tags.join(", ")}</p>
        </div>

        <div class="post-actions mt-3 d-flex align-items-center">
          <button class="btn btn-outline-secondary me-2">讚</button>
          <span class="me-3">20 個讚</span>
          <button class="btn btn-outline-secondary me-2">留言</button>
          <span>5 則留言</span>
        </div>
      `;
      container.appendChild(postElement);
    });
  };

  const renderlikes = (container) => {
    if (favoriteItems.length === 0) {
      container.innerHTML = `<p>目前沒有收藏的單品。</p>`;
      return;
    }
  
    // 新增 Row 容器
    const row = document.createElement("div");
    row.className = "row g-4";
  
    favoriteItems.forEach((item) => {
      // 單品卡片
      const col = document.createElement("div");
      col.className = "col-md-6"; // 每列兩個
      col.innerHTML = `
        <div class="favorite-item border rounded position-relative p-3">
          <!-- 愛心圖示 -->
           <img src="/Assets/image/愛了.png" alt="Favorite Icon" class="position-absolute top-0 end-0 m-2" style="width: 50px; height: 50px;">
  
          <div class="d-flex align-items-center">
            <img src="${item.image}" alt="${item.name}" class="rounded me-3" 
              style="width: 80px; height: 80px; object-fit: cover;">
            <div>
              <h5>${item.name}</h5>
              <p>品牌：${item.brand}</p>
              <p>顏色：${item.color}</p>
              <p>標籤：${item.tags.join(" ")}</p>
              <p>價格：NT$${item.price}</p>
            </div>
          </div>
        </div>
      `;
  
      row.appendChild(col);
    });
  
    container.appendChild(row);
  };

  
  document.querySelectorAll(".nav-link").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      const tabName = tab.getAttribute("onclick").replace("setActiveTab('", "").replace("')", "");
      setActiveTab(tabName);
    });
  });

  setActiveTab("posts");
});



