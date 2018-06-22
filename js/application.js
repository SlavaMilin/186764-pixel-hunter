import Model from "model/model";
import Backend from "util/backend";
import Intro from "./presenter/intro";


export default class Application {
  static showRules() {
    const intro = new Intro();
    intro.render();
  }
}
