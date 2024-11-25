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
    },
    {
      id: 2,
      username: "潘美人",
      avatar: "https://picsum.photos/30?random=2",
      content: "剛到達冰島，極光真的美得讓人驚嘆！",
      media_url: "https://picsum.photos/600/400?random=2",
      location: "冰島",
      created_at: "2024-11-01T20:15:30",
    },
    {
      id: 3,
      username: "秉哥不畫餅",
      avatar: "https://picsum.photos/30?random=3",
      content: "今天嘗試了全新的法式甜點，非常推薦！",
      media_url: "https://picsum.photos/600/400?random=3",
      location: "巴黎",
      created_at: "2024-10-20T14:00:00",
    },
  ];

  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get("id"));

  const post = posts.find((post) => post.id === postId);

  if (post) {
    document.getElementById("postDescription").value = post.content;
    document.getElementById("postLocation").value = post.location;
    document.getElementById("postTime").value = new Date(post.created_at).toISOString().slice(0, 16); // 轉換時間格式
    document.getElementById("previewImage").src = post.media_url;
  }

  document.getElementById("postImage").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("previewImage").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  document.getElementById("editPostForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("貼文已更新！");
    window.location.href = "social_index.html"; // 保存變更後跳轉到首頁
  });
});
