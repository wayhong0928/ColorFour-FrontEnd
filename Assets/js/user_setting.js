let user = {
  profile_image: null,
  nickname: "",
  username: "",
  gender: "",
  talk: "",
  birthday: "",
  email: "",
  isGoogleLinked: false,
  isLineLinked: false,
  loginProvider: "",
};

function handleImageChange(event) {
  const file = event.target.files[0];
  if (file) {
    const imagePreview = document.getElementById("image-preview");
    imagePreview.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="預覽" class="preview-image">`;
    user.profile_image = file;
  }
}

function savePersonalInfo() {
  user.nickname = document.getElementById("nickname").value;
  user.username = document.getElementById("username").value;
  user.gender = document.querySelector("input[name='gender']:checked").value;
  user.talk = document.getElementById("talk").value;
  user.birthday = document.getElementById("birthday").value;
  user.email = document.getElementById("email").value;

  console.log("Saved user data:", user);
  alert("個人資料已更新");
  window.location.href = "/Pages/user_profile.html"; 
}

// 動態生成帳戶管理部分
function renderLinkedAccounts() {
  const linkedAccounts = document.getElementById("linked-accounts");
  linkedAccounts.innerHTML = `
    ${user.isGoogleLinked ? `
      <div class="account-item linked">
        <i class="fab fa-google"></i> Google 已連結
        <button class="unlink-button" onclick="unlinkGoogle()" ${user.loginProvider === "google" && !user.isLineLinked ? "disabled" : ""}>解除連結</button>
      </div>` : `
      <div class="account-item" onclick="connectGoogle()">
        <i class="fab fa-google"></i> 連結 Google 帳號
      </div>`}
    ${user.isLineLinked ? `
      <div class="account-item linked">
        <i class="fab fa-line"></i> Line 已連結
        <button class="unlink-button" onclick="unlinkLine()" ${user.loginProvider === "line" && !user.isGoogleLinked ? "disabled" : ""}>解除連結</button>
      </div>` : `
      <div class="account-item" onclick="connectLine()">
        <i class="fab fa-line"></i> 連結 Line 帳號
      </div>`}
  `;
}

function connectGoogle() {
  user.isGoogleLinked = true;
  renderLinkedAccounts();
  alert("已連結 Google 帳號");
}

function connectLine() {
  user.isLineLinked = true;
  renderLinkedAccounts();
  alert("已連結 Line 帳號");
}

function unlinkGoogle() {
  user.isGoogleLinked = false;
  renderLinkedAccounts();
  alert("已解除 Google 帳號連結");
}

function unlinkLine() {
  user.isLineLinked = false;
  renderLinkedAccounts();
  alert("已解除 Line 帳號連結");
}

// 初始化頁面
document.addEventListener("DOMContentLoaded", () => {
  renderLinkedAccounts();
});
