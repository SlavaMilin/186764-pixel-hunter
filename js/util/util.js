export default class Util {
  static render(html) {
    const element = document.createElement(`template`);
    element.innerHTML = html.trim();
    return element.content;
  }
}
