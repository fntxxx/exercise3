export default function header() {
    const el = document.createElement("header");
    el.innerHTML = `
    <nav>
      <a href="#home">首頁</a>
      <a href="#products">商品列表</a>
      <a href="#cart">購物車</a>
      <a href="#login">登入</a>
    </nav>
  `;
    return el;
}
