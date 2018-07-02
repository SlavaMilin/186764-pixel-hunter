import AbstractView from "./abstract-view";

export default class SpinnerView extends AbstractView {
  constructor(model) {
    super(model);
  }

  get template() {
    return `
<div class ="spinner" style="position: absolute; top: 222px; left: calc(50% + 17px);">
<div class="loader">Loading...</div>
<style>
.loader {
  margin: 100px auto;
  font-size: 25px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #df4e4e, 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.5), -1.8em -1.8em 0 0em rgba(223,78,78, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.7), 1.8em -1.8em 0 0em #df4e4e, 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.5), 1.8em -1.8em 0 0em rgba(223,78,78, 0.7), 2.5em 0em 0 0em #df4e4e, 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.5), 2.5em 0em 0 0em rgba(223,78,78, 0.7), 1.75em 1.75em 0 0em #df4e4e, 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.5), 1.75em 1.75em 0 0em rgba(223,78,78, 0.7), 0em 2.5em 0 0em #df4e4e, -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.5), 0em 2.5em 0 0em rgba(223,78,78, 0.7), -1.8em 1.8em 0 0em #df4e4e, -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.5), -1.8em 1.8em 0 0em rgba(223,78,78, 0.7), -2.6em 0em 0 0em #df4e4e, -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.5), -2.6em 0em 0 0em rgba(223,78,78, 0.7), -1.8em -1.8em 0 0em #df4e4e;
  }
}
@keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #df4e4e, 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.5), -1.8em -1.8em 0 0em rgba(223,78,78, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.7), 1.8em -1.8em 0 0em #df4e4e, 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.5), 1.8em -1.8em 0 0em rgba(223,78,78, 0.7), 2.5em 0em 0 0em #df4e4e, 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.5), 2.5em 0em 0 0em rgba(223,78,78, 0.7), 1.75em 1.75em 0 0em #df4e4e, 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.5), 1.75em 1.75em 0 0em rgba(223,78,78, 0.7), 0em 2.5em 0 0em #df4e4e, -1.8em 1.8em 0 0em rgba(223,78,78, 0.2), -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.5), 0em 2.5em 0 0em rgba(223,78,78, 0.7), -1.8em 1.8em 0 0em #df4e4e, -2.6em 0em 0 0em rgba(223,78,78, 0.2), -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.5), -1.8em 1.8em 0 0em rgba(223,78,78, 0.7), -2.6em 0em 0 0em #df4e4e, -1.8em -1.8em 0 0em rgba(223,78,78, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(223,78,78, 0.2), 1.8em -1.8em 0 0em rgba(223,78,78, 0.2), 2.5em 0em 0 0em rgba(223,78,78, 0.2), 1.75em 1.75em 0 0em rgba(223,78,78, 0.2), 0em 2.5em 0 0em rgba(223,78,78, 0.2), -1.8em 1.8em 0 0em rgba(223,78,78, 0.5), -2.6em 0em 0 0em rgba(223,78,78, 0.7), -1.8em -1.8em 0 0em #df4e4e;
  }
}
</style>
</div>
    `;
  }
}
