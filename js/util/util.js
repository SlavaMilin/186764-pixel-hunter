class Util {
  static render(html) {
    const container = document.querySelector(`#central`);
    container.innerHTML = html.trim();
  }
}

export default Util;
