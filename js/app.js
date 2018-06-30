import Model from "./model/model";
import Backend from "./util/backend";
import IntroPresenter from "./presenter/intro-presenter";
import {GameType} from "./util/config";
import Util from "./util/util";
import GameThreePresenter from "./presenter/game-three-presenter";
import GameTwoPresenter from "./presenter/game-two-presenter";
import GameOnePresenter from "./presenter/game-one-presenter";
import RulesPresenter from "./presenter/rules-presenter";
import HeaderPresenter from "./presenter/header-presenter";
import FinishPresenter from "./presenter/finish-presenter";
import ModalErrorPresenter from "./presenter/modal-error-presenter";
import SpinnerPresenter from "./presenter/spinner-presenter";


export default class App {
  gameSelecter(type, model) {
    switch (type) {
      case GameType.ONE_OF_THREE:
        App.showGameThree(model);
        break;

      case GameType.TWO_OF_TWO:
        App.showGameTwo(model);
        break;

      case GameType.TINDER_LIKE:
        App.showGameOne(model);
        break;

      case GameType.RULES:
        App.showRules(model);
        break;

      case GameType.RESTART:
        App.showRules(model);
        break;

      case GameType.FINISH:
        App.showFinish(model);
        break;
    }
  }

  showIntro() {
    const model = new Model();
    model.addSubscriber(this.gameSelecter);
    const backend = new Backend();
    const intro = new IntroPresenter(model);
    const spinner = new SpinnerPresenter(model);

    intro.render();
    spinner.render();

    backend.loadData().then((data) => {
      model.data = data;
    }).then(() => {
      const srcList = Util.chooseUnicImg(model._data);
      const promises = Util.addImgLoaders(srcList);
      return Promise.all(promises);
    }).then(() => {
      const rules = new RulesPresenter(model);
      rules.render();
    }).then(() => {
    }).catch((error) => {
      model.errorMessage = error;
      const modalError = new ModalErrorPresenter(model);
      modalError.render();
    }).then(() => spinner.remove());
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

