const pages = [
  ["home", "Beranda"],
  ["identity", "Identity"],
  ["philosophy", "Philosophy"],
  ["vision", "Vision"],
  ["edge", "The Edge"],
  ["execution", "Execution"],
  ["director", "Director"]
];

const languageSelect = document.querySelector("#cms-language");
const pageSelect = document.querySelector("#cms-page");
const fields = document.querySelector("#cms-fields");
const status = document.querySelector("#cms-status");
const storageKey = "noir-cms-content";

pages.forEach(([value, label]) => pageSelect.add(new Option(label, value)));

function readContent() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderFields() {
  const language = languageSelect.value;
  const page = pageSelect.value;
  const content = readContent();
  const value = page === "home"
    ? content[language]?.home || {}
    : content[language]?.pages?.[page] || {};

  document.querySelector("#cms-title").textContent = page === "home" ? "Beranda" : pageSelect.selectedOptions[0].textContent;
  if (page === "home") {
    fields.innerHTML = [
      ["heroLabel", "Lokasi", "JAKARTA"],
      ["manifestoFirst", "Pembuka pertama", "Disiplin dalam Diam,"],
      ["manifestoSecond", "Pembuka kedua", "Elegan dalam Tindakan."],
      ["heroDescription", "Deskripsi utama", ""],
      ["quote", "Kutipan", ""]
    ].map(([key, label, fallback]) => `
      <div class="cms-field">
        <label for="field-${key}">${label}</label>
        <textarea id="field-${key}" data-key="${key}" data-lines="${key === "heroDescription" || key === "quote" ? "0" : "1"}">${escapeHtml(value[key] ?? fallback)}</textarea>
      </div>`).join("");
  } else {
    fields.innerHTML = `
      <div class="cms-field">
        <label for="field-title">Judul halaman</label>
        <input id="field-title" data-key="title" value="${escapeHtml(value.title || "")}">
      </div>
      <div class="cms-field">
        <label for="field-lead">Pengantar</label>
        <textarea id="field-lead" data-key="lead">${escapeHtml(value.lead || "")}</textarea>
      </div>
      <div class="cms-field">
        <label for="field-eyebrow">Label halaman</label>
        <input id="field-eyebrow" data-key="eyebrow" value="${escapeHtml(value.eyebrow || "")}">
      </div>
      <div class="cms-field">
        <label for="field-sections">Isi bagian</label>
        <textarea id="field-sections" data-key="sections" data-lines="0">${escapeHtml(JSON.stringify(value.sections || [], null, 2))}</textarea>
      </div>`;
  }
  status.textContent = "";
}

function save() {
  const content = readContent();
  const language = languageSelect.value;
  const page = pageSelect.value;
  content[language] ||= {};
  if (page === "home") {
    content[language].home ||= {};
    fields.querySelectorAll("[data-key]").forEach((field) => {
      content[language].home[field.dataset.key] = field.value;
    });
  } else {
    content[language].pages ||= {};
    content[language].pages[page] ||= {};
    fields.querySelectorAll("[data-key]").forEach((field) => {
      if (field.dataset.key === "sections") {
        try {
          content[language].pages[page].sections = JSON.parse(field.value || "[]");
        } catch {
          throw new Error("Section harus berupa JSON yang valid.");
        }
      } else {
        content[language].pages[page][field.dataset.key] = field.value;
      }
    });
  }
  localStorage.setItem(storageKey, JSON.stringify(content));
  status.textContent = "Perubahan tersimpan. Buka beranda atau reload halaman publik untuk melihatnya.";
}

document.querySelector("#save-button").addEventListener("click", () => {
  try {
    save();
  } catch (error) {
    status.textContent = error.message;
  }
});

document.querySelector("#reset-button").addEventListener("click", () => {
  const content = readContent();
  const language = languageSelect.value;
  const page = pageSelect.value;
  if (page === "home") delete content[language]?.home;
  else delete content[language]?.pages?.[page];
  localStorage.setItem(storageKey, JSON.stringify(content));
  renderFields();
  status.textContent = "Halaman ini dikembalikan ke konten default.";
});

document.querySelector("#export-button").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(readContent(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "noir-cms-content.json";
  link.click();
  URL.revokeObjectURL(url);
});

document.querySelector("#import-button").addEventListener("click", () => {
  document.querySelector("#import-file").click();
});

document.querySelector("#import-file").addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    localStorage.setItem(storageKey, JSON.stringify(imported));
    renderFields();
    status.textContent = "JSON berhasil diimpor.";
  } catch {
    status.textContent = "File JSON tidak valid.";
  }
  event.target.value = "";
});

languageSelect.addEventListener("change", renderFields);
pageSelect.addEventListener("change", renderFields);
renderFields();
