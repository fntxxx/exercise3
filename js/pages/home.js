export default function home() {
    const el = document.createElement("section");
    el.innerHTML = `
    <h2>🏠 首頁</h2>
    <p>歡迎光臨我們的模組化購物網站。</p>
  `;
    return el;
}
