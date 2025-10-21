export default function checkout3_1() {
    const el = document.createElement("section");
    el.innerHTML = `
    <h2>🧾 電子發票</h2>
    <p>請輸入電子發票寄送電子信箱。</p>
    <a href="#checkout_success">完成結帳</a>
  `;
    return el;
}
