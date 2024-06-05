// loading header, aside, footer
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

document.addEventListener("DOMContentLoaded", async function () {
  const currentFile = location.pathname.split("/").pop();
  let basePath = "./";

  if (currentFile !== "index.html") {
    basePath = "../";
  }

  await loadTemplate("header", `${basePath}templates/header.html`);
  await loadTemplate("footer", `${basePath}templates/footer.html`);

  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.getElementById("sidebar-toggle");

  if (sidebar && sidebarToggle) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
  } else {
    console.error("Sidebar or toggle button not found.");
  }
});
