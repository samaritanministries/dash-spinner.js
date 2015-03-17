namespace("DashSpinner")

class DashSpinner.Spinner

  constructor: (options) ->
    @target = options.target
    @spinner = new window.Spinner(options.spinnerConfiguration)

  isSpinning: ->
    @target.children().length > 0

  spin: () ->
    @spinner.spin()
    @target.html(@spinner.el)

  stop: ->
    @target.html("")
