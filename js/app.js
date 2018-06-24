import Model from "./model/model";
import Backend from "./util/backend";
import IntroPresenter from "./presenter/intro-presenter";
import {GameType} from "./util/config";
import GameThreePresenter from "./presenter/game-three-presenter";
import GameTwoPresenter from "./presenter/game-two-presenter";
import GameOnePresenter from "./presenter/game-one-presenter";
import RulesPresenter from "./presenter/rules-presenter";


export default class App {
  gameSelecter(type, model) {
    if (type === GameType.ONE_OF_THREE) {
      App.showGameThree(model);
    }

    if (type === GameType.TWO_OF_TWO) {
      App.showGameTwo(model);
    }

    if (type === GameType.TINDER_LIKE) {
      App.showGameOne(model);
    }

    if (type === GameType.RULES) {
      App.showRules(model);
    }
  }

  showIntro() {
    const model = new Model();
    model.addSubscriber(this.gameSelecter);
    const backend = new Backend();
    const intro = new IntroPresenter(model);
    intro.render();
    backend.loadData().then((data) => {
      model.data = data;
    });
  }

  static showRules(model) {
    const presenter = new RulesPresenter(model);
    presenter.render();
  }

  static showGameThree(model) {
    const presenter = new GameThreePresenter(model);
    presenter.render();
  }

  static showGameTwo(model) {
    const presenter = new GameTwoPresenter(model);
    presenter.render();
  }

  static showGameOne(model) {
    const presenter = new GameOnePresenter(model);
    presenter.render();
  }
}

