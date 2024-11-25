const outfits = [
  {
    id: 1,
    outfit_image: "/Assets/image/suggest_01.png",
    outfit_name: "正式場合穿搭",
    created_at: "2024-11-25T07:51:42",
  },
  {
    id: 2,
    outfit_image: "/Assets/image/suggest_02.png",
    outfit_name: "戶外活動穿搭",
    created_at: "2024-11-20T10:00:00",
  },
  {
    id: 3,
    outfit_image: "/Assets/image/suggest_03.png",
    outfit_name: "日常休閒穿搭",
    created_at: "2024-11-18T15:30:00",
  },
];

function deleteItems() {
  const selectedCheckboxes = document.querySelectorAll('.outfit-checkbox:checked');
  if (selectedCheckboxes.length === 0) {
    alert("請先勾選要刪除的穿搭組合！");
    return;
  }

  const confirmDeletion = confirm("確定要刪除所選的穿搭組合嗎？");
  if (!confirmDeletion) return;

  selectedCheckboxes.forEach(checkbox => {
    const card = checkbox.closest('.card');
    card.remove();
  });
}

function renderOutfits() {
  const outfitList = document.getElementById('outfit-list');
  outfits.forEach(outfit => {
    const card = document.createElement('div');
    card.className = 'card col-4 mb-3';
    card.innerHTML = `
      <div class="form-check">
        <input class="form-check-input outfit-checkbox" type="checkbox" value="${outfit.id}" id="outfit-${outfit.id}">
        <label class="form-check-label" for="outfit-${outfit.id}"></label>
      </div>
      <img src="${outfit.outfit_image}" class="card-img-top" alt="${outfit.outfit_name}" />
      <div class="card-body">
        <h5 class="card-title">${outfit.outfit_name}</h5>
        <p class="card-text">
          <small class="text-muted">建立日期: ${new Date(outfit.created_at).toLocaleString()}</small>
        </p>
        <a href="closet_outfit_detail.html?id=${outfit.id}" class="btn btn-primary">查看詳情</a>
      </div>
    `;
    outfitList.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderOutfits);
