namespace("SampleApp")

class SampleApp.SpinnerControlsView extends Backbone.View

  events:
    "click [data-id=start]" : "startSpinner"
    "click [data-id=stop]" : "stopSpinner"

  render: ->
    @$el.html('<div data-id="start">Start</div><div data-id="stop">Stop</div>')
    @

  initialize: (@options) ->
    @spinner = new DashSpinner.Spinner
      target: @options.spinnerTarget
      spinnerConfiguration: @options.spinnerConfiguration

  startSpinner: ->
    @spinner.spin()

  stopSpinner: ->
    @spinner.stop()
