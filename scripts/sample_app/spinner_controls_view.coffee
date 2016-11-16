namespace("SampleApp")

class SampleApp.SpinnerControlsView extends Backbone.View

  events:
    "click [data-action=start]" : "startSpinner"
    "click [data-action=stop]" : "stopSpinner"
    "click [data-action=start-button-spinner]" : "startButtonSpinner"
    "click [data-action=stop-button-spinner]" : "stopButtonSpinner"

  render: ->
    start = $("<div data-action=\"start\">Start</div>")
    stop = $("<div data-action=\"stop\">Stop</div>")
    startButton = $("<div data-action=\"start-button-spinner\">Start Button</div>")
    stopButton = $("<div data-action=\"stop-button-spinner\">Stop Button</div>")
    @$el.append(start)
      .append(stop)
      .append(startButton)
      .append(stopButton)
    @

  initialize: (@options) ->
    @buttonSpinner = new DashSpinner.Spinner
      target: @options.buttonSpinnerTarget
    @spinner = new DashSpinner.Spinner
      target: @options.spinnerTarget
      spinnerConfiguration: @options.spinnerConfiguration

  startSpinner: ->
    @spinner.spin()

  stopSpinner: ->
    @spinner.stop()

  startButtonSpinner: ->
    @buttonSpinner.spin()

  stopButtonSpinner: ->
    @buttonSpinner.stop()
