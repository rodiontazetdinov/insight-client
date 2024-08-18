setTimeout(function () {
  const rows = document.querySelectorAll("tr");
  console.log("rows do", rows);
  rows.forEach((row) => {
    const cells = row.getElementsByTagName("td");
    if (cells.length >= 10) {
      alert("test");
      const value = cells[9].textContent.trim();
      const numberValue = parseInt(value.replace(/,/g, ""), 10);
      if (numberValue < 45000) {
        row.remove();
      }
    }
  });
}, 100);

setTimeout(function () {
  let row = document.querySelectorAll("tr");
  row.forEach((item) => item.remove());
}, 100);

setTimeout(function () {
  const rows = document.querySelectorAll("tr");
  rows.forEach((row) => {
    const cells = row.getElementsByTagName("td");
    if (cells.length >= 10) {
      const value = cells[9].textContent.trim();
      const numberValue = parseInt(value.replace(/,/g, ""), 10);
      if (numberValue < 45000 || numberValue > 100000) {
        return;
      }
      else {
        const button = row.querySelector('.in_progress');
        if (button) {
          button.click();
        }
      }
    }
  }
);
window.location.reload()
}, 100);

{/* <button type="button" class="in_progress btn btn-info" data-in-progress="/m_operation/mark_in_progress/9263986/">
                                In work
                            </button> */}