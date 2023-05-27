const MasterCode = () => {
  const sectionEl = document.querySelectorAll(
    "div[data-purpose='curriculum-section-container'] button[aria-expanded='false']"
  );
  sectionEl.forEach((section) => {
    section.click();
  });

  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    if (!checkbox.checked) {
      checkbox.click();
    }
  });
};
MasterCode();
