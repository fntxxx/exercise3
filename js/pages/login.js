export default function login() {
    const el = document.createElement("section");
    el.innerHTML = `
    <h2>🔑 登入</h2>
    <form>
      <label>Email：<input type="email" required></label><br>
      <label>密碼：<input type="password" required></label><br>
      <button type="submit">登入</button>
    </form>
  `;
    return el;
}
