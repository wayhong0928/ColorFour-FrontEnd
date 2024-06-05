// loading header, footer and sidebar-toggle
/**
 * 異步加載 HTML 模板到指定的元素中。
 * @param {string} templateId - 將模板載入的元素 ID。
 * @param {string} filePath - HTML 模板檔案的路徑。
 */
async function loadTemplate(templateId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}`);
    }
    const text = await response.text();
    const element = document.getElementById(templateId);
    if (element) {
      element.innerHTML = text;
    } else {
      console.error(`Element with id ${templateId} not found.`);
    }
  } catch (error) {
    console.error("Error loading template:", error);
  }
}

function initSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
  } else {
    console.error("Sidebar or toggle button not found.");
  }
}

document.addEventListener("DOMContentLoaded", async function () {

  await loadTemplate("header", `header.html`);
  await loadTemplate("footer", `footer.html`);
  
  initSidebar();
});
// end of loading header, footer and sidebar-toggle