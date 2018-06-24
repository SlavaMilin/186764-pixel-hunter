import Model from "./model/model";
import Backend from "./util/backend";
import IntroPresenter from "./presenter/intro-presenter";


export default class App {
  static showRules() {
    const model = new Model();
    const backend = new Backend();
    const intro = new IntroPresenter(model);
    intro.render();
    backend.loadData().then((data) => {
      model.setData = data;
    });
  }
}

