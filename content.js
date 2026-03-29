if (!window.__CR_CHECKLIST_LOADED__) {
  window.__CR_CHECKLIST_LOADED__ = true;

  let isOpen = false;

  const checklistItems = [
    { id: "logic", label: "Logic is correct" },
    { id: "edge_cases", label: "Edge cases handled" },
    { id: "logging", label: "Proper logging added" },
    { id: "error_handling", label: "Error handling done" },
    { id: "naming", label: "Naming is meaningful" },
    { id: "test", label: "Tests are added" },
    { id: "modular", label: "Code is modular" }
  ];

  let state = {};

  function getStorageKey() {
  const url = window.location.origin + window.location.pathname;
  return `checklist:${url}`;
}

  async function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.id = "cr-checklist-sidebar";

  sidebar.innerHTML = `
    <div class="header">
      <h3>Code Review Checklist</h3>
      <button id="close-btn">✖</button>
    </div>
    <div class="content">
      <div id="checklist-container"></div>
    </div>
  `;

  document.body.appendChild(sidebar);

  await loadState();
  renderChecklist();
  attachListeners();

  document.getElementById("close-btn").onclick = () => {
    toggleSidebar();
  };
}

async function loadState() {
  const key = getStorageKey();

  return new Promise((resolve) => {
    chrome.storage.local.get([key], (result) => {
    //   console.log("Loaded state:", result[key]);
      state = result[key] || {};
      resolve();
    });
  });
}

function saveState() {
  const key = getStorageKey();

//   console.log("Saving with key:", key);

  chrome.storage.local.set({
    [key]: state
  });
}

function attachListeners() {
  const container = document.getElementById("checklist-container");

  container.addEventListener("click", (e) => {
    const item = e.target.closest(".checklist-item");

    if (!item) return;

    const id = item.getAttribute("data-id");

    // console.log("Clicked:", id);

    state[id] = !state[id];

    saveState();
    renderChecklist();
  });
}

function renderChecklist() {
  const container = document.getElementById("checklist-container");

  container.innerHTML = checklistItems.map(item => {
    const checked = state[item.id];

    return `
      <div class="checklist-item" data-id="${item.id}">
        <input type="checkbox" ${checked ? "checked" : ""} />
        <span class="${checked ? "checked" : ""}">
          ${item.label}
        </span>
      </div>
    `;
  }).join("");
}

function attachListeners() {
  const container = document.getElementById("checklist-container");

//   console.log("Attaching listener to:", container);

  container.addEventListener("click", (e) => {
    // console.log("Container clicked", e.target);

    const item = e.target.closest(".checklist-item");

    if (!item) return;

    const id = item.getAttribute("data-id");

    // console.log("Clicked:", id);

    state[id] = !state[id];

    saveState();
    renderChecklist();
  });
}

  function toggleSidebar() {
    let sidebar = document.getElementById("cr-checklist-sidebar");

    if (!sidebar) {
      createSidebar();
      isOpen = true;
      return;
    }

    isOpen = !isOpen;
    sidebar.style.display = isOpen ? "block" : "none";
  }

  chrome.runtime.onMessage.addListener((message) => {
    if (message.type === "TOGGLE_SIDEBAR") {
      toggleSidebar();
    }
  });
}