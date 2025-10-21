export default function products() {
    const el = document.createElement("section");
    el.innerHTML = `
    <h2>🛍 商品列表</h2>
    <p>這裡顯示商品清單。</p>
  `;
    return el;
}
