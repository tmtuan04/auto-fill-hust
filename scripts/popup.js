const fillBtn = document.getElementById("fillForm");
const statusBox = document.getElementById("statusBox");
const statusDetail = document.getElementById("statusDetail");

function showStatus(kind, title, detail = "") {
  statusBox.className = `alert mb-0 is-${kind}`;
  if (kind === "ok") statusBox.classList.add("alert-success");
  if (kind === "partial") statusBox.classList.add("alert-warning");
  if (kind === "error") statusBox.classList.add("alert-danger");
  statusBox.textContent = title;
  statusDetail.textContent = detail;
}

function formatResult(result) {
  const lines = [];
  lines.push(
    `Khớp thành công: ${result.matchedCount ?? 0}/${result.questionsOnPage ?? 0} câu trên trang`,
  );
  if (result.bankSize != null) {
    lines.push(`Ngân hàng đáp án: ${result.bankSize} câu`);
  }
  if (result.failedCount) {
    lines.push(`Có đáp án nhưng không click được: ${result.failedCount}`);
  }
  if (result.essayFilled) {
    lines.push("Đã điền câu tự luận (Thượng tôn pháp luật).");
  } else if (result.essayReason === "not-target-form") {
    lines.push("Bỏ qua tự luận (không thấy câu hỏi khớp).");
  }

  const failed = Array.isArray(result.failed) ? result.failed.slice(0, 5) : [];
  if (failed.length) {
    lines.push("");
    lines.push("Một số câu lỗi:");
    failed.forEach((q) => lines.push(`• ${q}`));
    if (result.failed.length > failed.length) {
      lines.push(`… và ${result.failed.length - failed.length} câu khác`);
    }
  }

  return lines.join("\n");
}

fillBtn.addEventListener("click", () => {
  fillBtn.disabled = true;
  showStatus("partial", "Đang điền…", "");

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs.length || !tabs[0].id) {
      showStatus("error", "Không tìm thấy tab đang mở.");
      fillBtn.disabled = false;
      return;
    }

    const tab = tabs[0];
    const url = tab.url || "";
    const isForms =
      /^https:\/\/forms\.office\.com\//.test(url) ||
      /^https:\/\/forms\.cloud\.microsoft\//.test(url);

    if (!isForms) {
      showStatus(
        "error",
        "Hãy mở tab Microsoft Forms (bài thi) rồi bấm Fill Form.",
        url ? `Tab hiện tại: ${url}` : "",
      );
      fillBtn.disabled = false;
      return;
    }

    chrome.tabs.sendMessage(tab.id, { action: "fillForm" }, (response) => {
      fillBtn.disabled = false;

      if (chrome.runtime.lastError) {
        showStatus(
          "error",
          "Không kết nối được content script.",
          `${chrome.runtime.lastError.message}\nThử F5 trang Forms rồi bấm lại.`,
        );
        return;
      }

      if (!response) {
        showStatus("error", "Không nhận được phản hồi từ trang Forms.");
        return;
      }

      const kind =
        response.status === "ok"
          ? "ok"
          : response.status === "error"
            ? "error"
            : "partial";

      showStatus(
        kind,
        response.message || "Hoàn tất.",
        formatResult(response),
      );
    });
  });
});
