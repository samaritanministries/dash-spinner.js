import Backbone from "backbone";

export default class extends Backbone.View {

  events() {
    return {
      "click [data-action=start]" : "startSpinner",
      "click [data-action=stop]" : "stopSpinner",
      "click [data-action=start-button-spinner]" : "startButtonSpinner",
      "click [data-action=stop-button-spinner]" : "stopButtonSpinner"
    }
  }

  render() {
    start = $("<div data-action=\"start\">Start</div>")
    stop = $("<div data-action=\"stop\">Stop</div>")
    startButton = $("<div data-action=\"start-button-spinner\">Start Button</div>")
    stopButton = $("<div data-action=\"stop-button-spinner\">Stop Button</div>")
    this.$el.append(start)
      .append(stop)
      .append(startButton)
      .append(stopButton)
    return this
  }

  initialize(options) {
    this.options = options
    this.buttonSpinner = new DashSpinner.Spinner({
      target: this.options.buttonSpinnerTarget
    })
    this.spinner = new DashSpinner.Spinner({
      target: this.options.spinnerTarget,
      spinnerConfiguration: options.spinnerConfiguration
    })
  }

  startSpinner() {
    this.spinner.spin()
  }

  stopSpinner() {
    this.spinner.stop()
  }

  startButtonSpinner() {
    this.buttonSpinner.spin()
  }

  stopButtonSpinner() {
    this.buttonSpinner.stop()
  }

}
