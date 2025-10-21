export default function cart() {
    const el = document.createElement("section");
    el.innerHTML = `
    <h2>🛒 購物車</h2>
    <p>這裡顯示已加入的商品。</p>
    <a href="#checkout1">前往結帳</a>
  `;
    return el;
}
