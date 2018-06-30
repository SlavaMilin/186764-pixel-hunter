import Model from "./model/model";
import Backend from "./util/backend";
import IntroPresenter from "./presenter/intro-presenter";
import {GameType} from "./util/config";
import GameThreePresenter from "./presenter/game-three-presenter";
import GameTwoPresenter from "./presenter/game-two-presenter";
import GameOnePresenter from "./presenter/game-one-presenter";
import RulesPresenter from "./presenter/rules-presenter";
import HeaderPresenter from "./presenter/header-presenter";
import FinishPresenter from "./presenter/finish-presenter";
import ModalErrorPresenter from "./presenter/modal-error-presenter";


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

    if (type === GameType.RESTART) {
      App.showRules(model);
    }

    if (type === GameType.FINISH) {
      App.showFinish(model);
    }
  }

  showIntro() {
    const model = new Model();
    model.addSubscriber(this.gameSelecter);
    const backend = new Backend();
    const intro = new IntroPresenter(model);

    backend.loadData().then((data) => {
      model.data = data;
    }).then(() => {
      intro.render();
    }).catch((error) => {
      model.errorMessage = error;
      const modalError = new ModalErrorPresenter(model);
      modalError.render();
    });
  }

  static showRules(model) {
    const rules = new RulesPresenter(model);
    rules.render();
  }

  static showGameThree(model) {
    const gameThree = new GameThreePresenter(model);
    const header = new HeaderPresenter(model);
    gameThree.render();
    header.render();
  }

  static showGameTwo(model) {
    const gameTwo = new GameTwoPresenter(model);
    const header = new HeaderPresenter(model);
    gameTwo.render();
    header.render();
  }

  static showGameOne(model) {
    const gameOne = new GameOnePresenter(model);
    const header = new HeaderPresenter(model);
    gameOne.render();
    header.render();
  }

  static showFinish(model) {
    const backend = new Backend();
    backend.uploadStatistic(model.finalStatistic).then(() => {
      return backend.downloadStatistic(model.name);
    }).then((statistic) => {
      statistic = statistic.reverse();
      model.allStatistic = statistic;
    }).then(() => {
      const finish = new FinishPresenter(model);
      finish.render();
    }).catch((error) => {
      model.errorMessage = error;
      const modalError = new ModalErrorPresenter(model);
      modalError.render();
    });
  }
}

